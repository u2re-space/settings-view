/*
 * Filename: settings-contribution-sync.test.ts
 * FullPath: modules/views/settings-view/test/settings-contribution-sync.test.ts
 * Change date and time: 16.35.00_10.07.2026
 * Reason for changes: Pass-II — contribution apply/collect ↔ settings:get/patch persistence contract
 *   for Capacitor + WebNative parity at the settings-view module boundary.
 */
/**
 * Pass-II Settings contract tests — contribution ↔ sync persistence.
 *
 * Pins the view-module contract both shells must satisfy after registering an arm:
 *   1. hydrateContributionsFromSync (settings:get → applyContributions)
 *   2. persistContributionsViaSync (collectContributions → settings:patch)
 *   3. partial patches preserve unrelated persisted keys
 *   4. Capacitor and WebNative arms share the same get/patch shape
 *
 * Backend round-trips (Java prefs.db / portable.config.json) stay above this layer;
 * `createMemorySettingsSyncArm` is the reference persistence model.
 */
import assert from "node:assert/strict";
import test, { afterEach } from "node:test";

import "./dom-shim.ts";
import {
    registerSettingsContribution,
    type SettingsContribution
} from "com/config/SettingsContributions";
import {
    applyContributions,
    collectContributions,
    hydrateContributionsFromSync,
    mountContributions,
    persistContributionsViaSync
} from "../src/ts/settings-contributions.ts";
import {
    clearSettingsSyncArms,
    createMemorySettingsSyncArm,
    getSettingsSync,
    patchSettingsSync,
    registerSettingsSyncArm,
    setSurfaceDetector,
    type SettingsSurface
} from "../src/ts/settings-sync-adapter.ts";

const webContext = { surface: "web" as const };

afterEach(() => {
    clearSettingsSyncArms();
    setSurfaceDetector(() => "web");
});

const contribution = (
    id: string,
    overrides: Partial<SettingsContribution> = {}
): SettingsContribution => ({
    id,
    label: id,
    render: () => {
        const wrap = document.createElement("div");
        const input = document.createElement("input");
        input.setAttribute("data-field", "views.passIi.endpointLabel");
        input.type = "text";
        wrap.appendChild(input);
        const toggle = document.createElement("input");
        toggle.type = "checkbox";
        toggle.setAttribute("data-field", "views.passIi.enabled");
        toggle.setAttribute("data-field-type", "boolean");
        wrap.appendChild(toggle);
        return wrap;
    },
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

const field = (root: HTMLElement, path: string): HTMLInputElement => {
    const el = root.querySelector<HTMLInputElement>(`[data-field="${path}"]`);
    assert.ok(el, `expected data-field ${path}`);
    return el;
};

test("applyContributions hydrates data-field controls from settings", (t) => {
    const id = "pass-ii-apply-fields";
    const dispose = registerSettingsContribution(contribution(id));
    t.after(dispose);
    const root = createSettingsRoot();
    mountContributions(root, webContext);

    applyContributions(root, {
        views: { passIi: { endpointLabel: "L-192.168.0.110", enabled: true } }
    } as any, webContext);

    assert.equal(field(root, "views.passIi.endpointLabel").value, "L-192.168.0.110");
    assert.equal(field(root, "views.passIi.enabled").checked, true);
});

test("collectContributions writes data-field values into the settings object", (t) => {
    const id = "pass-ii-collect-fields";
    const dispose = registerSettingsContribution(contribution(id));
    t.after(dispose);
    const root = createSettingsRoot();
    mountContributions(root, webContext);

    field(root, "views.passIi.endpointLabel").value = "L-192.168.0.200";
    field(root, "views.passIi.enabled").checked = true;

    const settings: Record<string, unknown> = { appearance: { theme: "dark" } };
    collectContributions(root, settings as any, webContext);

    assert.deepEqual(settings, {
        appearance: { theme: "dark" },
        views: { passIi: { endpointLabel: "L-192.168.0.200", enabled: true } }
    });
});

const assertSurfacePersistenceRoundTrip = async (
    surface: SettingsSurface,
    t: { after: (fn: () => void) => void }
): Promise<void> => {
    const id = `pass-ii-sync-${surface}`;
    const dispose = registerSettingsContribution(contribution(id));
    t.after(dispose);

    setSurfaceDetector(() => surface);
    registerSettingsSyncArm(
        surface,
        createMemorySettingsSyncArm({
            core: { mode: "endpoint", ops: { logLevel: "info" } },
            views: { passIi: { endpointLabel: "seed", enabled: false } }
        })
    );

    const root = createSettingsRoot();
    mountContributions(root, webContext);

    const hydrated = await hydrateContributionsFromSync(root, webContext, {
        appearance: { theme: "auto" }
    } as any);
    assert.equal(field(root, "views.passIi.endpointLabel").value, "seed");
    assert.equal(field(root, "views.passIi.enabled").checked, false);
    assert.equal((hydrated as any).core?.mode, "endpoint");
    assert.equal((hydrated as any).appearance?.theme, "auto");

    field(root, "views.passIi.endpointLabel").value = "L-192.168.0.110";
    field(root, "views.passIi.enabled").checked = true;

    const persisted = await persistContributionsViaSync(
        root,
        {
            appearance: { theme: "auto" },
            views: { passIi: { endpointLabel: "stale", enabled: false } }
        } as any,
        webContext
    );

    assert.equal((persisted as any).views?.passIi?.endpointLabel, "L-192.168.0.110");
    assert.equal((persisted as any).views?.passIi?.enabled, true);
    // INVARIANT: unrelated persisted keys survive a contribution-driven patch.
    assert.equal((persisted as any).core?.mode, "endpoint");
    assert.equal((persisted as any).core?.ops?.logLevel, "info");

    const reread = await getSettingsSync();
    assert.deepEqual(reread, persisted);
};

test("Capacitor arm: contribution hydrate → edit → persist → get round-trip", async (t) => {
    await assertSurfacePersistenceRoundTrip("capacitor", t);
});

test("WebNative arm: contribution hydrate → edit → persist → get round-trip", async (t) => {
    await assertSurfacePersistenceRoundTrip("webnative", t);
});

test("memory arm patch preserves sibling keys under nested objects", async () => {
    setSurfaceDetector(() => "capacitor");
    registerSettingsSyncArm(
        "capacitor",
        createMemorySettingsSyncArm({
            core: { mode: "endpoint", bridge: { enabled: true }, ops: { logLevel: "info" } }
        })
    );

    const merged = await patchSettingsSync({
        core: { ops: { logLevel: "debug" } }
    });

    assert.deepEqual(merged, {
        core: {
            mode: "endpoint",
            bridge: { enabled: true },
            ops: { logLevel: "debug" }
        }
    });
    assert.deepEqual(await getSettingsSync(), merged);
});

test("Capacitor and WebNative memory arms expose identical get/patch results for the same seed", async () => {
    const seed = {
        core: { mode: "endpoint" },
        views: { network: { target: "L-192.168.0.110" } }
    };
    const patch = { views: { network: { target: "L-192.168.0.200" } } };

    setSurfaceDetector(() => "capacitor");
    registerSettingsSyncArm("capacitor", createMemorySettingsSyncArm({ ...seed }));
    const capacitorPatched = await patchSettingsSync(patch);
    const capacitorGot = await getSettingsSync();

    clearSettingsSyncArms();
    setSurfaceDetector(() => "webnative");
    registerSettingsSyncArm("webnative", createMemorySettingsSyncArm({ ...seed }));
    const webnativePatched = await patchSettingsSync(patch);
    const webnativeGot = await getSettingsSync();

    assert.deepEqual(capacitorPatched, webnativePatched);
    assert.deepEqual(capacitorGot, webnativeGot);
    assert.equal((capacitorGot as any).core?.mode, "endpoint");
    assert.equal((capacitorGot as any).views?.network?.target, "L-192.168.0.200");
});
