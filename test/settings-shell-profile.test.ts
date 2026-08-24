/**
 * Pass-II Settings contract tests — contribution pruning / profile invariants.
 *
 * WHY: settings-view re-exports the shell-profile helpers
 * (`resolveSettingsShellProfile`, `pruneBuiltInSettingsTabs`,
 * `defaultSettingsTabForProfile`, `hasBuiltInSettingsPanel`) which decide which
 * built-in tabs survive in each host variant. These tests pin the invariants
 * that this layer must keep stable across edits:
 *   - profile selection by surface (crx/extension → extension; capacitor/native
 *     without desktop views → cwsp-mobile; otherwise full)
 *   - pruneBuiltInSettingsTabs mutates cwsp-mobile and extension profiles
 *   - default tab per profile
 *   - hasBuiltInSettingsPanel is a pure DOM query
 *
 * NOTE: the profile module itself lives in the shared subsystem layer and is
 * NOT edited here — only asserted. The focused runner sets
 * `VITE_ENABLED_VIEWS=network,settings` before this module is evaluated so the
 * real cwsp-mobile branch is deterministic.
 */
import assert from "node:assert/strict";
import test, { beforeEach } from "node:test";

import "./dom-shim.ts";
import {
    resolveSettingsShellProfile,
    pruneBuiltInSettingsTabs,
    defaultSettingsTabForProfile,
    hasBuiltInSettingsPanel,
    type SettingsShellProfile
} from "../../../projects/subsystem/src/other/config/settings/settings-shell-profile.ts";

type Ctx = {
    isExtension?: boolean;
    surface: "web" | "crx" | "capacitor" | "native" | "unknown" | "environment" | "markdown";
    sku?: "launcher" | "transfer" | "explorer" | "document" | "process" | "crx" | "";
};

const buildRoot = (panels: string[]): HTMLElement => {
    const root = document.createElement("div");
    const tabList = document.createElement("div");
    tabList.setAttribute("data-settings-tabs", "");
    const body = document.createElement("div");
    body.className = "settings-screen__body";
    for (const id of panels) {
        const tab = document.createElement("button");
        tab.setAttribute("data-action", "switch-settings-tab");
        tab.setAttribute("data-tab", id);
        tabList.appendChild(tab);

        const panel = document.createElement("section");
        panel.setAttribute("data-tab-panel", id);
        panel.className = "settings-tab-panel";
        body.appendChild(panel);
    }
    root.appendChild(tabList);
    root.appendChild(body);
    return root;
};

beforeEach(() => {
    // Ensure document state is clean between DOM-asserting tests.
    document.body.innerHTML = "";
});

// ---------------------------------------------------------------------------
// resolveSettingsShellProfile
// ---------------------------------------------------------------------------

test("crx surface → extension profile", () => {
    assert.equal(resolveSettingsShellProfile({ surface: "crx" } as Ctx), "extension");
});

test("isExtension=true → extension profile regardless of surface", () => {
    assert.equal(resolveSettingsShellProfile({ isExtension: true, surface: "web" } as Ctx), "extension");
});

test("capacitor surface with no desktop views → cwsp-mobile profile", () => {
    assert.equal(resolveSettingsShellProfile({ surface: "capacitor" } as Ctx), "cwsp-mobile");
});

test("native surface with no desktop views → cwsp-mobile profile", () => {
    assert.equal(resolveSettingsShellProfile({ surface: "native" } as Ctx), "cwsp-mobile");
});

test("web surface → full profile", () => {
    assert.equal(resolveSettingsShellProfile({ surface: "web" } as Ctx), "full");
});

test("unknown surface → full profile", () => {
    assert.equal(resolveSettingsShellProfile({ surface: "unknown" } as Ctx), "full");
});

test("sku launcher → environment even on capacitor", () => {
    assert.equal(resolveSettingsShellProfile({ surface: "capacitor", sku: "launcher" } as Ctx), "environment");
});

test("sku transfer → cwsp-mobile", () => {
    assert.equal(resolveSettingsShellProfile({ surface: "capacitor", sku: "transfer" } as Ctx), "cwsp-mobile");
});

test("sku explorer → explorer profile", () => {
    assert.equal(resolveSettingsShellProfile({ surface: "capacitor", sku: "explorer" } as Ctx), "explorer");
});

test("sku document → document (print/read/edit, no AI)", () => {
    assert.equal(resolveSettingsShellProfile({ surface: "capacitor", sku: "document" } as Ctx), "document");
});

test("sku process → process (AI / WorkCenter)", () => {
    assert.equal(resolveSettingsShellProfile({ surface: "capacitor", sku: "process" } as Ctx), "process");
});

// ---------------------------------------------------------------------------
// defaultSettingsTabForProfile
// ---------------------------------------------------------------------------

test("defaultSettingsTabForProfile: cwsp-mobile → cwsp", () => {
    assert.equal(defaultSettingsTabForProfile("cwsp-mobile"), "cwsp");
});

test("defaultSettingsTabForProfile: extension → crx", () => {
    assert.equal(defaultSettingsTabForProfile("extension"), "crx");
});

test("defaultSettingsTabForProfile: full → ai", () => {
    assert.equal(defaultSettingsTabForProfile("full"), "ai");
});

test("defaultSettingsTabForProfile: environment → appearance", () => {
    assert.equal(defaultSettingsTabForProfile("environment"), "appearance");
});

test("defaultSettingsTabForProfile: explorer → appearance", () => {
    assert.equal(defaultSettingsTabForProfile("explorer"), "appearance");
});

test("defaultSettingsTabForProfile: document → markdown", () => {
    assert.equal(defaultSettingsTabForProfile("document"), "markdown");
});

test("defaultSettingsTabForProfile: process → ai", () => {
    assert.equal(defaultSettingsTabForProfile("process"), "ai");
});

// ---------------------------------------------------------------------------
// pruneBuiltInSettingsTabs
// ---------------------------------------------------------------------------

test("pruneBuiltInSettingsTabs is a no-op for the full profile", () => {
    const root = buildRoot(["appearance", "ai", "cwsp", "markdown", "server"]);
    const before = root.querySelectorAll("[data-tab-panel]").length;
    pruneBuiltInSettingsTabs(root, "full");
    assert.equal(root.querySelectorAll("[data-tab-panel]").length, before);
});

test("pruneBuiltInSettingsTabs removes built-in extension + server for the extension profile", () => {
    const hidden = ["extension", "server"];
    const kept = ["appearance", "ai", "crx", "cwsp"];
    const root = buildRoot([...hidden, ...kept]);

    pruneBuiltInSettingsTabs(root, "extension");

    for (const id of hidden) {
        assert.equal(root.querySelector(`[data-tab-panel="${id}"]`), null, `panel ${id} should be pruned`);
        assert.equal(
            root.querySelector(`[data-action="switch-settings-tab"][data-tab="${id}"]`),
            null,
            `tab ${id} should be pruned`
        );
    }
    for (const id of kept) {
        assert.ok(root.querySelector(`[data-tab-panel="${id}"]`), `panel ${id} must survive`);
    }
});

test("pruneBuiltInSettingsTabs removes the cwsp-mobile hidden built-in tabs + their tab buttons", () => {
    const hidden = ["appearance", "markdown", "ai", "mcp", "server", "instructions", "extension"];
    const kept = ["cwsp", "network"];
    const root = buildRoot([...hidden, ...kept]);

    pruneBuiltInSettingsTabs(root, "cwsp-mobile");

    for (const id of hidden) {
        assert.equal(root.querySelector(`[data-tab-panel="${id}"]`), null, `panel ${id} should be pruned`);
        assert.equal(root.querySelector(`[data-action="switch-settings-tab"][data-tab="${id}"]`), null, `tab ${id} should be pruned`);
    }
    for (const id of kept) {
        assert.ok(root.querySelector(`[data-tab-panel="${id}"]`), `panel ${id} must survive`);
        assert.ok(root.querySelector(`[data-action="switch-settings-tab"][data-tab="${id}"]`), `tab ${id} must survive`);
    }
});

test("pruneBuiltInSettingsTabs is idempotent", () => {
    const root = buildRoot(["appearance", "ai", "cwsp"]);
    pruneBuiltInSettingsTabs(root, "cwsp-mobile");
    const afterFirst = root.querySelectorAll("[data-tab-panel]").length;
    pruneBuiltInSettingsTabs(root, "cwsp-mobile");
    assert.equal(root.querySelectorAll("[data-tab-panel]").length, afterFirst);
});

// ---------------------------------------------------------------------------
// hasBuiltInSettingsPanel
// ---------------------------------------------------------------------------

test("hasBuiltInSettingsPanel returns true for existing panel", () => {
    const root = buildRoot(["ai", "cwsp"]);
    assert.equal(hasBuiltInSettingsPanel(root, "ai"), true);
});

test("hasBuiltInSettingsPanel returns false for missing panel", () => {
    const root = buildRoot(["ai"]);
    assert.equal(hasBuiltInSettingsPanel(root, "cwsp"), false);
});

// Compile-time profile type sanity.
test("pruneBuiltInSettingsTabs hides markdown/ai/cwsp for environment (launcher)", () => {
    const hidden = ["markdown", "ai", "cwsp", "mcp", "instructions", "server", "extension"];
    const kept = ["appearance"];
    const root = buildRoot([...hidden, ...kept]);
    pruneBuiltInSettingsTabs(root, "environment");
    for (const id of hidden) {
        assert.equal(root.querySelector(`[data-tab-panel="${id}"]`), null, `panel ${id} should be pruned`);
    }
    for (const id of kept) {
        assert.ok(root.querySelector(`[data-tab-panel="${id}"]`), `panel ${id} must survive`);
    }
});

test("SettingsShellProfile covers full / cwsp-mobile / extension / explorer / document / process", () => {
    const full: SettingsShellProfile = "full";
    const mobile: SettingsShellProfile = "cwsp-mobile";
    const ext: SettingsShellProfile = "extension";
    const explorer: SettingsShellProfile = "explorer";
    const document: SettingsShellProfile = "document";
    const process: SettingsShellProfile = "process";
    assert.ok(full && mobile && ext && explorer && document && process);
});

test("pruneBuiltInSettingsTabs hides AI on document SKU", () => {
    const hidden = ["ai", "mcp", "instructions", "cwsp", "server", "extension"];
    const kept = ["appearance", "markdown"];
    const root = buildRoot([...hidden, ...kept]);
    pruneBuiltInSettingsTabs(root, "document");
    for (const id of hidden) {
        assert.equal(root.querySelector(`[data-tab-panel="${id}"]`), null, `panel ${id} should be pruned`);
    }
    for (const id of kept) {
        assert.ok(root.querySelector(`[data-tab-panel="${id}"]`), `panel ${id} must survive`);
    }
});

test("pruneBuiltInSettingsTabs keeps AI and hides markdown on process SKU", () => {
    const hidden = ["markdown", "cwsp", "server", "extension"];
    const kept = ["appearance", "ai", "mcp", "instructions"];
    const root = buildRoot([...hidden, ...kept]);
    pruneBuiltInSettingsTabs(root, "process");
    for (const id of hidden) {
        assert.equal(root.querySelector(`[data-tab-panel="${id}"]`), null, `panel ${id} should be pruned`);
    }
    for (const id of kept) {
        assert.ok(root.querySelector(`[data-tab-panel="${id}"]`), `panel ${id} must survive`);
    }
});
