/**
 * Pass-II Settings contract tests — contribution registry integration.
 *
 * These tests exercise the real settings-view contribution glue together with
 * the canonical registry: registration/disposal, surface/view filtering, and
 * idempotent DOM mounting. The focused runner provides the same settings-view
 * aliases as Vite and restricts enabled views to `network,settings`.
 */
import assert from "node:assert/strict";
import test from "node:test";

import "./dom-shim.ts";
import {
    registerSettingsContribution,
    type SettingsContribution
} from "com/config/SettingsContributions";
import {
    contributedTabIds,
    mountContributions
} from "../src/ts/settings-contributions.ts";

const webContext = { surface: "web" as const };

const contribution = (
    id: string,
    overrides: Partial<SettingsContribution> = {}
): SettingsContribution => ({
    id,
    label: id,
    render: () => document.createElement("div"),
    ...overrides
});

const createSettingsRoot = (): HTMLElement => {
    const root = document.createElement("div");
    root.innerHTML = `
        <div data-settings-tabs>
            <button data-extension-tab data-action="switch-settings-tab" data-tab="extension"></button>
        </div>
        <main class="settings-screen__body"></main>
    `;
    return root;
};

test("registerSettingsContribution exposes an entry and its disposer removes it", (t) => {
    const id = "pass-ii-registration";
    const dispose = registerSettingsContribution(contribution(id));
    t.after(dispose);

    assert.ok(contributedTabIds(webContext).includes(id));

    dispose();
    assert.equal(contributedTabIds(webContext).includes(id), false);
});

test("contributedTabIds applies surface, exclusion, and enabled-view filters", (t) => {
    const disposers = [
        registerSettingsContribution(contribution("pass-ii-web", { surfaces: ["web"] })),
        registerSettingsContribution(contribution("pass-ii-crx", { surfaces: ["crx"] })),
        registerSettingsContribution(contribution("pass-ii-excluded-web", { excludeSurfaces: ["web"] })),
        registerSettingsContribution(contribution("pass-ii-network", { requiresView: "network" })),
        registerSettingsContribution(contribution("pass-ii-workcenter", { requiresView: "workcenter" }))
    ];
    t.after(() => disposers.forEach((dispose) => dispose()));

    const ids = contributedTabIds(webContext);
    assert.ok(ids.includes("pass-ii-web"), "matching surface must remain visible");
    assert.ok(ids.includes("pass-ii-network"), "enabled required view must remain visible");
    assert.equal(ids.includes("pass-ii-crx"), false, "non-matching surface must be filtered");
    assert.equal(ids.includes("pass-ii-excluded-web"), false, "excluded surface must be filtered");
    assert.equal(ids.includes("pass-ii-workcenter"), false, "disabled required view must be filtered");
});

test("mountContributions does not render contributions filtered from the surface", (t) => {
    let renderCalls = 0;
    const id = "pass-ii-hidden-mount";
    const dispose = registerSettingsContribution(contribution(id, {
        surfaces: ["crx"],
        render: () => {
            renderCalls += 1;
            return document.createElement("div");
        }
    }));
    t.after(dispose);
    const root = createSettingsRoot();

    mountContributions(root, webContext);

    assert.equal(renderCalls, 0);
    assert.equal(root.querySelector(`[data-tab="${id}"]`), null);
    assert.equal(root.querySelector(`[data-tab-panel="${id}"]`), null);
});

test("workspace contribution embeds into Appearance without a nested tab panel", (t) => {
    const dispose = registerSettingsContribution(contribution("workspace", {
        render: () => {
            const panel = document.createElement("section");
            panel.className = "card settings-tab-panel";
            panel.setAttribute("data-tab-panel", "workspace");
            panel.hidden = true;
            const field = document.createElement("label");
            field.setAttribute("data-settings-field", "speedDialColumns");
            field.textContent = "Columns";
            panel.append(field);
            return panel;
        }
    }));
    t.after(dispose);
    const root = createSettingsRoot();
    const appearance = document.createElement("section");
    appearance.className = "card settings-tab-panel is-active";
    appearance.setAttribute("data-tab-panel", "appearance");
    root.querySelector(".settings-screen__body")!.append(appearance);

    mountContributions(root, webContext);

    assert.equal(root.querySelector('[data-tab-panel="workspace"]'), null);
    assert.equal(root.querySelector('[data-contributed-tab][data-tab="workspace"]'), null);
    const wrap = root.querySelector<HTMLElement>('[data-contribution="workspace"]');
    assert.ok(wrap, "workspace section must mount inside Appearance");
    assert.equal(wrap.hidden, false);
    assert.ok(appearance.contains(wrap));
    assert.ok(wrap.querySelector('[data-settings-field="speedDialColumns"]'));
});

test("apk-update embeds into Appearance on launcher environment profile", (t) => {
    const dispose = registerSettingsContribution(contribution("apk-update", {
        surfaces: ["capacitor", "native", "environment"],
        render: () => {
            const panel = document.createElement("section");
            panel.setAttribute("data-tab-panel", "apk-update");
            const btn = document.createElement("button");
            btn.setAttribute("data-action", "apk-update-check");
            panel.append(btn);
            return panel;
        }
    }));
    t.after(dispose);
    const root = createSettingsRoot();
    const appearance = document.createElement("section");
    appearance.setAttribute("data-tab-panel", "appearance");
    root.querySelector(".settings-screen__body")!.append(appearance);

    mountContributions(root, { surface: "capacitor", sku: "launcher" });

    assert.equal(root.querySelector('[data-tab="apk-update"]'), null);
    const wrap = root.querySelector<HTMLElement>('[data-contribution="apk-update"]');
    assert.ok(wrap, "Updates block must mount inside Appearance");
    assert.ok(appearance.contains(wrap));
    assert.ok(wrap.querySelector('[data-action="apk-update-check"]'));
});

test("mountContributions is idempotent for a registered visible contribution", (t) => {
    let renderCalls = 0;
    const id = "pass-ii-idempotent-mount";
    const dispose = registerSettingsContribution(contribution(id, {
        render: () => {
            renderCalls += 1;
            const content = document.createElement("div");
            content.textContent = "mounted once";
            return content;
        }
    }));
    t.after(dispose);
    const root = createSettingsRoot();

    mountContributions(root, webContext);
    mountContributions(root, webContext);

    assert.equal(renderCalls, 1);
    assert.equal(root.querySelectorAll(`[data-contributed-tab][data-tab="${id}"]`).length, 1);
    assert.equal(root.querySelectorAll(`[data-contributed-panel][data-tab-panel="${id}"]`).length, 1);
});
