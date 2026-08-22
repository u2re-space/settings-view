/*
 * Filename: SettingsAppearance.ts
 * FullPath: modules/views/settings-view/src/sections/SettingsAppearance.ts
 * Change date and time: 16.20.00_22.08.2026
 * Reason for changes: Color-source select (wallpaper / Material You / OS / Speed Dial) + custom hue.
 */
import { H } from "@fest-lib/lure";
import {
    FALLBACK_BASE_COLOR,
    defaultColorSource,
    isAppearanceColorSource,
    normalizeHexColor,
    type AppearanceColorSource
} from "core/utils/appearance-base-color";

const SWATCHES: { hex: string; label: string }[] = [
    { hex: FALLBACK_BASE_COLOR, label: "Cyan" },
    { hex: "#4f8eb5", label: "Steel" },
    { hex: "#64748b", label: "Slate" },
    { hex: "#3b82f6", label: "Blue" },
    { hex: "#6366f1", label: "Indigo" },
    { hex: "#14b8a6", label: "Teal" },
    { hex: "#22c55e", label: "Green" },
    { hex: "#f59e0b", label: "Amber" },
    { hex: "#ef4444", label: "Red" },
    { hex: "#ec4899", label: "Pink" },
    { hex: "#8b5cf6", label: "Violet" }
];

const SOURCE_LABEL: Record<Exclude<AppearanceColorSource, "auto">, string> = {
    wallpaper: "From wallpaper",
    "material-you": "From Material You",
    "system-wallpaper": "From system wallpaper",
    "speed-dial": "From Speed Dial wallpaper",
    custom: "Custom hue"
};

const sourceOptionLabel = (value: AppearanceColorSource, platformDefault: AppearanceColorSource): string => {
    if (value === "auto") return `Auto (${SOURCE_LABEL[platformDefault]})`;
    const base = SOURCE_LABEL[value];
    return value === platformDefault ? `${base} (default)` : base;
};

export const createAppearanceSection = () => {
    const platformDefault = defaultColorSource();
    return H`<section class="card settings-tab-panel" data-tab-panel="appearance">
      <h3>Appearance</h3>
      <p class="field-hint">Theme, type size, and where the adaptive base color comes from. Auto picks the default for this app.</p>
      <label class="field">
        <span>Theme</span>
        <select class="form-select" data-field="appearance.theme">
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="auto">Auto</option>
        </select>
      </label>
      <label class="field">
        <span>Font Size</span>
        <select class="form-select" data-field="appearance.fontSize">
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </label>
      <div class="field appearance-base-color" data-appearance-color>
        <label class="field">
          <span>Base color</span>
          <select class="form-select" data-field="appearance.colorSource">
            <option value="auto">${sourceOptionLabel("auto", platformDefault)}</option>
            <option value="wallpaper">${sourceOptionLabel("wallpaper", platformDefault)}</option>
            <option value="material-you">${sourceOptionLabel("material-you", platformDefault)}</option>
            <option value="system-wallpaper">${sourceOptionLabel("system-wallpaper", platformDefault)}</option>
            <option value="speed-dial">${sourceOptionLabel("speed-dial", platformDefault)}</option>
            <option value="custom">${sourceOptionLabel("custom", platformDefault)}</option>
          </select>
        </label>
        <span class="field-hint" data-appearance-source-hint></span>
        <div class="appearance-custom" data-appearance-custom hidden>
          <span>Accent / hue</span>
          <div class="appearance-swatches" role="listbox" aria-label="Accent color">
            ${SWATCHES.map(
                (s) =>
                    H`<button type="button" class="appearance-swatch" data-color="${s.hex}" title="${s.label}" aria-label="${s.label}" style="background:${s.hex}"></button>`
            )}
          </div>
          <label class="appearance-hue">
            <span>Hue</span>
            <input class="appearance-hue__range" type="range" min="0" max="360" value="200" data-field="appearance.hue" />
          </label>
          <input class="form-input appearance-color-input" type="color" data-field="appearance.color" value="${FALLBACK_BASE_COLOR}" />
        </div>
      </div>
    </section>` as HTMLElement;
};

const SOURCE_HINT: Record<AppearanceColorSource, string> = {
    auto: "Uses this app’s default source.",
    wallpaper: "Dominant color from the launcher / environment wallpaper.",
    "material-you": "Android Material You system accent.",
    "system-wallpaper": "Dominant color from the OS desktop wallpaper.",
    "speed-dial": "Dominant color from the Speed Dial wallpaper.",
    custom: "Manual swatch, hue, or color picker."
};

const hueFromHex = (hex: string): number => {
    const n = normalizeHexColor(hex);
    if (!n) return 200;
    const r = parseInt(n.slice(1, 3), 16) / 255;
    const g = parseInt(n.slice(3, 5), 16) / 255;
    const b = parseInt(n.slice(5, 7), 16) / 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const d = max - min;
    if (d < 1e-4) return 200;
    let h = 0;
    if (max === r) h = ((g - b) / d) % 6;
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h = Math.round(h * 60);
    return h < 0 ? h + 360 : h;
};

export const hexFromHue = (hue: number): string => {
    const h = ((Number(hue) % 360) + 360) % 360;
    const s = 0.42;
    const l = 0.57;
    const a = s * Math.min(l, 1 - l);
    const f = (n: number) => {
        const k = (n + h / 30) % 12;
        const c = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * c)
            .toString(16)
            .padStart(2, "0");
    };
    return `#${f(0)}${f(8)}${f(4)}`;
};

export const readAppearanceColorSource = (root: HTMLElement): AppearanceColorSource => {
    const sel = root.querySelector('[data-field="appearance.colorSource"]') as HTMLSelectElement | null;
    return isAppearanceColorSource(sel?.value) ? sel.value : "auto";
};

export const syncAppearanceColorSource = (root: HTMLElement, source: string): void => {
    const sel = root.querySelector('[data-field="appearance.colorSource"]') as HTMLSelectElement | null;
    const custom = root.querySelector("[data-appearance-custom]") as HTMLElement | null;
    const hint = root.querySelector("[data-appearance-source-hint]") as HTMLElement | null;
    const next = isAppearanceColorSource(source) ? source : "auto";
    if (sel) sel.value = next;
    if (custom) custom.hidden = next !== "custom";
    if (hint) hint.textContent = SOURCE_HINT[next];
};

export const syncAppearanceColorControls = (root: HTMLElement, color: string): void => {
    const input = root.querySelector('[data-field="appearance.color"]') as HTMLInputElement | null;
    const hue = root.querySelector('[data-field="appearance.hue"]') as HTMLInputElement | null;
    const hex = normalizeHexColor(color) || FALLBACK_BASE_COLOR;
    if (input) input.value = hex;
    if (hue) hue.value = String(hueFromHex(hex));
    root.querySelectorAll<HTMLButtonElement>(".appearance-swatch").forEach((btn) => {
        btn.setAttribute("aria-selected", normalizeHexColor(btn.dataset.color) === hex ? "true" : "false");
    });
};

export const readAppearanceColor = (root: HTMLElement): string => {
    const input = root.querySelector('[data-field="appearance.color"]') as HTMLInputElement | null;
    return normalizeHexColor(input?.value);
};
