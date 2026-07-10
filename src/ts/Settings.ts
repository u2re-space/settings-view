import { H } from "fest/lure";
import { loadSettings, saveSettings, getLastSettingsSaveReport, ensureCapacitorCwspSettingsSeeded } from "com/config/Settings";
import { BUILTIN_AI_MODELS, type AppSettings, type CoreMode } from "com/config/SettingsTypes";
import { openAdminDoorFromCore, resolveAdminDoorUrls } from "com/config/admin-doors";
import { sendMessage } from "com/core/UnifiedMessaging";
import { applyTheme } from "core/utils/Theme";
import { setString, StorageKeys } from "core/storage";
import { navigateToView } from "shells/boot";
import { applyAirpadRuntimeFromAppSettings } from "views/airpad/config/config";

import {
    buildResponseLanguageOptions,
    buildSpeechLanguageOptions,
    parseFloatInRange,
    parseNumberOrDefault,
    readCheckboxValue,
    readTrimmedControlValue,
    speechLanguageLabel,
    eventTargetElement,
} from "./settings-utils";
import { collectMcpConfigurations, createMcpRow, renderMcpConfigurations } from "./settings-mcp";
import { createSettingsFooter } from "../sections/SettingsFooter";
import { createSettingsHeader } from "../sections/SettingsHeader";
import { createAppearanceSection } from "../sections/SettingsAppearance";
import { createMarkdownSection } from "../sections/SettingsMarkdown";
import { createAiSection } from "../sections/SettingsAI";
import { createMcpSection } from "../sections/SettingsMcp";
import { createServerSection } from "../sections/SettingsServer";
import { createInstructionsSection } from "../sections/SettingsInstructions";
import { createExtensionSection } from "../sections/SettingsExtension";
import type { SettingsContributionContext } from "com/config/SettingsContributions";
import {
    mountContributions,
    applyContributions,
    collectContributions,
    resolveCwspSettingsBeforeSave,
    contributedTabIds,
    registerBuiltinSettingsContributions,
    resolveSettingsSurface,
    resolveSettingsShellProfile,
    pruneBuiltInSettingsTabs,
    defaultSettingsTabForProfile,
    hasBuiltInSettingsPanel
} from "./settings-contributions";
import { requestCapacitorSettingsPermissionsAfterSave } from "boot/capacitor-settings-permissions";
import { attachSettingsInlineStylesWhenConnected } from "./settings-styles-attach";

export type SettingsViewOptions = {
    isExtension: boolean;
    initialTab?: string;
    onTheme?: (theme: AppSettings["appearance"] extends { theme?: infer T } ? (T extends string ? T : "auto") : "auto") => void;
};

export const createSettingsView = (opts: SettingsViewOptions) => {
    let note: HTMLElement | null = null;
    let noteTimer: ReturnType<typeof setTimeout> | null = null;
    const noteClearMs = () => {
        const surface = resolveSettingsSurface();
        return surface === "capacitor" || surface === "native" ? 8000 : 2500;
    };
    const setNote = (text: string, opts?: { persist?: boolean; tone?: "ok" | "warn" | "err" }) => {
        if (!note) return;
        if (noteTimer) {
            clearTimeout(noteTimer);
            noteTimer = null;
        }
        note.textContent = text;
        note.classList.remove("note--ok", "note--warn", "note--err");
        if (opts?.tone === "ok") note.classList.add("note--ok");
        if (opts?.tone === "warn") note.classList.add("note--warn");
        if (opts?.tone === "err") note.classList.add("note--err");
        if (text && !opts?.persist) {
            noteTimer = setTimeout(() => {
                if (note) {
                    note.textContent = "";
                    note.classList.remove("note--ok", "note--warn", "note--err");
                }
            }, noteClearMs());
        }
    };

    const root = H`<div class="view-settings" data-view="settings">
    ${createSettingsHeader()}
    <div class="settings-screen__body">
      ${createAppearanceSection()}
      ${createMarkdownSection()}
      ${createAiSection()}
      ${createMcpSection()}
      ${createServerSection()}
      ${createInstructionsSection(setNote)}
      ${createExtensionSection()}
    </div>
    ${createSettingsFooter()}
  </div>` as HTMLElement;

    attachSettingsInlineStylesWhenConnected(root);

    // Contributed settings: each view/shell can add its own tab + panel. Mount
    // them now (before tab click handlers are wired below) so they behave like
    // built-in tabs and persist generically through load/save.
    registerBuiltinSettingsContributions();
    const contributionCtx: SettingsContributionContext = {
        isExtension: opts.isExtension,
        surface: resolveSettingsSurface()
    };
    const settingsProfile = resolveSettingsShellProfile(contributionCtx);
    mountContributions(root, contributionCtx);

    pruneBuiltInSettingsTabs(root, settingsProfile);

    // Full desktop host: CWSP tab replaces Server on Capacitor; cwsp-mobile already dropped Server.
    if (
        settingsProfile === "full" &&
        (contributionCtx.surface === "capacitor" || contributionCtx.surface === "native")
    ) {
        root.querySelector('[data-tab-panel="server"]')?.remove();
        root.querySelector('[data-action="switch-settings-tab"][data-tab="server"]')?.remove();
    }

    const hasPanel = (panelId: string) => hasBuiltInSettingsPanel(root, panelId);

    const field = (sel: string) => root.querySelector(sel) as HTMLInputElement | HTMLSelectElement | null;
    note = root.querySelector("[data-note]") as HTMLElement | null;

    const apiUrl = field('[data-field="ai.baseUrl"]') as HTMLInputElement | null;
    const apiKey = field('[data-field="ai.apiKey"]') as HTMLInputElement | null;
    const showKey = field('[data-field="ui.showKey"]') as HTMLInputElement | null;
    const model = field('[data-field="ai.model"]') as HTMLSelectElement | null;
    const customModel = field('[data-field="ai.customModel"]') as HTMLInputElement | null;
    const customModelGroup = root.querySelector('[data-field-group="ai.customModel"]') as HTMLElement | null;
    const defaultReasoningEffort = field('[data-field="ai.defaultReasoningEffort"]') as HTMLSelectElement | null;
    const defaultVerbosity = field('[data-field="ai.defaultVerbosity"]') as HTMLSelectElement | null;
    const maxOutputTokens = field('[data-field="ai.maxOutputTokens"]') as HTMLInputElement | null;
    const contextTruncation = field('[data-field="ai.contextTruncation"]') as HTMLSelectElement | null;
    const promptCacheRetention = field('[data-field="ai.promptCacheRetention"]') as HTMLSelectElement | null;
    const maxToolCalls = field('[data-field="ai.maxToolCalls"]') as HTMLInputElement | null;
    const parallelToolCalls = field('[data-field="ai.parallelToolCalls"]') as HTMLInputElement | null;
    const requestTimeoutLow = field('[data-field="ai.requestTimeout.low"]') as HTMLInputElement | null;
    const requestTimeoutMedium = field('[data-field="ai.requestTimeout.medium"]') as HTMLInputElement | null;
    const requestTimeoutHigh = field('[data-field="ai.requestTimeout.high"]') as HTMLInputElement | null;
    const maxRetries = field('[data-field="ai.maxRetries"]') as HTMLInputElement | null;
    const mode = field('[data-field="ai.shareTargetMode"]') as HTMLSelectElement | null;
    const syncCustomModelVisibility = () => {
        const isCustom = (model?.value || "").trim() === "custom";
        if (customModelGroup) customModelGroup.hidden = !isCustom;
        if (customModel) customModel.disabled = !isCustom;
    };

    if (model) {
        model.replaceChildren();
        for (const builtInModel of BUILTIN_AI_MODELS) {
            const option = document.createElement("option");
            option.value = builtInModel;
            option.textContent = builtInModel;
            model.append(option);
        }
        const customOption = document.createElement("option");
        customOption.value = "custom";
        customOption.textContent = "Custom...";
        model.append(customOption);
        model.addEventListener("change", syncCustomModelVisibility);
    }
    customModel?.addEventListener("focus", () => {
        if (!model) return;
        model.value = "custom";
        syncCustomModelVisibility();
    });

    const autoProcessShared = field('[data-field="ai.autoProcessShared"]') as HTMLInputElement | null;
    const responseLanguage = field('[data-field="ai.responseLanguage"]') as HTMLSelectElement | null;
    const translateResults = field('[data-field="ai.translateResults"]') as HTMLInputElement | null;
    const generateSvgGraphics = field('[data-field="ai.generateSvgGraphics"]') as HTMLInputElement | null;
    const speechLanguage = field('[data-field="speech.language"]') as HTMLSelectElement | null;
    const theme = field('[data-field="appearance.theme"]') as HTMLSelectElement | null;
    const fontSize = field('[data-field="appearance.fontSize"]') as HTMLSelectElement | null;
    const markdownPreset = field('[data-field="appearance.markdown.preset"]') as HTMLSelectElement | null;
    const markdownFontFamily = field('[data-field="appearance.markdown.fontFamily"]') as HTMLSelectElement | null;
    const markdownFontSizePx = field('[data-field="appearance.markdown.fontSizePx"]') as HTMLInputElement | null;
    const markdownLineHeight = field('[data-field="appearance.markdown.lineHeight"]') as HTMLInputElement | null;
    const markdownContentMaxWidthPx = field('[data-field="appearance.markdown.contentMaxWidthPx"]') as HTMLInputElement | null;
    const markdownPrintScale = field('[data-field="appearance.markdown.printScale"]') as HTMLInputElement | null;
    const markdownPageSize = field('[data-field="appearance.markdown.page.size"]') as HTMLSelectElement | null;
    const markdownPageOrientation = field('[data-field="appearance.markdown.page.orientation"]') as HTMLSelectElement | null;
    const markdownPageMarginMm = field('[data-field="appearance.markdown.page.marginMm"]') as HTMLInputElement | null;
    const markdownModuleTypography = field('[data-field="appearance.markdown.modules.typography"]') as HTMLInputElement | null;
    const markdownModuleLists = field('[data-field="appearance.markdown.modules.lists"]') as HTMLInputElement | null;
    const markdownModuleTables = field('[data-field="appearance.markdown.modules.tables"]') as HTMLInputElement | null;
    const markdownModuleCodeBlocks = field('[data-field="appearance.markdown.modules.codeBlocks"]') as HTMLInputElement | null;
    const markdownModuleBlockquotes = field('[data-field="appearance.markdown.modules.blockquotes"]') as HTMLInputElement | null;
    const markdownModuleMedia = field('[data-field="appearance.markdown.modules.media"]') as HTMLInputElement | null;
    const markdownModulePrintBreaks = field('[data-field="appearance.markdown.modules.printBreaks"]') as HTMLInputElement | null;
    const markdownPluginSmartTypography = field('[data-field="appearance.markdown.plugins.smartTypography"]') as HTMLInputElement | null;
    const markdownPluginSoftBreaks = field('[data-field="appearance.markdown.plugins.softBreaksAsBr"]') as HTMLInputElement | null;
    const markdownPluginExternalLinks = field('[data-field="appearance.markdown.plugins.externalLinksNewTab"]') as HTMLInputElement | null;
    const markdownCustomCss = root.querySelector('[data-field="appearance.markdown.customCss"]') as HTMLTextAreaElement | null;
    const markdownPrintCss = root.querySelector('[data-field="appearance.markdown.printCss"]') as HTMLTextAreaElement | null;
    const markdownExtensions = root.querySelector('[data-field="appearance.markdown.extensions"]') as HTMLTextAreaElement | null;
    const ntpEnabled = field('[data-field="core.ntpEnabled"]') as HTMLInputElement | null;
    const coreMode = field('[data-field="core.mode"]') as HTMLSelectElement | null;
    const coreEndpointUrl = field('[data-field="core.endpointUrl"]') as HTMLInputElement | null;
    const coreUserId = field('[data-field="core.userId"]') as HTMLInputElement | null;
    const coreUserKey = field('[data-field="core.userKey"]') as HTMLInputElement | null;
    const coreEcosystemToken = field('[data-field="core.ecosystemToken"]') as HTMLInputElement | null;
    const corePreferBackendSync = field('[data-field="core.preferBackendSync"]') as HTMLInputElement | null;
    const coreEncrypt = field('[data-field="core.encrypt"]') as HTMLInputElement | null;
    const coreAppClientId = field('[data-field="core.appClientId"]') as HTMLInputElement | null;
    const coreAllowInsecureTls = field('[data-field="core.allowInsecureTls"]') as HTMLInputElement | null;
    const coreOpsAllowUnencrypted = field('[data-field="core.ops.allowUnencrypted"]') as HTMLInputElement | null;
    const coreAdminHttps = field('[data-field="core.admin.httpsOrigin"]') as HTMLInputElement | null;
    const coreAdminHttp = field('[data-field="core.admin.httpOrigin"]') as HTMLInputElement | null;
    const coreAdminPath = field('[data-field="core.admin.path"]') as HTMLInputElement | null;
    const coreUseCoreIdentityAirpad = field('[data-field="core.useCoreIdentityForAirPad"]') as HTMLInputElement | null;
    const coreSocketAccessToken = field('[data-field="core.socket.accessToken"]') as HTMLInputElement | null;
    const coreSocketRouteTarget = field('[data-field="core.socket.routeTarget"]') as HTMLInputElement | null;
    const coreSocketClientAccessToken = field('[data-field="core.socket.clientAccessToken"]') as HTMLInputElement | null;
    const coreSocketAllowAccessWithoutUserKey = field(
        '[data-field="core.socket.allowAccessTokenWithoutUserKey"]'
    ) as HTMLInputElement | null;
    const shellMaintainHubSocket = field('[data-field="shell.maintainHubSocketConnection"]') as HTMLInputElement | null;
    const shellClipboardBroadcastTargets = field('[data-field="shell.clipboardBroadcastTargets"]') as HTMLInputElement | null;
    const shellPushLocalClipboard = field('[data-field="shell.pushLocalClipboardToLan"]') as HTMLInputElement | null;
    const shellClipboardPushIntervalMs = field('[data-field="shell.clipboardPushIntervalMs"]') as HTMLInputElement | null;
    const shellClipboard = field('[data-field="shell.enableRemoteClipboardBridge"]') as HTMLInputElement | null;
    const shellAcceptInboundClipboard = field('[data-field="shell.acceptInboundClipboardData"]') as HTMLInputElement | null;
    const shellClipboardInboundAllowIds = field('[data-field="shell.clipboardInboundAllowIds"]') as HTMLInputElement | null;
    const shellAccessTokenBypassClipboardAllow = field(
        '[data-field="shell.accessTokenBypassesClipboardAllowlist"]'
    ) as HTMLInputElement | null;
    const shellClipboardShareDestIds = field('[data-field="shell.clipboardShareDestinationIds"]') as HTMLInputElement | null;
    const shellApplyRemoteDevice = field('[data-field="shell.applyRemoteClipboardToDevice"]') as HTMLInputElement | null;
    const shellAcceptContactsBridge = field('[data-field="shell.acceptContactsBridgeData"]') as HTMLInputElement | null;
    const shellAcceptSmsBridge = field('[data-field="shell.acceptSmsBridgeData"]') as HTMLInputElement | null;
    const shellSms = field('[data-field="shell.enableNativeSms"]') as HTMLInputElement | null;
    const shellContacts = field('[data-field="shell.enableNativeContacts"]') as HTMLInputElement | null;
    const adminPreview = root.querySelector("[data-admin-preview]") as HTMLElement | null;
    const mcpSection = root.querySelector("[data-mcp-section]") as HTMLElement | null;
    const extSection = root.querySelector('[data-section="extension"]') as HTMLElement | null;
    const extTab = root.querySelector('[data-extension-tab]') as HTMLButtonElement | null;

    if (responseLanguage) {
        responseLanguage.replaceChildren();
        const autoOption = document.createElement("option");
        autoOption.value = "auto";
        autoOption.textContent = "Auto-detect";
        responseLanguage.append(autoOption);

        const followOption = document.createElement("option");
        followOption.value = "follow";
        followOption.textContent = "Follow source/context";
        responseLanguage.append(followOption);

        for (const lang of buildResponseLanguageOptions()) {
            const option = document.createElement("option");
            option.value = lang;
            option.textContent = lang === "ru"
                ? "Russian"
                : lang === "en"
                    ? "English"
                    : lang;
            responseLanguage.append(option);
        }
    }

    if (speechLanguage) {
        speechLanguage.replaceChildren();
        for (const lang of buildSpeechLanguageOptions()) {
            const option = document.createElement("option");
            option.value = lang;
            option.textContent = speechLanguageLabel(lang);
            speechLanguage.append(option);
        }
    }

    root.addEventListener("input", (ev) => {
        const el = ev.target as HTMLElement | null;
        if (el?.matches?.('[data-field^="core."]')) refreshAdminDoorPreview();
    });
    root.addEventListener("change", (ev) => {
        const el = ev.target as HTMLElement | null;
        if (el?.matches?.('[data-field^="core."]')) refreshAdminDoorPreview();
    });

    const switchSettingsTab = (tab: string) => {
        const fallback = defaultSettingsTabForProfile(settingsProfile);
        let nextTab = tab || fallback;
        if (!root.querySelector(`[data-tab-panel="${nextTab}"]`)) {
            const first = root.querySelector<HTMLElement>("[data-tab-panel]");
            nextTab = first?.getAttribute("data-tab-panel") || fallback;
        }
        const tabRoot = root.querySelector('[data-settings-tabs]') as HTMLElement | null;
        tabRoot?.setAttribute("data-active-tab", nextTab);

        const tabButtons = root.querySelectorAll('[data-action="switch-settings-tab"][data-tab]');
        for (const tabButton of Array.from(tabButtons)) {
            const btn = tabButton as HTMLButtonElement;
            const isActive = btn.getAttribute("data-tab") === nextTab;
            btn.classList.toggle("is-active", isActive);
            btn.setAttribute("aria-selected", String(isActive));
        }

        const panels = root.querySelectorAll('[data-tab-panel]');
        for (const panel of Array.from(panels)) {
            const el = panel as HTMLElement;
            const isActive = el.getAttribute("data-tab-panel") === nextTab;
            if (isActive) {
                el.removeAttribute("hidden");
            } else {
                el.hidden = true;
            }
            el.classList.toggle("is-active", isActive);
        }
        attachSettingsInlineStylesWhenConnected(root);
    };

    /* Direct handlers: tab strip sits under shell shadow / CRX options UI; delegation misses some hits. */
    for (const tabEl of root.querySelectorAll<HTMLButtonElement>(
        '[data-settings-tabs] button[type="button"][data-action="switch-settings-tab"][data-tab]'
    )) {
        tabEl.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            switchSettingsTab(tabEl.getAttribute("data-tab") || defaultSettingsTabForProfile(settingsProfile));
        });
    }

    const resolveInitialTab = (raw?: string): string => {
        const fallback = defaultSettingsTabForProfile(settingsProfile);
        const normalized = (raw || "").trim().toLowerCase();
        if (!normalized) return fallback;
        if (normalized === "style" || normalized === "styles" || normalized === "styling") {
            return hasPanel("markdown") ? "markdown" : fallback;
        }
        const availableTabs = new Set([
            ...(hasPanel("appearance") ? ["appearance"] : []),
            ...(hasPanel("markdown") ? ["markdown"] : []),
            ...(hasPanel("ai") ? ["ai"] : []),
            ...(hasPanel("mcp") ? ["mcp"] : []),
            ...(hasPanel("server") ? ["server"] : []),
            ...(hasPanel("instructions") ? ["instructions"] : []),
            ...(hasPanel("extension") ? ["extension"] : []),
            ...contributedTabIds(contributionCtx)
        ]);
        return availableTabs.has(normalized) ? normalized : fallback;
    };

    const buildCoreSnapshotForAdminPreview = (): AppSettings["core"] => {
        const eco =
            coreEcosystemToken?.value?.trim() ||
            coreUserKey?.value?.trim() ||
            coreSocketAccessToken?.value?.trim() ||
            "";
        return {
        mode: ((coreMode?.value as CoreMode) || "native") as CoreMode,
        endpointUrl: coreEndpointUrl?.value?.trim() || "",
        userId: coreUserId?.value?.trim() || "",
        ecosystemToken: eco,
        userKey: eco,
        encrypt: Boolean(coreEncrypt?.checked),
        preferBackendSync: (corePreferBackendSync?.checked ?? true) !== false,
        appClientId: coreAppClientId?.value?.trim() || "",
        allowInsecureTls: Boolean(coreAllowInsecureTls?.checked),
        useCoreIdentityForAirPad: (coreUseCoreIdentityAirpad?.checked ?? true) !== false,
        socket: {
            accessToken: eco,
            routeTarget: coreSocketRouteTarget?.value?.trim() || "",
            selfId: "",
            clientAccessToken: coreSocketClientAccessToken?.value?.trim() || "",
            allowAccessTokenWithoutUserKey: Boolean(coreSocketAllowAccessWithoutUserKey?.checked),
        },
        admin: {
            httpsOrigin: coreAdminHttps?.value?.trim() || "",
            httpOrigin: coreAdminHttp?.value?.trim() || "",
            path: coreAdminPath?.value?.trim() || "/",
        },
        ops: {
            allowUnencrypted: Boolean(coreOpsAllowUnencrypted?.checked),
        },
    };
    };

    const refreshAdminDoorPreview = () => {
        if (!adminPreview) return;
        const urls = resolveAdminDoorUrls(buildCoreSnapshotForAdminPreview());
        adminPreview.textContent = `Resolved: ${urls.https} · ${urls.http}`;
    };

    const openExplorerPath = (path: string) => {
        try {
            setString(StorageKeys.EXPLORER_PATH, path);
            navigateToView("explorer");
            void sendMessage({
                type: "content-explorer",
                destination: "explorer",
                data: {
                    action: "view",
                    path
                },
                metadata: {
                    source: "settings"
                }
            });
            setNote(`Explorer: ${path}`);
        } catch (error) {
            console.warn("[Settings] Failed to open explorer path:", error);
            setNote("Failed to open Explorer path.");
        }
    };

    const loadSettingsForView = async () => {
        if (contributionCtx.surface === "capacitor" || contributionCtx.surface === "native") {
            await ensureCapacitorCwspSettingsSeeded().catch(() => null);
        }
        return loadSettings();
    };

    void Promise.resolve(loadSettingsForView()).then((s) => {
            if (apiUrl) apiUrl.value = (s?.ai?.baseUrl || "").trim();
            if (apiKey) apiKey.value = (s?.ai?.apiKey || "").trim();
            const savedModel = (s?.ai?.model || "gpt-5.4").trim();
            const savedCustomModel = (s?.ai?.customModel || "").trim();
            if (model) {
                const hasBuiltin = BUILTIN_AI_MODELS.includes(savedModel as (typeof BUILTIN_AI_MODELS)[number]);
                if (savedModel === "custom" || (!hasBuiltin && !!savedModel)) {
                    model.value = "custom";
                    if (customModel) customModel.value = savedCustomModel || savedModel;
                } else {
                    model.value = hasBuiltin ? savedModel : "gpt-5.4";
                    if (customModel) customModel.value = savedCustomModel;
                }
                syncCustomModelVisibility();
            }
            if (defaultReasoningEffort) defaultReasoningEffort.value = (s?.ai?.defaultReasoningEffort || "medium") as any;
            if (defaultVerbosity) defaultVerbosity.value = (s?.ai?.defaultVerbosity || "medium") as any;
            if (maxOutputTokens) maxOutputTokens.value = String(s?.ai?.maxOutputTokens ?? 400000);
            if (contextTruncation) contextTruncation.value = (s?.ai?.contextTruncation || "disabled") as any;
            if (promptCacheRetention) promptCacheRetention.value = (s?.ai?.promptCacheRetention || "in-memory") as any;
            if (maxToolCalls) maxToolCalls.value = String(s?.ai?.maxToolCalls ?? 8);
            if (parallelToolCalls) parallelToolCalls.checked = (s?.ai?.parallelToolCalls ?? true) !== false;
            if (requestTimeoutLow) requestTimeoutLow.value = String(s?.ai?.requestTimeout?.low ?? 60000);
            if (requestTimeoutMedium) requestTimeoutMedium.value = String(s?.ai?.requestTimeout?.medium ?? 300000);
            if (requestTimeoutHigh) requestTimeoutHigh.value = String(s?.ai?.requestTimeout?.high ?? 900000);
            if (maxRetries) maxRetries.value = String(s?.ai?.maxRetries ?? 2);
            if (mode) mode.value = (s?.ai?.shareTargetMode || "recognize") as any;
            if (autoProcessShared) autoProcessShared.checked = (s?.ai?.autoProcessShared ?? true) !== false;
            if (responseLanguage) responseLanguage.value = (s?.ai?.responseLanguage || "auto") as any;
            if (translateResults) translateResults.checked = Boolean(s?.ai?.translateResults);
            if (generateSvgGraphics) generateSvgGraphics.checked = Boolean(s?.ai?.generateSvgGraphics);
            if (speechLanguage) speechLanguage.value = (s?.speech?.language || "en-US") as any;
            if (theme) theme.value = (s?.appearance?.theme || "auto") as any;
            if (fontSize) fontSize.value = (s?.appearance?.fontSize || "medium") as any;
            if (markdownPreset) markdownPreset.value = (s?.appearance?.markdown?.preset || "default") as any;
            if (markdownFontFamily) markdownFontFamily.value = (s?.appearance?.markdown?.fontFamily || "system") as any;
            if (markdownFontSizePx) markdownFontSizePx.value = String(s?.appearance?.markdown?.fontSizePx ?? 16);
            if (markdownLineHeight) markdownLineHeight.value = String(s?.appearance?.markdown?.lineHeight ?? 1.7);
            if (markdownContentMaxWidthPx) markdownContentMaxWidthPx.value = String(s?.appearance?.markdown?.contentMaxWidthPx ?? 860);
            if (markdownPrintScale) markdownPrintScale.value = String(s?.appearance?.markdown?.printScale ?? 1);
            if (markdownPageSize) markdownPageSize.value = (s?.appearance?.markdown?.page?.size || "auto") as any;
            if (markdownPageOrientation) markdownPageOrientation.value = (s?.appearance?.markdown?.page?.orientation || "portrait") as any;
            if (markdownPageMarginMm) markdownPageMarginMm.value = String(s?.appearance?.markdown?.page?.marginMm ?? 12);
            if (markdownModuleTypography) markdownModuleTypography.checked = (s?.appearance?.markdown?.modules?.typography ?? true) !== false;
            if (markdownModuleLists) markdownModuleLists.checked = (s?.appearance?.markdown?.modules?.lists ?? true) !== false;
            if (markdownModuleTables) markdownModuleTables.checked = (s?.appearance?.markdown?.modules?.tables ?? true) !== false;
            if (markdownModuleCodeBlocks) markdownModuleCodeBlocks.checked = (s?.appearance?.markdown?.modules?.codeBlocks ?? true) !== false;
            if (markdownModuleBlockquotes) markdownModuleBlockquotes.checked = (s?.appearance?.markdown?.modules?.blockquotes ?? true) !== false;
            if (markdownModuleMedia) markdownModuleMedia.checked = (s?.appearance?.markdown?.modules?.media ?? true) !== false;
            if (markdownModulePrintBreaks) markdownModulePrintBreaks.checked = (s?.appearance?.markdown?.modules?.printBreaks ?? true) !== false;
            if (markdownPluginSmartTypography) markdownPluginSmartTypography.checked = Boolean(s?.appearance?.markdown?.plugins?.smartTypography);
            if (markdownPluginSoftBreaks) markdownPluginSoftBreaks.checked = Boolean(s?.appearance?.markdown?.plugins?.softBreaksAsBr);
            if (markdownPluginExternalLinks) markdownPluginExternalLinks.checked = (s?.appearance?.markdown?.plugins?.externalLinksNewTab ?? true) !== false;
            if (markdownCustomCss) markdownCustomCss.value = (s?.appearance?.markdown?.customCss || "").trim();
            if (markdownPrintCss) markdownPrintCss.value = (s?.appearance?.markdown?.printCss || "").trim();
            if (markdownExtensions) {
                const extensions = Array.isArray(s?.appearance?.markdown?.extensions)
                    ? s.appearance?.markdown?.extensions
                    : [];
                markdownExtensions.value = extensions.length > 0
                    ? JSON.stringify(extensions, null, 2)
                    : "";
            }
            if (ntpEnabled) ntpEnabled.checked = Boolean(s?.core?.ntpEnabled);
            if (coreMode) coreMode.value = (s?.core?.mode || "native") as string;
            if (coreEndpointUrl) coreEndpointUrl.value = (s?.core?.endpointUrl || "").trim();
            if (coreUserId) coreUserId.value = (s?.core?.userId || "").trim();
            {
                const eco =
                    String(s?.core?.ecosystemToken || "").trim() ||
                    String(s?.core?.userKey || "").trim() ||
                    String(s?.core?.socket?.accessToken || s?.core?.socket?.airpadAuthToken || "").trim();
                if (coreEcosystemToken) coreEcosystemToken.value = eco;
                if (coreUserKey) coreUserKey.value = eco;
                if (coreSocketAccessToken) coreSocketAccessToken.value = eco;
            }
            if (corePreferBackendSync) corePreferBackendSync.checked = (s?.core?.preferBackendSync ?? true) !== false;
            if (coreEncrypt) coreEncrypt.checked = Boolean(s?.core?.encrypt);
            if (coreAppClientId) coreAppClientId.value = (s?.core?.appClientId || "").trim();
            if (coreUseCoreIdentityAirpad) coreUseCoreIdentityAirpad.checked = (s?.core?.useCoreIdentityForAirPad ?? true) !== false;
            if (coreSocketRouteTarget) {
                coreSocketRouteTarget.value = (
                    (s?.core?.socket?.routeTarget || s?.core?.socket?.selfId || "") as string
                ).trim();
            }
            if (coreSocketClientAccessToken) {
                coreSocketClientAccessToken.value = (s?.core?.socket?.clientAccessToken || "").trim();
            }
            if (coreSocketAllowAccessWithoutUserKey) {
                coreSocketAllowAccessWithoutUserKey.checked =
                    (s?.core?.socket?.allowAccessTokenWithoutUserKey ?? false) === true;
            }
            if (coreAllowInsecureTls) coreAllowInsecureTls.checked = Boolean(s?.core?.allowInsecureTls);
            if (coreOpsAllowUnencrypted) coreOpsAllowUnencrypted.checked = Boolean(s?.core?.ops?.allowUnencrypted);
            if (coreAdminHttps) coreAdminHttps.value = (s?.core?.admin?.httpsOrigin || "").trim();
            if (coreAdminHttp) coreAdminHttp.value = (s?.core?.admin?.httpOrigin || "").trim();
            if (coreAdminPath) coreAdminPath.value = (s?.core?.admin?.path || "/").trim() || "/";
            if (shellMaintainHubSocket) shellMaintainHubSocket.checked = Boolean(s?.shell?.maintainHubSocketConnection);
            if (shellClipboardBroadcastTargets) {
                shellClipboardBroadcastTargets.value = (s?.shell?.clipboardBroadcastTargets || "").trim();
            }
            if (shellPushLocalClipboard) {
                shellPushLocalClipboard.checked = Boolean(s?.shell?.pushLocalClipboardToLan);
            }
            if (shellClipboardPushIntervalMs) {
                const iv = Number(s?.shell?.clipboardPushIntervalMs);
                shellClipboardPushIntervalMs.value = String(
                    Number.isFinite(iv) && iv >= 800 ? Math.min(Math.round(iv), 60000) : 2000
                );
            }
            if (shellClipboard) shellClipboard.checked = (s?.shell?.enableRemoteClipboardBridge ?? true) !== false;
            if (shellAcceptInboundClipboard) {
                shellAcceptInboundClipboard.checked = (s?.shell?.acceptInboundClipboardData ?? true) !== false;
            }
            if (shellClipboardInboundAllowIds) {
                shellClipboardInboundAllowIds.value = (s?.shell?.clipboardInboundAllowIds || "").trim();
            }
            if (shellAccessTokenBypassClipboardAllow) {
                shellAccessTokenBypassClipboardAllow.checked =
                    (s?.shell?.accessTokenBypassesClipboardAllowlist ?? false) === true;
            }
            if (shellClipboardShareDestIds) {
                shellClipboardShareDestIds.value = (s?.shell?.clipboardShareDestinationIds || "").trim();
            }
            if (shellApplyRemoteDevice) shellApplyRemoteDevice.checked = (s?.shell?.applyRemoteClipboardToDevice ?? true) !== false;
            if (shellAcceptContactsBridge) {
                shellAcceptContactsBridge.checked = (s?.shell?.acceptContactsBridgeData ?? false) === true;
            }
            if (shellAcceptSmsBridge) {
                shellAcceptSmsBridge.checked = (s?.shell?.acceptSmsBridgeData ?? false) === true;
            }
            if (shellSms) shellSms.checked = (s?.shell?.enableNativeSms ?? true) !== false;
            if (shellContacts) shellContacts.checked = (s?.shell?.enableNativeContacts ?? true) !== false;
            refreshAdminDoorPreview();
            renderMcpConfigurations(mcpSection, Array.isArray(s?.ai?.mcp) ? s.ai.mcp : []);
            applyAirpadRuntimeFromAppSettings(s);
            applyTheme(s);
            applyContributions(root, s, contributionCtx);
            opts.onTheme?.(((s?.appearance?.theme as string) || "auto") as "auto" | "light" | "dark");
        })
        .catch(() => {
            renderMcpConfigurations(mcpSection, []);
        });

    showKey?.addEventListener("change", () => {
        if (!apiKey || !showKey) return;
        apiKey.type = showKey.checked ? "text" : "password";
    });

    theme?.addEventListener("change", () => {
        const t = ((theme.value as string) || "auto") as AppSettings["appearance"]["theme"];
        void (async () => {
            try {
                const cur = await loadSettings();
                applyTheme({
                    ...cur,
                    appearance: { ...(cur.appearance || {}), theme: t },
                });
            } catch {
                applyTheme({ appearance: { theme: t, fontSize: "medium" } } as AppSettings);
            }
            opts.onTheme?.(t);
        })();
    });

    root.addEventListener("click", (e) => {
        const t = eventTargetElement(e);
        const addMcpBtn = t?.closest?.('button[data-action="add-mcp-server"]') as HTMLButtonElement | null;
        if (addMcpBtn && mcpSection) {
            mcpSection.querySelector(".mcp-empty-note")?.remove();
            mcpSection.appendChild(createMcpRow({
                id: `mcp-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
                serverLabel: "",
                origin: "",
                clientKey: "",
                secretKey: "",
            }));
            return;
        }

        const removeMcpBtn = t?.closest?.('button[data-action="remove-mcp-server"]') as HTMLButtonElement | null;
        if (removeMcpBtn) {
            removeMcpBtn.closest(".mcp-row")?.remove();
            if (mcpSection && !mcpSection.querySelector("[data-mcp-id]")) {
                renderMcpConfigurations(mcpSection, []);
            }
            return;
        }

        const openUserStylesBtn = t?.closest?.('button[data-action="open-user-styles"]') as HTMLButtonElement | null;
        if (openUserStylesBtn) {
            openExplorerPath("/user/styles/");
            return;
        }

        const openAssetsReadonlyBtn = t?.closest?.('button[data-action="open-assets-readonly"]') as HTMLButtonElement | null;
        if (openAssetsReadonlyBtn) {
            openExplorerPath("/assets/");
            return;
        }

        const openAdminHttpsBtn = t?.closest?.('button[data-action="open-admin-https"]') as HTMLButtonElement | null;
        if (openAdminHttpsBtn) {
            openAdminDoorFromCore(buildCoreSnapshotForAdminPreview(), "https");
            return;
        }

        const openAdminHttpBtn = t?.closest?.('button[data-action="open-admin-http"]') as HTMLButtonElement | null;
        if (openAdminHttpBtn) {
            openAdminDoorFromCore(buildCoreSnapshotForAdminPreview(), "http");
            return;
        }

        const copyAdminHttpsBtn = t?.closest?.('button[data-action="copy-admin-https"]') as HTMLButtonElement | null;
        if (copyAdminHttpsBtn) {
            const urls = resolveAdminDoorUrls(buildCoreSnapshotForAdminPreview());
            void navigator.clipboard?.writeText?.(urls.https).then(
                () => setNote("HTTPS admin URL copied."),
                () => setNote("Copy failed.")
            );
            return;
        }

        const copyAdminHttpBtn = t?.closest?.('button[data-action="copy-admin-http"]') as HTMLButtonElement | null;
        if (copyAdminHttpBtn) {
            const urls = resolveAdminDoorUrls(buildCoreSnapshotForAdminPreview());
            void navigator.clipboard?.writeText?.(urls.http).then(
                () => setNote("HTTP admin URL copied."),
                () => setNote("Copy failed.")
            );
            return;
        }

        const openNativeSettingsBtn = t?.closest?.('button[data-action="open-native-app-settings"]') as HTMLButtonElement | null;
        if (openNativeSettingsBtn) {
            void import("shared/native/clipboard-device")
                .then((m) => m.openAppClipboardRelatedSettings())
                .then(() => setNote("App settings opened (native shell only)."))
                .catch(() => setNote("Native settings unavailable in this context."));
            return;
        }

        const openNativeNotifBtn = t?.closest?.('button[data-action="open-native-notification-settings"]') as HTMLButtonElement | null;
        if (openNativeNotifBtn) {
            void import("shared/native/clipboard-device")
                .then((m) => m.openNativeNotificationSettings?.())
                .then(() => setNote("Notification settings opened (native shell only)."))
                .catch(() => setNote("Native settings unavailable in this context."));
            return;
        }

        const btn = t?.closest?.('button[data-action="save"]') as HTMLButtonElement | null;
        if (!btn) return;

        void (async () => {
            setNote("Saving…", { tone: "warn" });
            const current = await loadSettings();
            let parsedMarkdownExtensions: any[] = current.appearance?.markdown?.extensions || [];
            const rawExtensions = hasPanel("markdown") ? (markdownExtensions?.value?.trim() || "") : "";
            if (rawExtensions) {
                try {
                    const parsed = JSON.parse(rawExtensions);
                    if (!Array.isArray(parsed)) throw new Error("Markdown extensions JSON must be an array.");
                    parsedMarkdownExtensions = parsed;
                } catch (error) {
                    switchSettingsTab("markdown");
                    setNote((error as Error)?.message || "Invalid Markdown extensions JSON.");
                    return;
                }
            }

            const next: AppSettings = {
                ...(current as AppSettings),
                ai: hasPanel("ai")
                    ? {
                          baseUrl: apiUrl?.value?.trim?.() || "",
                          apiKey: apiKey?.value?.trim?.() || "",
                          model: (model?.value || "gpt-5.4") as any,
                          customModel: model?.value === "custom" ? (customModel?.value?.trim?.() || "") : "",
                          defaultReasoningEffort: (defaultReasoningEffort?.value as any) || "medium",
                          defaultVerbosity: (defaultVerbosity?.value as any) || "medium",
                          maxOutputTokens: parseNumberOrDefault(maxOutputTokens?.value, 400000),
                          contextTruncation: (contextTruncation?.value as any) || "disabled",
                          promptCacheRetention: (promptCacheRetention?.value as any) || "in-memory",
                          maxToolCalls: parseNumberOrDefault(maxToolCalls?.value, 8),
                          parallelToolCalls: (parallelToolCalls?.checked ?? true) !== false,
                          requestTimeout: {
                              low: parseNumberOrDefault(requestTimeoutLow?.value, 60000),
                              medium: parseNumberOrDefault(requestTimeoutMedium?.value, 300000),
                              high: parseNumberOrDefault(requestTimeoutHigh?.value, 900000),
                          },
                          maxRetries: parseNumberOrDefault(maxRetries?.value, 2),
                          shareTargetMode: (mode?.value as any) || "recognize",
                          autoProcessShared: (autoProcessShared?.checked ?? true) !== false,
                          responseLanguage: (responseLanguage?.value as any) || "auto",
                          translateResults: Boolean(translateResults?.checked),
                          generateSvgGraphics: Boolean(generateSvgGraphics?.checked),
                          mcp: hasPanel("mcp") ? collectMcpConfigurations(mcpSection) : (current.ai?.mcp || []),
                          customInstructions: current.ai?.customInstructions || [],
                          activeInstructionId: current.ai?.activeInstructionId || "",
                      }
                    : (current.ai || {}),
                speech: hasPanel("ai")
                    ? { language: (speechLanguage?.value as any) || "en-US" }
                    : (current.speech || {}),
                core: hasPanel("server")
                    ? {
                          ...current.core,
                          ntpEnabled: readCheckboxValue(ntpEnabled, Boolean(current.core?.ntpEnabled)),
                          mode: (readTrimmedControlValue(coreMode, (current.core?.mode || "native") as string) || "native") as CoreMode,
                          endpointUrl: readTrimmedControlValue(coreEndpointUrl, current.core?.endpointUrl || ""),
                          userId: readTrimmedControlValue(coreUserId, current.core?.userId || ""),
                          ecosystemToken: (() => {
                              const eco =
                                  readTrimmedControlValue(
                                      coreEcosystemToken,
                                      current.core?.ecosystemToken ||
                                          current.core?.userKey ||
                                          current.core?.socket?.accessToken ||
                                          ""
                                  ) ||
                                  readTrimmedControlValue(coreUserKey, current.core?.userKey || "") ||
                                  readTrimmedControlValue(
                                      coreSocketAccessToken,
                                      current.core?.socket?.accessToken || current.core?.socket?.airpadAuthToken || ""
                                  );
                              return eco;
                          })(),
                          userKey: (() => {
                              const eco =
                                  readTrimmedControlValue(
                                      coreEcosystemToken,
                                      current.core?.ecosystemToken ||
                                          current.core?.userKey ||
                                          current.core?.socket?.accessToken ||
                                          ""
                                  ) ||
                                  readTrimmedControlValue(coreUserKey, current.core?.userKey || "") ||
                                  readTrimmedControlValue(
                                      coreSocketAccessToken,
                                      current.core?.socket?.accessToken || current.core?.socket?.airpadAuthToken || ""
                                  );
                              return eco;
                          })(),
                          encrypt: readCheckboxValue(coreEncrypt, Boolean(current.core?.encrypt)),
                          preferBackendSync: readCheckboxValue(corePreferBackendSync, (current.core?.preferBackendSync ?? true) !== false),
                          appClientId: readTrimmedControlValue(coreAppClientId, current.core?.appClientId || ""),
                          allowInsecureTls: readCheckboxValue(coreAllowInsecureTls, Boolean(current.core?.allowInsecureTls)),
                          useCoreIdentityForAirPad: readCheckboxValue(coreUseCoreIdentityAirpad, (current.core?.useCoreIdentityForAirPad ?? true) !== false),
                          socket: (() => {
                              const prev = { ...(current.core?.socket || {}) };
                              delete (prev as { airpadAuthToken?: string }).airpadAuthToken;
                              const eco =
                                  readTrimmedControlValue(
                                      coreEcosystemToken,
                                      current.core?.ecosystemToken ||
                                          current.core?.userKey ||
                                          current.core?.socket?.accessToken ||
                                          ""
                                  ) ||
                                  readTrimmedControlValue(coreUserKey, current.core?.userKey || "") ||
                                  readTrimmedControlValue(
                                      coreSocketAccessToken,
                                      current.core?.socket?.accessToken || current.core?.socket?.airpadAuthToken || ""
                                  );
                              return {
                                  ...prev,
                                  accessToken: eco,
                                  routeTarget: readTrimmedControlValue(coreSocketRouteTarget, current.core?.socket?.routeTarget || ""),
                                  selfId: "",
                                  clientAccessToken: readTrimmedControlValue(
                                      coreSocketClientAccessToken,
                                      current.core?.socket?.clientAccessToken || ""
                                  ),
                                  allowAccessTokenWithoutUserKey: readCheckboxValue(
                                      coreSocketAllowAccessWithoutUserKey,
                                      Boolean(current.core?.socket?.allowAccessTokenWithoutUserKey)
                                  ),
                              };
                          })(),
                          admin: {
                              ...(current.core?.admin || {}),
                              httpsOrigin: readTrimmedControlValue(coreAdminHttps, current.core?.admin?.httpsOrigin || ""),
                              httpOrigin: readTrimmedControlValue(coreAdminHttp, current.core?.admin?.httpOrigin || ""),
                              path: readTrimmedControlValue(coreAdminPath, current.core?.admin?.path || "/") || "/",
                          },
                          ops: {
                              ...(current.core?.ops || {}),
                              allowUnencrypted: readCheckboxValue(coreOpsAllowUnencrypted, Boolean(current.core?.ops?.allowUnencrypted)),
                          },
                      }
                    : { ...(current.core || {}) },
                shell: hasPanel("server")
                    ? {
                          ...(current.shell || {}),
                          maintainHubSocketConnection: readCheckboxValue(shellMaintainHubSocket, Boolean(current.shell?.maintainHubSocketConnection)),
                          clipboardBroadcastTargets: readTrimmedControlValue(
                              shellClipboardBroadcastTargets,
                              current.shell?.clipboardBroadcastTargets || ""
                          ),
                          pushLocalClipboardToLan: readCheckboxValue(
                              shellPushLocalClipboard,
                              Boolean(current.shell?.pushLocalClipboardToLan)
                          ),
                          clipboardPushIntervalMs: (() => {
                              const raw = shellClipboardPushIntervalMs?.value;
                              const n = parseNumberOrDefault(raw, current.shell?.clipboardPushIntervalMs ?? 2000);
                              return Math.min(60000, Math.max(800, Math.round(n)));
                          })(),
                          enableRemoteClipboardBridge: readCheckboxValue(shellClipboard, (current.shell?.enableRemoteClipboardBridge ?? true) !== false),
                          acceptInboundClipboardData: readCheckboxValue(
                              shellAcceptInboundClipboard,
                              (current.shell?.acceptInboundClipboardData ?? true) !== false
                          ),
                          clipboardInboundAllowIds: readTrimmedControlValue(
                              shellClipboardInboundAllowIds,
                              current.shell?.clipboardInboundAllowIds || ""
                          ),
                          accessTokenBypassesClipboardAllowlist: readCheckboxValue(
                              shellAccessTokenBypassClipboardAllow,
                              Boolean(current.shell?.accessTokenBypassesClipboardAllowlist)
                          ),
                          clipboardShareDestinationIds: readTrimmedControlValue(
                              shellClipboardShareDestIds,
                              current.shell?.clipboardShareDestinationIds || ""
                          ),
                          applyRemoteClipboardToDevice: readCheckboxValue(shellApplyRemoteDevice, (current.shell?.applyRemoteClipboardToDevice ?? true) !== false),
                          acceptContactsBridgeData: readCheckboxValue(
                              shellAcceptContactsBridge,
                              Boolean(current.shell?.acceptContactsBridgeData)
                          ),
                          acceptSmsBridgeData: readCheckboxValue(shellAcceptSmsBridge, Boolean(current.shell?.acceptSmsBridgeData)),
                          enableNativeSms: readCheckboxValue(shellSms, (current.shell?.enableNativeSms ?? true) !== false),
                          enableNativeContacts: readCheckboxValue(shellContacts, (current.shell?.enableNativeContacts ?? true) !== false),
                      }
                    : { ...(current.shell || {}) },
                appearance:
                    hasPanel("appearance") || hasPanel("markdown")
                        ? {
                              theme: (theme?.value as any) || "auto",
                              fontSize: (fontSize?.value as any) || "medium",
                              markdown: {
                                  preset: (markdownPreset?.value as any) || "default",
                                  fontFamily: (markdownFontFamily?.value as any) || "system",
                                  fontSizePx: parseNumberOrDefault(markdownFontSizePx?.value, 16),
                                  lineHeight: parseFloatInRange(markdownLineHeight?.value, 1.7, 1.1, 2.2),
                                  contentMaxWidthPx: parseNumberOrDefault(markdownContentMaxWidthPx?.value, 860),
                                  printScale: parseFloatInRange(markdownPrintScale?.value, 1, 0.5, 1.5),
                                  page: {
                                      size: (markdownPageSize?.value as any) || "auto",
                                      orientation: (markdownPageOrientation?.value as any) || "portrait",
                                      marginMm: parseNumberOrDefault(markdownPageMarginMm?.value, 12),
                                  },
                                  modules: {
                                      typography: (markdownModuleTypography?.checked ?? true) !== false,
                                      lists: (markdownModuleLists?.checked ?? true) !== false,
                                      tables: (markdownModuleTables?.checked ?? true) !== false,
                                      codeBlocks: (markdownModuleCodeBlocks?.checked ?? true) !== false,
                                      blockquotes: (markdownModuleBlockquotes?.checked ?? true) !== false,
                                      media: (markdownModuleMedia?.checked ?? true) !== false,
                                      printBreaks: (markdownModulePrintBreaks?.checked ?? true) !== false,
                                  },
                                  plugins: {
                                      smartTypography: Boolean(markdownPluginSmartTypography?.checked),
                                      softBreaksAsBr: Boolean(markdownPluginSoftBreaks?.checked),
                                      externalLinksNewTab: (markdownPluginExternalLinks?.checked ?? true) !== false
                                  },
                                  customCss: markdownCustomCss?.value || "",
                                  printCss: markdownPrintCss?.value || "",
                                  extensions: parsedMarkdownExtensions || []
                              }
                          }
                        : (current.appearance || {}),
            };
            // Fold contributed panels (reader/workcenter/airpad/extensions) into
            // the settings object before persisting.
            collectContributions(root, next as AppSettings, contributionCtx);
            await resolveCwspSettingsBeforeSave(next as AppSettings);
            const settingsToSave = next as AppSettings;
            const onNative =
                contributionCtx.surface === "capacitor" || contributionCtx.surface === "native";
            // WHY: Do not block Android permission dialogs on IDB write + native settings:patch.
            const permPromise = onNative
                ? requestCapacitorSettingsPermissionsAfterSave(settingsToSave).catch((e) => {
                      console.warn("[Settings] native permission flow failed:", e);
                      return { lines: [] as string[], results: [] };
                  })
                : Promise.resolve({ lines: [] as string[], results: [] });

            const saved = await saveSettings(settingsToSave);
            if (!saved) {
                setNote("Settings save returned no data.", { tone: "err" });
                return;
            }
            applyContributions(root, saved, contributionCtx);

            const report = getLastSettingsSaveReport();
            const permReport = await permPromise;
            const permLines = permReport.lines;
            const permDenied = permReport.results.some((r) => r.granted === false);

            void import("shared/transport/hub-socket-boot").then((m) => m.applyHubSocketFromSettings(saved));
            // WHY: identity (clientId / token / endpoint) must re-handshake; hub boot may skip connectWS
            // when maintainHubSocketConnection is off (default on Capacitor).
            void import("shared/transport/websocket").then((m) => {
                if (typeof m.reconnectTransportAfterLifecycleResume === "function") {
                    m.reconnectTransportAfterLifecycleResume("settings-save");
                }
            }).catch(() => {
                /* optional when WS module not loaded */
            });
            applyTheme(saved);
            opts.onTheme?.((saved.appearance?.theme as any) || "auto");

            const parts: string[] = ["Saved locally"];
            if (report.nativeSynced === true) {
                parts.push("synced to Android");
            } else if (report.nativeSynced === false && !permDenied) {
                // WHY: Local IDB + permissions OK — avoid red footer when native patch is best-effort.
                console.warn("[Settings] native settings patch:", report.nativeError || "not confirmed");
            } else if (report.nativeSynced === false) {
                parts.push(`native sync failed${report.nativeError ? `: ${report.nativeError}` : ""}`);
            }
            if (permLines.length) parts.push(...permLines);

            let tone: "ok" | "warn" | "err" = "ok";
            if (permDenied) tone = "warn";
            setNote(parts.join(" · "), { tone });
        })().catch((err) => setNote(String(err), { tone: "err" }));
    });

    if (opts.isExtension) {
        if (extSection) extSection.hidden = false;
        if (extTab) extTab.hidden = false;
        const extNote = H`<div class="ext-note">Extension mode: settings are stored in <code>chrome.storage.local</code>.</div>` as HTMLElement;
        root.append(extNote);
    }

    const initialTab = resolveInitialTab(opts.initialTab);
    switchSettingsTab(initialTab);
    if (!root.querySelector(`[data-tab-panel="${initialTab}"]:not([hidden])`)) {
        const firstPanel = root.querySelector<HTMLElement>("[data-tab-panel]");
        if (firstPanel) switchSettingsTab(firstPanel.getAttribute("data-tab-panel") || initialTab);
    }
    syncCustomModelVisibility();

    const panelCount = root.querySelectorAll("[data-tab-panel]").length;
    const tabCount = root.querySelectorAll('[data-action="switch-settings-tab"][data-tab]').length;
    try {
        const dbg = (globalThis as { __CWSP_FRONTEND_DEBUG__?: { log: (...a: unknown[]) => void } })
            .__CWSP_FRONTEND_DEBUG__;
        dbg?.log(
            "settings-view",
            "info",
            `mounted profile=${settingsProfile} surface=${contributionCtx.surface} tabs=${tabCount} panels=${panelCount} active=${root.querySelector("[data-settings-tabs]")?.getAttribute("data-active-tab")}`
        );
    } catch {
        /* ignore */
    }
    if (panelCount === 0) {
        const empty = document.createElement("section");
        empty.className = "card settings-tab-panel";
        empty.setAttribute("data-tab-panel", "cwsp");
        empty.innerHTML =
            "<h3>CWSP</h3><p class=\"field-hint\">Settings panels failed to mount. Check logcat tag CwspWebView or __CWSP_FRONTEND_DEBUG__.tail().</p>";
        root.querySelector(".settings-screen__body")?.appendChild(empty);
        switchSettingsTab("cwsp");
    }

    root.addEventListener("cwsp-settings-resync", () => {
        attachSettingsInlineStylesWhenConnected(root);
        switchSettingsTab(root.querySelector("[data-settings-tabs]")?.getAttribute("data-active-tab") || initialTab);
    });

    return root;
};
