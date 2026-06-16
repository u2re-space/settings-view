/**
 * Settings View
 *
 * Shell-agnostic settings component.
 * Provides application configuration UI.
 */

import { H } from "fest/lure";
import { ref } from "fest/object";
import { removeAdopted } from "fest/dom";
import type { View, ViewOptions, ViewLifecycle, ShellContext } from "shells/types";
import type { BaseViewOptions } from "views/types";
import { SettingsChannelAction } from "views/apis/channel-actions";

import { attachSettingsInlineStyles, attachSettingsInlineStylesWhenConnected } from "./ts/settings-styles-attach";
import { createSettingsView } from "./ts/Settings";

// COMPAT: legacy minimal shell (`channel-unknown.ts`) and the view-factory
// resolver (`registry.ts`) look up `module.createSettingsView`. Re-export it so
// `import("views/settings").createSettingsView(...)` keeps working.
export { createSettingsView } from "./ts/Settings";
export {
    registerSettingsContribution,
    getSettingsContributions,
    type SettingsContribution
} from "com/config/SettingsContributions";
export {
    registerBuiltinSettingsContributions,
    registerAirpadSettingsContribution,
    registerCwspSettingsContribution,
    registerWorkcenterSettingsContribution,
    registerReaderSettingsContribution,
    registerDeviceSettingsContribution
} from "./ts/settings-contributions";

// ============================================================================
// SETTINGS TYPES
// ============================================================================

interface AppSettings {
    appearance: {
        theme: "auto" | "light" | "dark";
        fontSize: "small" | "medium" | "large";
    };
    ai: {
        apiKey?: string;
        model?: string;
        autoProcess?: boolean;
    };
    general: {
        autosave: boolean;
        notifications: boolean;
    };
}

const defaultSettings: AppSettings = {
    appearance: { theme: "auto", fontSize: "medium" },
    ai: { autoProcess: true },
    general: { autosave: true, notifications: true }
};

// ============================================================================
// SETTINGS OPTIONS
// ============================================================================

export interface SettingsOptions extends BaseViewOptions {
    onThemeChange?: (theme: "auto" | "light" | "dark") => void;
    onSettingsChange?: (settings: AppSettings) => void;
}

// ============================================================================
// SETTINGS VIEW
// ============================================================================

export class SettingsView implements View {
    id = "settings" as const;
    name = "Settings";
    icon = "gear";

    private options: SettingsOptions;
    private shellContext?: ShellContext;
    private element: HTMLElement | null = null;
    private settings = ref<AppSettings>(defaultSettings);

    /** Document-level adopted sheet (PWA / no shadow). */
    private _sheet: CSSStyleSheet | null = null;
    /** Shell open-shadow: same CSS must be on `shadowRoot.adoptedStyleSheets` — document rules do not pierce. */
    private _shadowSheet: { sheet: CSSStyleSheet; root: ShadowRoot } | null = null;
    /** Fallback if constructable stylesheet fails in a shadow root. */
    private _styleEl: HTMLStyleElement | null = null;

    lifecycle: ViewLifecycle = {
        // WHY: Append the view to the shell before adopting — then `getRootNode()` is the shell ShadowRoot.
        onUnmount: () => {
            this.clearSettingsStylesheet();
        },
        onShow: () => {
            this.applySettingsStylesheet();
            this.element?.dispatchEvent(new CustomEvent("cwsp-settings-resync", { bubbles: false }));
        },
        onHide: () => {
            /* WHY: Keep inline Settings.scss on cached view roots — clearing on hide blanked Capacitor APK. */
        },
    };

    constructor(options: SettingsOptions = {}) {
        this.options = options;
        this.shellContext = options.shellContext;
    }

    render(options?: ViewOptions): HTMLElement {
        if (options) {
            this.options = { ...this.options, ...options };
            this.shellContext = options.shellContext || this.shellContext;
        }

        this.loadSettings();

        /*this.element = H`
            <div class="view-settings">
                <div class="view-settings__content">
                    <h1 class="view-settings__title">Settings</h1>

                    <section class="view-settings__section">
                        <h2>Appearance</h2>
                        <div class="view-settings__group"><form style="display: contents;" onsubmit="return false;">
                            <label class="view-settings__label">
                                <span>Theme</span>
                                <select data-setting="appearance.theme" class="view-settings__select">
                                    <option value="auto" ${this.settings.value.appearance.theme === "auto" ? "selected" : ""}>Auto</option>
                                    <option value="light" ${this.settings.value.appearance.theme === "light" ? "selected" : ""}>Light</option>
                                    <option value="dark" ${this.settings.value.appearance.theme === "dark" ? "selected" : ""}>Dark</option>
                                </select>
                            </label>
                            <label class="view-settings__label">
                                <span>Font Size</span>
                                <select data-setting="appearance.fontSize" class="view-settings__select">
                                    <option value="small" ${this.settings.value.appearance.fontSize === "small" ? "selected" : ""}>Small</option>
                                    <option value="medium" ${this.settings.value.appearance.fontSize === "medium" ? "selected" : ""}>Medium</option>
                                    <option value="large" ${this.settings.value.appearance.fontSize === "large" ? "selected" : ""}>Large</option>
                                </select>
                            </label>
                        </form></div>
                    </section>

                    <section class="view-settings__section">
                        <h2>AI Configuration</h2>
                        <div class="view-settings__group"><form style="display: contents;" onsubmit="return false;">
                            <label class="view-settings__label">
                                <span>Base URL</span>
                                <input
                                    type="url"
                                    data-setting="ai.baseUrl"
                                    class="view-settings__input"
                                    placeholder="Enter your base URL"
                                    value="${this.settings.value.ai?.baseUrl || ""}"
                                />
                            </label>
                            <label class="view-settings__label">
                                <span>API Key</span>
                                <input
                                    type="password"
                                    data-setting="ai.apiKey"
                                    class="view-settings__input"
                                    placeholder="Enter your API key"
                                    value="${this.settings.value.ai?.apiKey || ""}"
                                />
                            </label>
                            <label class="view-settings__label">
                                <span>Model</span>
                                <input
                                    type="text"
                                    data-setting="ai.model"
                                    class="view-settings__input"
                                    placeholder="e.g., gpt-4o-mini"
                                    value="${this.settings.value.ai.model || ""}"
                                />
                            </label>
                            <label class="view-settings__checkbox">
                                <input
                                    type="checkbox"
                                    data-setting="ai.autoProcess"
                                    ${this.settings.value.ai.autoProcess ? "checked" : ""}
                                />
                                <span>Auto-process shared content</span>
                            </label>
                        </form></div>
                    </section>

                    <section class="view-settings__section">
                        <h2>General</h2>
                        <div class="view-settings__group"><form style="display: contents;" onsubmit="return false;">
                            <label class="view-settings__checkbox">
                                <input
                                    type="checkbox"
                                    data-setting="general.autosave"
                                    ${this.settings.value.general.autosave ? "checked" : ""}
                                />
                                <span>Auto-save content</span>
                            </label>
                            <label class="view-settings__checkbox">
                                <input
                                    type="checkbox"
                                    data-setting="general.notifications"
                                    ${this.settings.value.general.notifications ? "checked" : ""}
                                />
                                <span>Enable notifications</span>
                            </label>
                        </form></div>
                    </section>

                    <div class="view-settings__actions">
                        <button class="view-settings__btn view-settings__btn--primary" data-action="save" type="button">
                            Save Settings
                        </button>
                        <button class="view-settings__btn" data-action="reset" type="button">
                            Reset to Defaults
                        </button>
                    </div>
                </div>
            </div>
        ` as HTMLElement;*/

        const isExtensionRuntime =
            typeof (globalThis as unknown as { chrome?: { runtime?: { id?: string } } }).chrome !== "undefined" &&
            Boolean((globalThis as unknown as { chrome?: { runtime?: { id?: string } } }).chrome?.runtime?.id);

        this.element = createSettingsView({
            isExtension: isExtensionRuntime,
            initialTab: options?.params?.tab || options?.params?.focus,
            onTheme: (theme) => {
                this.options.onThemeChange?.(theme as "auto" | "light" | "dark");
            }
        });

        queueMicrotask(() => attachSettingsInlineStylesWhenConnected(this.element));

        return this.element;
    }

    getToolbar(): HTMLElement | null {
        return null;
    }

    // ========================================================================
    // PRIVATE METHODS
    // ========================================================================

    private setupEventHandlers(): void {
        // Legacy handlers are intentionally disabled.
        // createSettingsView() owns field bindings and persistence using unified config storage.
    }

    private loadSettings(): void {
        this.settings.value = { ...defaultSettings };
    }

    private saveSettings(): void {
        this.options.onSettingsChange?.(this.settings.value);
    }

    private resetSettings(): void {
        this.settings.value = { ...defaultSettings };
        this.updateUI();
    }

    private updateUI(): void {
        if (!this.element) return;

        // Update all inputs to reflect current settings
        const inputs = this.element.querySelectorAll("[data-setting]");
        for (const input of inputs) {
            const path = (input as HTMLElement).dataset.setting!;
            const [section, key] = path.split(".") as [keyof AppSettings, string];
            const value = (this.settings.value[section] as any)[key];

            if ((input as HTMLInputElement).type === "checkbox") {
                (input as HTMLInputElement).checked = Boolean(value);
            } else {
                (input as HTMLInputElement | HTMLSelectElement).value = value || "";
            }
        }
    }

    private showMessage(message: string): void {
        this.shellContext?.showMessage(message);
    }

    private applySettingsStylesheet(): void {
        attachSettingsInlineStylesWhenConnected(this.element);
    }

    private clearSettingsStylesheet(): void {
        try {
            const el = this.element;
            el?.querySelector("style[data-settings-view-css]")?.remove();
            if (this._styleEl) {
                this._styleEl.remove();
                this._styleEl = null;
            }
            if (this._shadowSheet) {
                const { sheet, root } = this._shadowSheet;
                root.adoptedStyleSheets = root.adoptedStyleSheets.filter((s) => s !== sheet);
                this._shadowSheet = null;
            }
            if (this._sheet) {
                removeAdopted(this._sheet);
                this._sheet = null;
            }
        } catch {
            /* ignore */
        }
    }

    canHandleMessage(messageType: string): boolean {
        return messageType === "settings-update";
    }

    async handleMessage(message: unknown): Promise<void> {
        const msg = message as { data?: Partial<AppSettings> };
        if (msg.data) {
            this.settings.value = { ...this.settings.value, ...msg.data };
            this.updateUI();
        }
    }

    invokeChannelApi(action: string, payload?: unknown): unknown {
        if (action === SettingsChannelAction.Patch || action === SettingsChannelAction.SettingsUpdate) {
            void this.handleMessage({ data: payload as Partial<AppSettings> });
            void (async () => {
                try {
                    const [{ loadSettings }, { applyTheme }] = await Promise.all([
                        import("com/config/Settings"),
                        import("core/utils/Theme")
                    ]);
                    const cur = await loadSettings();
                    const patch = payload as Partial<AppSettings>;
                    applyTheme({
                        ...cur,
                        ...patch,
                        appearance: { ...(cur.appearance || {}), ...(patch.appearance || {}) }
                    } as AppSettings);
                } catch (e) {
                    console.warn("[SettingsView] channel applyTheme failed:", e);
                }
            })();
            return true;
        }
        return undefined;
    }
}

// ============================================================================
// FACTORY
// ============================================================================

export function createView(options?: SettingsOptions): SettingsView {
    return new SettingsView(options);
}

export default createView;
