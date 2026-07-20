/*
 * Filename: SettingsExtension.ts
 * FullPath: modules/views/settings-view/src/sections/SettingsExtension.ts
 * Change date and time: 10.20.00_20.07.2026
 * Reason for changes: Fallback Extension panel — shell.localHubUrl (≠ CWSP Relay).
 */
import { H } from "fest/lure";

export const createExtensionSection = () => H`<section class="card settings-tab-panel" data-tab-panel="extension" data-section="extension" hidden>
      <h3>Extension</h3>
      <label class="field">
        <span>Local hub URL (Neutralino / desk backend)</span>
        <input class="form-input" type="text" inputmode="url" autocomplete="off" placeholder="https://127.0.0.1:8434/" data-field="shell.localHubUrl" />
      </label>
      <p class="field-hint">Chrome wire hub for L-110-crx only. Independent from CWSP → Relay / gateway.</p>
      <label class="field checkbox form-checkbox">
        <input type="checkbox" data-field="core.ntpEnabled" />
        <span>Enable New Tab Page (offline Basic)</span>
      </label>
    </section>` as HTMLElement;
