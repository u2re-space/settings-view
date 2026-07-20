/*
 * Filename: settings-styles-attach.ts
 * FullPath: modules/views/settings-view/src/ts/settings-styles-attach.ts
 * Change date and time: 13.40.00_20.07.2026
 * Reason for changes: Critical CSS must not force dark fg/bg — broke light theme contrast.
 */

// @ts-ignore — Vite inline SCSS
import settingsStyles from "../scss/Settings.scss?inline";

const STYLE_MARKER = "data-settings-view-css";

/** WHY: Inlined `@layer` loses to unlayered shell CSS in Capacitor WebView — unwrap for paint. */
const normalizeInlineSettingsCss = (raw: string): string => {
    let css = String(raw || "").trim();
    const layered = css.match(/^@layer\s+settings-view\s*\{([\s\S]*)\}\s*$/);
    if (layered) css = layered[1].trim();
    return css;
};

/**
 * Layout-only fallback when SCSS inline import is empty.
 * INVARIANT: no hardcoded dark `color`/`background` — Settings.scss owns theme via `--sv-*`.
 */
const CRITICAL_SETTINGS_CSS = `
.view-settings{display:grid!important;grid-template-rows:auto minmax(0,1fr) auto!important;block-size:100%!important;min-block-size:0!important;overflow:hidden!important}
.view-settings .settings-screen__body{display:flex!important;flex-direction:column!important;min-block-size:0!important;overflow:auto!important;-webkit-overflow-scrolling:touch}
.view-settings [data-tab-panel]:not([hidden]){display:flex!important;flex-direction:column!important;gap:.75rem!important}
.view-settings [data-tab-panel][hidden]{display:none!important}
.view-settings .field,.view-settings .form-input,.view-settings .form-select{pointer-events:auto!important}
`;

/** Attach Settings.scss to a `.view-settings` host (works in light DOM + open shadow roots). */
export const attachSettingsInlineStyles = (host: HTMLElement | null | undefined): void => {
    if (!host?.classList?.contains("view-settings")) return;
    if (host.querySelector(`style[${STYLE_MARKER}]`)) return;

    let css = normalizeInlineSettingsCss(String(settingsStyles || ""));
    // WHY: only use critical layout CSS as fallback — prepending dark !important broke light theme.
    if (!css.trim()) css = CRITICAL_SETTINGS_CSS;

    const style = document.createElement("style");
    style.setAttribute(STYLE_MARKER, "");
    style.textContent = css;
    host.insertBefore(style, host.firstChild);
};

/** Retry until the host is connected (Capacitor shell attaches views async). */
export const attachSettingsInlineStylesWhenConnected = (host: HTMLElement | null | undefined): void => {
    if (!host) return;
    const tryAttach = (): void => {
        if (!host.isConnected) {
            requestAnimationFrame(tryAttach);
            return;
        }
        attachSettingsInlineStyles(host);
    };
    if (host.isConnected) attachSettingsInlineStyles(host);
    else requestAnimationFrame(tryAttach);
};
