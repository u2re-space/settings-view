/*
 * Filename: settings-contributions.ts
 * FullPath: modules/views/settings-view/src/ts/settings-contributions.ts
 * FIND:settings-profile
 * Change date and time: 14.30.00_27.08.2026
 * Reason for changes: Document/explorer/process APKs mount Updates; VDS/PWA never show APK install.
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
import { readCwspSku } from "com/config/ecosystem-skus";
export { readCwspSku };
import {
    resolveSettingsShellProfile,
    resolveEffectiveHubSettingsSection,
    skuForHubSettingsSection,
    readSettingsAreaSection,
    type HubSettingsSection
} from "com/config/settings/settings-shell-profile";
import { resolveSettingsAreaNavMode } from "./settings-sibling-presence";
import { resolveCwspUrlFields } from "cwsp-shared/cwsp-endpoint-resolve";
import {
    getSettingsSync,
    patchSettingsSync,
    type SettingsBlob
} from "./settings-sync-adapter";

export { registerBuiltinSettingsContributions };
export {
    registerApkUpdateSettingsContribution,
    registerCwspSettingsContribution,
    registerDeviceSettingsContribution,
    registerReaderSettingsContribution,
    registerWorkcenterSettingsContribution,
    registerWorkspaceSettingsContribution
} from "com/config/settings/register-builtin-contributions";
export {
    resolveSettingsShellProfile,
    pruneBuiltInSettingsTabs,
    defaultSettingsTabForProfile,
    hasBuiltInSettingsPanel,
    resolveEffectiveHubSettingsSection,
    canonicalHubSettingsSection,
    hubSettingsSectionPath,
    skuForHubSettingsSection,
    visibleHubSettingsSections,
    rememberSettingsAreaSection,
    readSettingsAreaSection,
    type SettingsShellProfile,
    type HubSettingsSection,
    type SettingsAreaNavMode
} from "com/config/settings/settings-shell-profile";
export {
    resolveSettingsAreaNavMode,
    peekInstalledSiblingSettingsSections,
    refreshInstalledSiblingSettingsSections,
    sameSiblingSectionSet
} from "./settings-sibling-presence";

const TAB_LIST_SELECTOR = "[data-settings-tabs]";
const BODY_SELECTOR = ".settings-screen__body";

const isNativeApkHost = (): boolean => {
    try {
        const g = globalThis as {
            Capacitor?: { isNativePlatform?: () => boolean; getPlatform?: () => string };
            __CWS_NATIVE__?: boolean;
        };
        const platform = g.Capacitor?.getPlatform?.();
        return Boolean(
            g.Capacitor?.isNativePlatform?.() ||
                platform === "android" ||
                platform === "ios" ||
                g.__CWS_NATIVE__ === true
        );
    } catch {
        return false;
    }
};

export const resolveSettingsSurface = (): SettingsContributionContext["surface"] => {
    try {
        const sku = readCwspSku();
        // WHY: document PWA stays markdown (no APK tab). Document APK needs capacitor so Updates mounts.
        if (sku === "document") return isNativeApkHost() ? "capacitor" : "markdown";
        if (sku === "process" || sku === "explorer") return isNativeApkHost() ? "capacitor" : "web";
        // WHY: environment profile still runs on a Capacitor APK — Updates needs that surface.
        if (sku === "launcher") return isNativeApkHost() ? "capacitor" : "environment";
        if (sku === "crx") return "crx";
        const g = globalThis as any;
        if (g?.chrome?.runtime?.id) return "crx";
        // WHY: isNativePlatform can be late; also accept getPlatform for Capacitor WebView.
        if (
            g?.Capacitor?.isNativePlatform?.() ||
            g?.Capacitor?.getPlatform?.() === "android" ||
            g?.Capacitor?.getPlatform?.() === "ios"
        ) {
            return "capacitor";
        }
        if (g?.__CWS_NATIVE__ === true) return "native";
        // INVARIANT: document / markdown PWAs are not CWSP Control (no CWSP / Extension tabs).
        if (typeof document !== "undefined") {
            const surface = String(
                document.documentElement?.dataset?.cwspSurface || ""
            ).toLowerCase();
            if (surface === "cw-markdown" || surface === "cw-document" || surface === "document") {
                return "markdown";
            }
            if (
                surface === "environment" ||
                surface === "cw-environment" ||
                surface === "cwsp-shell"
            ) {
                return "environment";
            }
            // WHY: environment-shell host marks itself when dataset surface is unset.
            if (
                document.querySelector?.(
                    ".env-shell-root[data-shell='environment'], env-shell-container[data-shell='environment']"
                )
            ) {
                return "environment";
            }
        }
        // Neutralino/WebNative still report contribution surface as "web" (no webnative enum).
        if (typeof document !== "undefined") return "web";
    } catch {
        /* ignore */
    }
    return "unknown";
};

/** Hub `/settings/{area}` or launcher sibling section overrides SKU so contribs match that PWA. */
export const resolveSettingsContributionContext = (
    isExtension?: boolean,
    hubSectionOverride?: HubSettingsSection | null
): SettingsContributionContext => {
    const fromHub = resolveEffectiveHubSettingsSection();
    const navMode = resolveSettingsAreaNavMode();
    const fromAreaNav =
        navMode === "hub" || navMode === "launcher"
            ? (hubSectionOverride || readSettingsAreaSection() || "hub")
            : null;
    const hubSection = fromHub || fromAreaNav || hubSectionOverride || undefined;
    const sku = hubSection ? skuForHubSettingsSection(hubSection) : readCwspSku();
    let surface = resolveSettingsSurface();
    if (hubSection === "document") surface = isNativeApkHost() ? "capacitor" : "markdown";
    else if (hubSection === "transfer") surface = isNativeApkHost() ? "capacitor" : "web";
    else if (hubSection === "process" || hubSection === "explorer") {
        surface = isNativeApkHost() ? "capacitor" : "web";
    } else if (hubSection === "hub") surface = isNativeApkHost() ? "capacitor" : "environment";
    return {
        isExtension: Boolean(isExtension),
        surface,
        sku,
        hubSection
    };
};

const contributionVisible = (
    contribution: SettingsContribution,
    ctx: SettingsContributionContext
): boolean => {
    if (contribution.requiresView && !isEnabledView(contribution.requiresView)) return false;
    const surfaces = contribution.surfaces;
    if (surfaces?.length && !surfaces.includes(ctx.surface)) return false;
    if (contribution.excludeSurfaces?.includes(ctx.surface)) return false;
    // INVARIANT: Updates is APK-only — VDS / PWA / CRX must not show install.
    if (contribution.id === "apk-update" && !isNativeApkHost()) {
        return false;
    }
    // INVARIANT: CWSP Control tab belongs to transfer (and CRX/desktop hosts), not sibling APKs.
    if (contribution.id === "cwsp") {
        const sku = ctx.sku || readCwspSku();
        if (sku === "launcher" || sku === "explorer" || sku === "document" || sku === "process") return false;
    }
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

        /*
         * WHY: Appearance + Workspaces are one settings page — sections only.
         * The workspace contribution still owns grid + pages; its tab is not shown.
         * INVARIANT: apk-update is always its own Updates tab (launcher and sibling APKs).
         */
        if (contribution.id === "workspace") {
            const appearance = root.querySelector<HTMLElement>('[data-tab-panel="appearance"]');
            if (appearance) {
                let content: HTMLElement | null = null;
                try {
                    content = contribution.render(ctx);
                } catch (error) {
                    console.warn(`[settings] contribution '${contribution.id}' render failed:`, error);
                }
                if (content) {
                    const wrap = document.createElement("div");
                    wrap.setAttribute("data-contribution", "workspace");
                    wrap.hidden = false;
                    /*
                     * INVARIANT: nested Workspace is a section, not a tab.
                     * `[data-tab-panel]` + `.settings-tab-panel:not(.is-active)` hide
                     * any leftover panel when Appearance is the active tab.
                     */
                    if (content.matches?.("[data-tab-panel]")) {
                        content.removeAttribute("hidden");
                        content.removeAttribute("data-tab-panel");
                        content.classList.remove("settings-tab-panel");
                        wrap.append(...Array.from(content.childNodes));
                    } else {
                        content.removeAttribute("data-tab-panel");
                        content.classList.remove("settings-tab-panel");
                        wrap.appendChild(content);
                    }
                    appearance.appendChild(wrap);
                }
                continue;
            }
        }

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
        const panel =
            root.querySelector<HTMLElement>(`[data-tab-panel="${contribution.id}"]`) ||
            root.querySelector<HTMLElement>(`[data-contribution="${contribution.id}"]`);
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
            chrome?: { runtime?: { id?: string } };
        };
        // WHY: CRX options also hydrate from Neutralino /service/config when control is live.
        const crxWithBridge =
            typeof g.chrome?.runtime?.id === "string" &&
            typeof g.__NEUTRALINO_AUTH__?.port === "number";
        return Boolean(
            g.__CWS_WEBNATIVE_BOOT__ ||
                g.__CWS_NEUTRALINO_BOOT__ ||
                typeof g.__WEBNATIVE_AUTH__?.port === "number" ||
                typeof g.__NEUTRALINO_AUTH__?.port === "number" ||
                crxWithBridge
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
    const cwsp = remote.cwsp as Record<string, unknown> | undefined;
    const control = remote.control as Record<string, unknown> | undefined;
    // WHY: ignore `{ neutralino: … }` shell-meta-only responses — those are not CWSP SoT.
    // Capacitor Android Control API often has shell.* device flags without desktop bridge.* keys.
    return Boolean(
        (typeof core?.endpointUrl === "string" && core.endpointUrl.trim()) ||
            (typeof core?.userId === "string" && core.userId.trim()) ||
            (typeof core?.ecosystemToken === "string" && core.ecosystemToken.trim()) ||
            (typeof core?.userKey === "string" && core.userKey.trim()) ||
            (typeof shell?.clipboardInboundMode === "string" && shell.clipboardInboundMode) ||
            (typeof shell?.clipboardOutboundMode === "string" && shell.clipboardOutboundMode) ||
            (typeof shell?.remoteHost === "string" && shell.remoteHost.trim()) ||
            (typeof shell?.clientId === "string" && shell.clientId.trim()) ||
            typeof shell?.allowControlApi === "boolean" ||
            typeof shell?.bridgeDaemonEnabled === "boolean" ||
            typeof shell?.autoStartOnBoot === "boolean" ||
            (typeof bridge?.endpointUrl === "string" && bridge.endpointUrl.trim()) ||
            (typeof bridge?.userId === "string" && String(bridge.userId).trim()) ||
            (typeof cwsp?.clientId === "string" && String(cwsp.clientId).trim()) ||
            (typeof cwsp?.endpointUrl === "string" && String(cwsp.endpointUrl).trim()) ||
            control?.surface === "capacitor-android"
    );
};

const isCrxSettingsRuntime = (): boolean => {
    try {
        const id = (globalThis as { chrome?: { runtime?: { id?: string } } }).chrome?.runtime?.id;
        return typeof id === "string" && id.length > 0;
    } catch {
        return false;
    }
};

/**
 * INVARIANT (CRX): Extension wire `core.userId` = L-110-crx;
 * CWSP desk `shell.clientId` = L-110 (never *-crx).
 * WHY: polluted chrome.storage / portable swaps these on open without this pass.
 */
const reconcileCrxIdentityAfterHydrate = (settings: AppSettings): AppSettings => {
    if (!isCrxSettingsRuntime()) return settings;
    const CRX_WIRE = "L-110-crx";
    const DESK_DEFAULT = "L-110";
    const isCrxWire = (v: unknown) => /^L-\d{1,3}-crx$/i.test(String(v ?? "").trim());
    const pickDesk = (...cands: unknown[]): string => {
        for (const c of cands) {
            const id = String(c ?? "").trim();
            if (id && !isCrxWire(id)) return id;
        }
        return DESK_DEFAULT;
    };
    const deskId = pickDesk(settings.shell?.clientId, settings.core?.userId);
    return {
        ...settings,
        core: {
            ...(settings.core || {}),
            userId: CRX_WIRE,
            socket: {
                ...(settings.core?.socket || {}),
                selfId: CRX_WIRE
            }
        },
        shell: {
            ...(settings.shell || {}),
            clientId: deskId
        }
    };
};

/** Load local settings then overlay the registered sync arm (gateway / webnative / …). */
export const loadSettingsHydratedFromSync = async (
    loadLocal: () => Promise<AppSettings>
): Promise<AppSettings> => {
    const local = await loadLocal();
    // WHY: preferBackendSync=false keeps Settings on IDB/local only (operator override).
    if ((local.core?.preferBackendSync ?? true) === false) {
        return reconcileCrxIdentityAfterHydrate(local);
    }

    let remote = await getSettingsSync();
    // WHY: Neutralino control host often warms after first Settings paint — retry so
    // fields bind to portable.config (backend) instead of stale localStorage/IDB.
    // CRX: only retry when Control is already live (paired session) — unpaired = chrome.storage only.
    const crxControlLive = (() => {
        try {
            if (!isCrxSettingsRuntime()) return false;
            const g = globalThis as { __NEUTRALINO_AUTH__?: { port?: number } };
            const ds = String(
                (globalThis as { document?: { documentElement?: { dataset?: DOMStringMap } } })
                    .document?.documentElement?.dataset?.cwspBridge || ""
            );
            return ds === "live" || typeof g.__NEUTRALINO_AUTH__?.port === "number";
        } catch {
            return false;
        }
    })();
    const shouldRetryRemote = isDesktopSettingsSurface() || crxControlLive;
    if (shouldRetryRemote && !remoteSettingsLooksUseful(remote)) {
        for (let i = 0; i < 8; i++) {
            await new Promise((r) => setTimeout(r, 300));
            remote = await getSettingsSync();
            if (remoteSettingsLooksUseful(remote)) break;
        }
    }

    return reconcileCrxIdentityAfterHydrate(mergeSettingsFromSync(local, remote));
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

const isCapacitorNativeShell = (): boolean => isNativeApkHost();

/** Resolve bare host/IP fields in `core.endpointUrl` / `core.ops.directUrl` before persist. */
export const resolveCwspSettingsBeforeSave = async (settings: AppSettings): Promise<void> => {
    normalizeEcosystemToken(settings);
    const core = settings.core;
    if (!core || typeof core !== "object") return;
    // Prefer short Client-ID (L-196); collapse full L-192.168.0.196 if pasted.
    const { sanitizeFleetSelfWireNodeId } = await import("cwsp-shared/airpad-cwsp-client-parity");
    const canonicalUserId = sanitizeFleetSelfWireNodeId(core.userId);
    if (canonicalUserId) core.userId = canonicalUserId;
    // WHY: Control SPA host must never be saved as Relay (produces wss://cwsp.u2re.space/ws).
    // Multi-hub lists: strip per-segment — never parse the whole `a;b` string as one URL.
    const isControlSpaHost = (host: string): boolean => {
        const h = host.toLowerCase();
        return (
            h === "cwsp.u2re.space" ||
            h === "www.cwsp.u2re.space" ||
            h === "md.u2re.space" ||
            h === "www.md.u2re.space"
        );
    };
    const stripControlSpaSegment = (url: string): string => {
        const raw = String(url || "").trim();
        if (!raw) return "";
        try {
            const withScheme = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
            const host = new URL(withScheme).hostname.toLowerCase();
            if (isControlSpaHost(host)) return "";
        } catch {
            if (/cwsp\.u2re\.space|md\.u2re\.space/i.test(raw)) return "";
        }
        return raw;
    };
    const stripControlSpa = (url: string): string => {
        const raw = String(url || "").trim();
        if (!raw) return "";
        if (/[,;\s]/.test(raw) && /:\/\//.test(raw)) {
            return raw
                .split(/[,;\s]+/)
                .map((part) => stripControlSpaSegment(part.trim()))
                .filter(Boolean)
                .join(";");
        }
        return stripControlSpaSegment(raw);
    };
    if (typeof core.endpointUrl === "string") {
        const cleaned = stripControlSpa(core.endpointUrl);
        if (cleaned !== core.endpointUrl.trim()) core.endpointUrl = cleaned;
    }
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
