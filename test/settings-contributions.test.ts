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
