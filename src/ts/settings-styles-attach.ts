/*
 * Filename: settings-styles-attach.ts
 * FullPath: modules/views/settings-view/src/ts/settings-styles-attach.ts
 * Change date and time: 12.50.00_03.08.2026
 * Reason for changes: Critical CSS keeps settings tab strip full-width (was collapsing to 0px).
 */

// @ts-ignore — Vite inline SCSS
import settingsStyles from "../scss/Settings.scss?inline";

const STYLE_MARKER = "data-settings-view-css";

/**
 * WHY: Inlined `@layer` loses to unlayered shell CSS in Capacitor / ui-window hosts — unwrap for paint.
 * COMPAT: Vite often prefixes `@charset` and the SCSS file may start with a block comment, so a
 * strict `^@layer` match never fired and tab/panel rules stayed layered (and lost).
 */
const normalizeInlineSettingsCss = (raw: string): string => {
    let css = String(raw || "").trim();
    css = css.replace(/^(@charset\s+[^;]+;\s*)+/i, "");
    // Strip leading block comments (and any leftover whitespace) until @layer or other rules.
    for (let i = 0; i < 8; i++) {
        const next = css.replace(/^\/\*[\s\S]*?\*\/\s*/, "");
        if (next === css) break;
        css = next.trim();
    }
    const layered = css.match(/^@layer\s+settings-view\s*\{([\s\S]*)\}\s*$/);
    if (layered) css = layered[1].trim();
    return css;
};

/**
 * Layout-only fallback when SCSS inline import is empty.
 * INVARIANT: no hardcoded dark `color`/`background` — Settings.scss owns theme via `--sv-*`.
 * INVARIANT: only `.is-active` tab panels paint (`.card { display:flex }` must not reveal siblings).
 */
const CRITICAL_SETTINGS_CSS = `
.view-settings{display:grid!important;grid-template-rows:auto minmax(0,1fr) auto!important;grid-template-columns:minmax(0,1fr)!important;inline-size:100%!important;block-size:100%!important;min-block-size:0!important;overflow:hidden!important;pointer-events:auto!important;container-type:inline-size}
.view-settings .settings-screen__top{display:flex!important;flex-direction:column!important;align-items:stretch!important;inline-size:100%!important;max-inline-size:100%!important;min-inline-size:0!important;pointer-events:auto!important}
.view-settings .settings-tab-actions{display:flex!important;flex-wrap:nowrap!important;inline-size:100%!important;max-inline-size:100%!important;min-inline-size:0!important;overflow-x:auto!important;overflow-y:hidden!important;pointer-events:auto!important}
.view-settings .settings-screen__body{display:flex!important;flex-direction:column!important;min-block-size:0!important;overflow:auto!important;-webkit-overflow-scrolling:touch;pointer-events:auto!important}
.view-settings .settings-screen__body>[data-tab-panel]:not(.is-active),.view-settings .settings-screen__body>[data-tab-panel][hidden]{display:none!important}
.view-settings .settings-screen__body>[data-tab-panel].is-active:not([hidden]){display:flex!important;flex-direction:column!important;gap:.75rem!important;pointer-events:auto!important}
.view-settings .field,.view-settings .form-input,.view-settings .form-select,.view-settings .btn,.view-settings .card{pointer-events:auto!important}
.view-settings .settings-tab-btn{pointer-events:auto!important;cursor:pointer!important;flex:0 0 auto!important}
`;

/** Attach Settings.scss once on `document` (not per host — in-host inject forced a full recalc). */
export const attachSettingsInlineStyles = (host: HTMLElement | null | undefined): void => {
    if (host && !host.classList?.contains("view-settings")) return;
    if (typeof document === "undefined") return;
    if (document.head?.querySelector(`style[${STYLE_MARKER}]`)) return;

    let css = normalizeInlineSettingsCss(String(settingsStyles || ""));
    // WHY: only use critical layout CSS as fallback — prepending dark !important broke light theme.
    if (!css.trim()) css = CRITICAL_SETTINGS_CSS;

    const style = document.createElement("style");
    style.setAttribute(STYLE_MARKER, "");
    style.textContent = css;
    document.head?.appendChild(style);
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
