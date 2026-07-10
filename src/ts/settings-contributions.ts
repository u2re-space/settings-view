/*
 * Filename: settings-contributions.ts
 * FullPath: modules/views/settings-view/src/ts/settings-contributions.ts
 * Change date and time: 16.35.00_10.07.2026
 * Reason for changes: Pass-II — hydrate/persist helpers bridging contributions ↔ settings:get/patch.
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
    const settings = {
        ...(base as SettingsBlob),
        ...remote
    } as AppSettings;
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
