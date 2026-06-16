/**
 * Settings-view glue for the shared contribution registry.
 *
 * Renders registered contributions from the shared settings registry as
 * extra tabs + panels inside the settings UI and bridges their load/save to
 * `AppSettings`. Built-in, view-owned panels (reader / workcenter / airpad …)
 * declare `requiresView` so a build that omits the view (e.g. the CWSAndroid
 * AirPad+Settings shell) shows no orphan tabs.
 *
 * Panels use the canonical settings-view markup (`card settings-tab-panel`,
 * `field` / `field-hint` / `form-input` / `form-select`) so they match the
 * built-in sections exactly (no bespoke unstyled classes).
 */
import { H } from "fest/lure";
import type { AppSettings } from "com/config/SettingsTypes";
import { isEnabledView } from "core/routing/core/views";
import {
    getSettingsContributions,
    registerSettingsContribution,
    bindContributionFields,
    collectContributionFields,
    type SettingsContribution,
    type SettingsContributionContext
} from "../../../shared/src/other/config/SettingsContributions";
import { resolveCwspUrlFields } from "cwsp-shared/cwsp-endpoint-resolve";

const TAB_LIST_SELECTOR = "[data-settings-tabs]";
const BODY_SELECTOR = ".settings-screen__body";

export const resolveSettingsSurface = (): SettingsContributionContext["surface"] => {
    try {
        const g = globalThis as any;
        if (g?.chrome?.runtime?.id) return "crx";
        if (g?.Capacitor?.isNativePlatform?.()) return "capacitor";
        if (g?.__CWS_NATIVE__ === true) return "native";
        if (typeof document !== "undefined") return "web";
    } catch {
        /* ignore */
    }
    return "unknown";
};

/** Contributions whose `requiresView` (if any) is currently enabled. */
const visibleContributions = (): SettingsContribution[] =>
    getSettingsContributions().filter((c) => !c.requiresView || isEnabledView(c.requiresView));

/**
 * Append a tab button + panel for every visible contribution. Must run before
 * the host wires its tab click handlers so contributed tabs get them too.
 */
export const mountContributions = (root: HTMLElement, ctx: SettingsContributionContext): void => {
    const tabList = root.querySelector(TAB_LIST_SELECTOR);
    const body = root.querySelector(BODY_SELECTOR);
    if (!tabList || !body) return;

    for (const contribution of visibleContributions()) {
        if (root.querySelector(`[data-tab-panel="${contribution.id}"]`)) continue;

        const tab = H`<button class="settings-tab-btn" type="button" role="tab"
            data-action="switch-settings-tab" data-tab="${contribution.id}"
            data-contributed-tab aria-selected="false">${contribution.label}</button>` as HTMLButtonElement;
        const extTab = tabList.querySelector("[data-extension-tab]");
        if (extTab) tabList.insertBefore(tab, extTab);
        else tabList.appendChild(tab);

        let content: HTMLElement | null = null;
        try {
            content = contribution.render(ctx);
        } catch (error) {
            console.warn(`[settings] contribution '${contribution.id}' render failed:`, error);
        }
        if (!content) continue;

        let panel: HTMLElement;
        if (content.matches?.("[data-tab-panel]")) {
            // Contribution returned a full canonical section: use it as the panel.
            panel = content;
            panel.classList.add("card", "settings-tab-panel");
            panel.setAttribute("data-tab-panel", contribution.id);
            panel.setAttribute("data-contributed-panel", "");
            panel.hidden = true;
        } else {
            panel = H`<section class="card settings-tab-panel" data-tab-panel="${contribution.id}" data-contributed-panel hidden></section>` as HTMLElement;
            panel.appendChild(content);
        }
        body.appendChild(panel);
    }
};

const forEachContributionPanel = (
    root: HTMLElement,
    cb: (contribution: SettingsContribution, panel: HTMLElement) => void
): void => {
    for (const contribution of visibleContributions()) {
        const panel = root.querySelector<HTMLElement>(`[data-tab-panel="${contribution.id}"]`);
        if (panel) cb(contribution, panel);
    }
};

/** After `loadSettings`, hydrate contributed panels from `AppSettings`. */
export const applyContributions = (root: HTMLElement, settings: AppSettings, ctx: SettingsContributionContext): void => {
    forEachContributionPanel(root, (contribution, panel) => {
        try {
            if (!contribution.manualFields) bindContributionFields(panel, settings);
            contribution.load?.(settings, panel, ctx);
        } catch (error) {
            console.warn(`[settings] contribution '${contribution.id}' load failed:`, error);
        }
    });
};

/** Before `saveSettings`, fold contributed panel values into the settings object. */
export const collectContributions = (root: HTMLElement, settings: AppSettings, ctx: SettingsContributionContext): void => {
    forEachContributionPanel(root, (contribution, panel) => {
        try {
            if (!contribution.manualFields) collectContributionFields(panel, settings);
            contribution.save?.(settings, panel, ctx);
        } catch (error) {
            console.warn(`[settings] contribution '${contribution.id}' save failed:`, error);
        }
    });
};

/** Ids of visible contributed tabs (so the host can accept them as initial tab). */
export const contributedTabIds = (): string[] => visibleContributions().map((c) => c.id);

/** Resolve bare host/IP fields in `cwsp.*` before persisting settings. */
export const resolveCwspSettingsBeforeSave = async (settings: AppSettings): Promise<void> => {
    const cwsp = (settings as { cwsp?: Record<string, unknown> }).cwsp;
    if (!cwsp || typeof cwsp !== "object") return;
    const relay = typeof cwsp.relayHttpsUrl === "string" ? cwsp.relayHttpsUrl : "";
    const direct = typeof cwsp.directHttpsUrl === "string" ? cwsp.directHttpsUrl : "";
    if (!relay.trim() && !direct.trim()) return;
    const resolved = await resolveCwspUrlFields({
        relayHttpsUrl: relay,
        directHttpsUrl: direct
    });
    if (resolved.relayHttpsUrl !== undefined) cwsp.relayHttpsUrl = resolved.relayHttpsUrl;
    if (resolved.directHttpsUrl !== undefined) cwsp.directHttpsUrl = resolved.directHttpsUrl;
};

// ---------------------------------------------------------------------------
// Canonical field builders (match settings-view SCSS: .field/.field-hint/.form-*)
// ---------------------------------------------------------------------------

const text = (label: string, path: string, placeholder = "", type = "text"): HTMLElement =>
    H`<label class="field"><span>${label}</span><input class="form-input" type="${type}" autocomplete="off" data-field="${path}" placeholder="${placeholder}" /></label>` as HTMLElement;

const num = (label: string, path: string, attrs: { min?: string; max?: string; step?: string; placeholder?: string } = {}): HTMLElement =>
    H`<label class="field"><span>${label}</span><input class="form-input" type="number" data-field="${path}" min="${attrs.min ?? ""}" max="${attrs.max ?? ""}" step="${attrs.step ?? ""}" placeholder="${attrs.placeholder ?? ""}" /></label>` as HTMLElement;

const check = (label: string, path: string): HTMLElement =>
    H`<label class="field checkbox form-checkbox"><input type="checkbox" data-field="${path}" /><span>${label}</span></label>` as HTMLElement;

const select = (label: string, path: string, options: Array<[string, string]>): HTMLElement => {
    const sel = document.createElement("select");
    sel.className = "form-select";
    sel.setAttribute("data-field", path);
    for (const [value, text2] of options) {
        const opt = document.createElement("option");
        opt.value = value;
        opt.textContent = text2;
        sel.appendChild(opt);
    }
    return H`<label class="field"><span>${label}</span>${sel}</label>` as HTMLElement;
};

const hint = (textValue: string): HTMLElement => H`<p class="field-hint">${textValue}</p>` as HTMLElement;
const heading = (textValue: string): HTMLElement => H`<h4>${textValue}</h4>` as HTMLElement;

const panel = (id: string, title: string, children: Array<HTMLElement | string>): HTMLElement => {
    const section = H`<section class="card settings-tab-panel" data-tab-panel="${id}" hidden><h3>${title}</h3></section>` as HTMLElement;
    for (const child of children) {
        if (typeof child === "string") section.appendChild(heading(child));
        else section.appendChild(child);
    }
    return section;
};

// ---------------------------------------------------------------------------
// Built-in, view-owned / surface contributions.
// ---------------------------------------------------------------------------

let builtinsRegistered = false;

export const registerBuiltinSettingsContributions = (): void => {
    if (builtinsRegistered) return;
    builtinsRegistered = true;

    // CWSP connection + clipboard direction + transport (always relevant: it is
    // the wire config, not tied to any specific view).
    registerSettingsContribution({
        id: "cwsp",
        label: "CWSP",
        order: 55,
        render: () => panel("cwsp", "CWSP", [
            hint("Connect to the CWSP endpoint; outbound clipboard/AirPad fan-out and inbound clipboard policy below."),
            "Connection",
            text("Relay host (IP or domain)", "cwsp.relayHttpsUrl", "192.168.0.200"),
            hint("Coordinator / gateway. Port is auto-discovered (8443, 443, 8080, …) when omitted."),
            text("Direct host (IP or domain)", "cwsp.directHttpsUrl", "192.168.0.110"),
            hint("Direct AirPad target. Omit https:// — protocol and port are resolved automatically."),
            text("Client id", "cwsp.clientId", "L-192.168.0.196"),
            text("Identification token", "cwsp.token", "token", "password"),
            text("Destination node ids", "cwsp.destinationNodeIds", "* or L-…;L-…"),
            "Clipboard direction",
            text("Write clipboard only from", "cwsp.clipboardWriteSourceId", "L-192.168.0.110"),
            hint("Accept inbound clipboard writes only from this origin (incl. via relay). Use * for any."),
            check("Accept inbound clipboard", "cwsp.acceptInboundClipboard"),
            check("Share / context-menu broadcasts", "cwsp.shareBroadcast"),
            check("Reverse (listener) mode", "cwsp.reverseServerMode"),
            "Transport",
            select("Wire transport", "cwsp.wireTransport", [["ws", "Native WebSocket (/ws)"]]),
            select("Connection role", "cwsp.connectionRole", [["initiator", "Initiator (connect-to)"], ["listener", "Listener (connected-from)"], ["exchanger", "Exchanger (both)"]])
        ])
    });

    registerSettingsContribution({
        id: "reader",
        label: "Reader",
        order: 60,
        requiresView: "viewer",
        render: () => panel("reader", "Reader", [
            num("Default zoom (%)", "views.reader.zoomPercent", { min: "50", max: "300", step: "10", placeholder: "100" }),
            check("Wrap long lines", "views.reader.wrapLongLines")
        ])
    });

    registerSettingsContribution({
        id: "workcenter",
        label: "Work Center",
        order: 65,
        requiresView: "workcenter",
        render: () => panel("workcenter", "Work Center", [
            check("Auto-run pinned tasks", "views.workcenter.autoRunPinned"),
            text("Default instruction id", "views.workcenter.defaultInstructionId", "(none)")
        ])
    });

    registerSettingsContribution({
        id: "airpad",
        label: "AirPad",
        order: 70,
        requiresView: "airpad",
        render: () => panel("airpad", "AirPad", [
            num("Pointer sensitivity", "views.airpad.pointerSensitivity", { min: "0.2", max: "5", step: "0.1", placeholder: "1.0" }),
            check("Invert scroll", "views.airpad.invertScroll"),
            check("Send haptics", "views.airpad.haptics")
        ])
    });

    const surface = resolveSettingsSurface();

    // NativeScript bridge: native-only connector toggles (Capacitor is primary UI).
    if (surface === "capacitor" || surface === "native") {
        registerSettingsContribution({
            id: "nativescript",
            label: "NativeScript",
            order: 58,
            render: () => panel("nativescript", "NativeScript", [
                hint("NativeScript runs as a native connector; the Capacitor WebView is the primary UI."),
                check("Use native clipboard service", "cwsp.ns.nativeClipboard"),
                check("Foreground daemon", "cwsp.ns.bridgeDaemonEnabled"),
                check("Clipboard monitor (overlay)", "cwsp.ns.clipboardMonitor"),
                check("Native AirPad input (touch/tilt)", "cwsp.ns.nativeAirpad"),
                select("NS transport", "cwsp.ns.transport", [["ws", "Native WebSocket (/ws)"]]),
                select("NS role", "cwsp.ns.role", [["initiator", "Initiator"], ["listener", "Listener"], ["exchanger", "Exchanger"]]),
                check("Accept contacts data (future)", "cwsp.ns.acceptContactsData"),
                check("Accept SMS data (future)", "cwsp.ns.acceptSmsData")
            ])
        });
    }

    // Device/extension preferences on native/Capacitor/CRX shells.
    if (surface === "capacitor" || surface === "native" || surface === "crx") {
        const deviceLabel = surface === "crx" ? "Extension" : "Device";
        registerSettingsContribution({
            id: "device",
            label: deviceLabel,
            order: 80,
            render: () => panel("device", `${deviceLabel} preferences`, [
                check("Start CWSP wire on launch", "views.device.autoConnect"),
                check("Keep background daemon", "views.device.keepDaemon"),
                hint("On Android, grant overlay / notifications when prompted at first launch.")
            ])
        });
    }
};
