import { H } from "@fest-lib/lure";

export const createAppearanceSection = () => H`<section class="card settings-tab-panel" data-tab-panel="appearance">
      <h3>Appearance</h3>
      <p class="field-hint">Theme, workspaces, and Speed Dial grid live on this page.</p>
      <label class="field">
        <span>Theme</span>
        <select class="form-select" data-field="appearance.theme">
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="auto">Auto</option>
        </select>
        <span>Font Size</span>
        <select class="form-select" data-field="appearance.fontSize">
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </label>
    </section>` as HTMLElement;
