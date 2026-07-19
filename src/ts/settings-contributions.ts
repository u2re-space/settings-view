/*
 * Filename: settings-contributions.ts
 * FullPath: modules/views/settings-view/src/ts/settings-contributions.ts
 * Change date and time: 14.25.00_19.07.2026
 * Reason for changes: Neutralino/WebNative — retry settings:get so fields prefer backend SoT.
 */
/**
 * Settings-view glue: mount shared contribution registry tabs into the host UI.
 */
import type { AppSettings } from "com/config/SettingsTypes";
import { normalizeEcosystemToken } from "com/config/SettingsTypes";
import { isEnabledView } from "core/routing/core/views";
import {
    getSettingsContributions,
    bindContributionFields,
    collectContributionFields,
    type SettingsContribution,
    type SettingsContributionContext
} from "com/config/SettingsContributions";
import { registerBuiltinSettingsContributions } from "com/config/settings/register-builtin-contributions";
import { resolveCwspUrlFields } from "cwsp-shared/cwsp-endpoint-resolve";
import {
    getSettingsSync,
    patchSettingsSync,
    type SettingsBlob
} from "./settings-sync-adapter";

export { registerBuiltinSettingsContributions };
export {
    registerAirpadSettingsContribution,
    registerCwspSettingsContribution,
    registerDeviceSettingsContribution,
    registerReaderSettingsContribution,
    registerWorkcenterSettingsContribution
} from "com/config/settings/register-builtin-contributions";
export {
    resolveSettingsShellProfile,
    pruneBuiltInSettingsTabs,
    defaultSettingsTabForProfile,
    hasBuiltInSettingsPanel,
    type SettingsShellProfile
} from "com/config/settings/settings-shell-profile";

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

const contributionVisible = (
    contribution: SettingsContribution,
    ctx: SettingsContributionContext
): boolean => {
    if (contribution.requiresView && !isEnabledView(contribution.requiresView)) return false;
    const surfaces = contribution.surfaces;
    if (surfaces?.length && !surfaces.includes(ctx.surface)) return false;
    if (contribution.excludeSurfaces?.includes(ctx.surface)) return false;
    return true;
};

const visibleContributions = (ctx: SettingsContributionContext): SettingsContribution[] =>
    getSettingsContributions().filter((c) => contributionVisible(c, ctx));

export const mountContributions = (root: HTMLElement, ctx: SettingsContributionContext): void => {
    const tabList = root.querySelector(TAB_LIST_SELECTOR);
    const body = root.querySelector(BODY_SELECTOR);
    if (!tabList || !body) return;

    for (const contribution of visibleContributions(ctx)) {
        if (root.querySelector(`[data-tab-panel="${contribution.id}"]`)) continue;

        const tab = document.createElement("button");
        tab.className = "settings-tab-btn";
        tab.type = "button";
        tab.role = "tab";
        tab.setAttribute("data-action", "switch-settings-tab");
        tab.setAttribute("data-tab", contribution.id);
        tab.setAttribute("data-contributed-tab", "");
        tab.setAttribute("aria-selected", "false");
        tab.textContent = contribution.label;

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
            panel = content;
            panel.classList.add("card", "settings-tab-panel");
            panel.setAttribute("data-tab-panel", contribution.id);
            panel.setAttribute("data-contributed-panel", "");
            panel.hidden = true;
        } else {
            panel = document.createElement("section");
            panel.className = "card settings-tab-panel";
            panel.setAttribute("data-tab-panel", contribution.id);
            panel.setAttribute("data-contributed-panel", "");
            panel.hidden = true;
            panel.appendChild(content);
        }
        body.appendChild(panel);
    }
};

const forEachContributionPanel = (
    root: HTMLElement,
    ctx: SettingsContributionContext,
    cb: (contribution: SettingsContribution, panel: HTMLElement) => void
): void => {
    for (const contribution of visibleContributions(ctx)) {
        const panel = root.querySelector<HTMLElement>(`[data-tab-panel="${contribution.id}"]`);
        if (panel) cb(contribution, panel);
    }
};

export const applyContributions = (
    root: HTMLElement,
    settings: AppSettings,
    ctx: SettingsContributionContext
): void => {
    forEachContributionPanel(root, ctx, (contribution, panel) => {
        try {
            if (!contribution.manualFields) bindContributionFields(panel, settings);
            contribution.load?.(settings, panel, ctx);
        } catch (error) {
            console.warn(`[settings] contribution '${contribution.id}' load failed:`, error);
        }
    });
};

export const collectContributions = (
    root: HTMLElement,
    settings: AppSettings,
    ctx: SettingsContributionContext
): void => {
    forEachContributionPanel(root, ctx, (contribution, panel) => {
        try {
            if (!contribution.manualFields) collectContributionFields(panel, settings);
            contribution.save?.(settings, panel, ctx);
        } catch (error) {
            console.warn(`[settings] contribution '${contribution.id}' save failed:`, error);
        }
    });
};

const isPlainObject = (value: unknown): value is Record<string, unknown> =>
    Boolean(value) && typeof value === "object" && !Array.isArray(value);

/**
 * Deep-merge backend settings:get into local AppSettings for form prefill.
 * INVARIANT: skip `[redacted]` placeholders so a redacted GET cannot wipe IDB values.
 * Backend non-empty values win (gateway/webnative SoT after login).
 */
export const mergeSettingsFromSync = (base: AppSettings, remote: SettingsBlob): AppSettings => {
    if (!isPlainObject(remote) || !Object.keys(remote).length) return base;

    const mergeValue = (local: unknown, incoming: unknown): unknown => {
        if (incoming === undefined || incoming === null) return local;
        if (typeof incoming === "string" && incoming === "[redacted]") return local;
        if (Array.isArray(incoming)) return incoming.slice();
        if (isPlainObject(incoming) && isPlainObject(local)) {
            const out: Record<string, unknown> = { ...local };
            for (const [key, value] of Object.entries(incoming)) {
                out[key] = mergeValue(local[key], value);
            }
            return out;
        }
        if (isPlainObject(incoming)) return { ...incoming };
        if (typeof incoming === "string" && !incoming.trim() && typeof local === "string" && local.trim()) {
            return local;
        }
        return incoming;
    };

    return mergeValue(base, remote) as AppSettings;
};

const isDesktopSettingsSurface = (): boolean => {
    try {
        const g = globalThis as {
            __CWS_WEBNATIVE_BOOT__?: boolean;
            __CWS_NEUTRALINO_BOOT__?: boolean;
            __WEBNATIVE_AUTH__?: { port?: number };
            __NEUTRALINO_AUTH__?: { port?: number };
        };
        return Boolean(
            g.__CWS_WEBNATIVE_BOOT__ ||
                g.__CWS_NEUTRALINO_BOOT__ ||
                typeof g.__WEBNATIVE_AUTH__?.port === "number" ||
                typeof g.__NEUTRALINO_AUTH__?.port === "number"
        );
    } catch {
        return false;
    }
};

const remoteSettingsLooksUseful = (remote: SettingsBlob): boolean => {
    if (!remote || typeof remote !== "object") return false;
    const core = remote.core as Record<string, unknown> | undefined;
    const shell = remote.shell as Record<string, unknown> | undefined;
    const bridge = remote.bridge as Record<string, unknown> | undefined;
    // WHY: ignore `{ neutralino: … }` shell-meta-only responses — those are not CWSP SoT.
    return Boolean(
        (typeof core?.endpointUrl === "string" && core.endpointUrl.trim()) ||
            (typeof core?.userId === "string" && core.userId.trim()) ||
            (typeof core?.ecosystemToken === "string" && core.ecosystemToken.trim()) ||
            (typeof core?.userKey === "string" && core.userKey.trim()) ||
            (typeof shell?.clipboardInboundMode === "string" && shell.clipboardInboundMode) ||
            (typeof shell?.clipboardOutboundMode === "string" && shell.clipboardOutboundMode) ||
            (typeof shell?.remoteHost === "string" && shell.remoteHost.trim()) ||
            (typeof bridge?.endpointUrl === "string" && bridge.endpointUrl.trim()) ||
            (typeof bridge?.userId === "string" && String(bridge.userId).trim())
    );
};

/** Load local settings then overlay the registered sync arm (gateway / webnative / …). */
export const loadSettingsHydratedFromSync = async (
    loadLocal: () => Promise<AppSettings>
): Promise<AppSettings> => {
    const local = await loadLocal();
    // WHY: preferBackendSync=false keeps Settings on IDB/local only (operator override).
    if ((local.core?.preferBackendSync ?? true) === false) {
        return local;
    }

    let remote = await getSettingsSync();
    // WHY: Neutralino control host often warms after first Settings paint — retry so
    // fields bind to portable.config (backend) instead of stale localStorage/IDB.
    if (isDesktopSettingsSurface() && !remoteSettingsLooksUseful(remote)) {
        for (let i = 0; i < 6; i++) {
            await new Promise((r) => setTimeout(r, 250));
            remote = await getSettingsSync();
            if (remoteSettingsLooksUseful(remote)) break;
        }
    }

    return mergeSettingsFromSync(local, remote);
};

/**
 * settings:get → applyContributions — hydrate contributed panels from the registered sync arm.
 *
 * NOTE: returns the merged blob used for binding so callers can keep a local settings copy
 * without a second get. When no arm is registered, `base` is applied unchanged.
 */
export const hydrateContributionsFromSync = async (
    root: HTMLElement,
    ctx: SettingsContributionContext,
    base: AppSettings = {} as AppSettings
): Promise<AppSettings> => {
    const remote = await getSettingsSync();
    const settings = mergeSettingsFromSync(base, remote);
    applyContributions(root, settings, ctx);
    return settings;
};

/**
 * collectContributions → settings:patch — persist contributed field values through the sync arm.
 *
 * INVARIANT: callers pass the full settings object they intend to keep; the arm owns merge
 * semantics (see `createMemorySettingsSyncArm` / platform backends).
 */
export const persistContributionsViaSync = async (
    root: HTMLElement,
    settings: AppSettings,
    ctx: SettingsContributionContext
): Promise<SettingsBlob> => {
    collectContributions(root, settings, ctx);
    return patchSettingsSync(settings as SettingsBlob);
};

export const contributedTabIds = (ctx: SettingsContributionContext): string[] =>
    visibleContributions(ctx).map((c) => c.id);

const isCapacitorNativeShell = (): boolean => {
    try {
        const c = (globalThis as { Capacitor?: { isNativePlatform?: () => boolean } }).Capacitor;
        return typeof c?.isNativePlatform === "function" && Boolean(c.isNativePlatform());
    } catch {
        return false;
    }
};

/** Resolve bare host/IP fields in `core.endpointUrl` / `core.ops.directUrl` before persist. */
export const resolveCwspSettingsBeforeSave = async (settings: AppSettings): Promise<void> => {
    normalizeEcosystemToken(settings);
    const core = settings.core;
    if (!core || typeof core !== "object") return;
    // Prefer short Client-ID (L-196); collapse full L-192.168.0.196 if pasted.
    const { sanitizeFleetSelfWireNodeId } = await import("cwsp-shared/airpad-cwsp-client-parity");
    const canonicalUserId = sanitizeFleetSelfWireNodeId(core.userId);
    if (canonicalUserId) core.userId = canonicalUserId;
    const relay = typeof core.endpointUrl === "string" ? core.endpointUrl : "";
    const direct = typeof core.ops?.directUrl === "string" ? core.ops.directUrl : "";
    if (!relay.trim() && !direct.trim()) return;
    // WHY: On CWSAndroid, multi-port /lna-probe during Save blocks the UI for tens of seconds.
    const resolveOpts = isCapacitorNativeShell()
        ? { discover: false as const, timeoutMs: 1500 }
        : { timeoutMs: 3000 };
    const resolved = await resolveCwspUrlFields({
        relayHttpsUrl: relay,
        directHttpsUrl: direct
    }, resolveOpts);
    if (resolved.relayHttpsUrl !== undefined) core.endpointUrl = resolved.relayHttpsUrl;
    if (resolved.directHttpsUrl !== undefined) {
        core.ops = { ...(core.ops || {}), directUrl: resolved.directHttpsUrl };
    }
};
