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
    mountContributions,
    registerWorkcenterSettingsContribution
} from "../src/ts/settings-contributions.ts";
import {
    allowProcessWebLaunchQueue,
    allowProcessWebShareLaunch
} from "../../../projects/subsystem/src/other/config/process-ingress";

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

test("apk-update is a dedicated tab on the launcher shell", (t) => {
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

    assert.ok(root.querySelector('[data-tab="apk-update"]'), "launcher keeps Updates tab");
    assert.equal(appearance.querySelector('[data-contribution="apk-update"]'), null);
    assert.ok(root.querySelector('[data-tab-panel="apk-update"]'));
});

test("apk-update is a dedicated tab on launcher Transfer section", (t) => {
    const prev = document.documentElement.dataset.cwspSku;
    document.documentElement.dataset.cwspSku = "launcher";
    t.after(() => {
        if (prev) document.documentElement.dataset.cwspSku = prev;
        else delete document.documentElement.dataset.cwspSku;
    });
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
    const cwsp = document.createElement("section");
    cwsp.setAttribute("data-tab-panel", "cwsp");
    root.querySelector(".settings-screen__body")!.append(cwsp);

    mountContributions(root, { surface: "capacitor", sku: "transfer" });

    assert.ok(root.querySelector('[data-tab="apk-update"]'), "launcher Transfer keeps Updates tab");
    assert.equal(cwsp.querySelector('[data-contribution="apk-update"]'), null);
});

test("apk-update stays a tab on the transfer APK", (t) => {
    const prev = document.documentElement.dataset.cwspSku;
    document.documentElement.dataset.cwspSku = "transfer";
    t.after(() => {
        if (prev) document.documentElement.dataset.cwspSku = prev;
        else delete document.documentElement.dataset.cwspSku;
    });
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
    const cwsp = document.createElement("section");
    cwsp.setAttribute("data-tab-panel", "cwsp");
    root.querySelector(".settings-screen__body")!.append(appearance, cwsp);

    mountContributions(root, { surface: "capacitor", sku: "transfer" });

    assert.ok(root.querySelector('[data-tab="apk-update"]'), "transfer APK keeps Updates tab");
    assert.equal(appearance.querySelector('[data-contribution="apk-update"]'), null);
    assert.equal(cwsp.querySelector('[data-contribution="apk-update"]'), null);
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

test("process SKU shows Process actions for attach and AI clipboard-write", (t) => {
    const dispose = registerWorkcenterSettingsContribution();
    t.after(dispose);
    const ctx = { surface: "web" as const, sku: "process" as const };
    assert.ok(contributedTabIds(ctx).includes("workcenter"));
    const root = createSettingsRoot();
    mountContributions(root, ctx);
    const panel = root.querySelector("[data-tab-panel=\"workcenter\"]");
    assert.ok(panel, "Process panel must mount on the process SKU");
    const text = panel?.textContent || "";
    assert.match(text, /Open as attachment in chat/);
    assert.match(text, /Run AI and write to clipboard/);
    assert.match(text, /process\.u2re\.space/);
    assert.match(text, /ai\.u2re\.space/);
});

test("Process PWA is not a Share Target; Launch Queue stays on", () => {
    const html = document.documentElement;
    html.dataset.cwspSku = "process";
    assert.equal(allowProcessWebShareLaunch(), false);
    assert.equal(allowProcessWebLaunchQueue(), true);
    delete html.dataset.cwspSku;
    assert.equal(allowProcessWebShareLaunch(), true);
    assert.equal(allowProcessWebLaunchQueue(), true);
});
