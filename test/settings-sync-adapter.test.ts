/**
 * Pass-II Settings contract tests — settings-sync-adapter.
 *
 * WHY: the adapter is the dependency-free contract + registry that lets each
 * shell (Capacitor / WebNative) register its `settings:get` / `settings:patch`
 * arm at bootstrap without the shared settings-view module importing either
 * shell. These tests pin the contract that this layer actually guarantees:
 *   - arm registration + resolution by detected surface
 *   - canonical verb dispatch (get / patch) and optional defaults/snapshot
 *   - missing-arm behavior (no arm → {} / null, never throws)
 *   - defensive error handling (arm throws → {})
 *   - explicit surface-detector override
 *
 * NOTE: backend round-trip (Java prefs.db / portable.config.json reload) lives
 * ABOVE this layer (CwsBridge / WebNative control RPC) and is intentionally not
 * asserted here — the adapter only dispatches. Merge/preservation semantics
 * belong to the registered arm; this layer returns whatever the arm returns.
 */
import assert from "node:assert/strict";
import test, { afterEach } from "node:test";
import {
    registerSettingsSyncArm,
    unregisterSettingsSyncArm,
    clearSettingsSyncArms,
    createMemorySettingsSyncArm,
    mergeSettingsPatch,
    resolveSettingsSyncArm,
    detectSettingsSurface,
    setSurfaceDetector,
    getSettingsSync,
    patchSettingsSync,
    getSettingsDefaults,
    getSettingsSnapshot,
    type SettingsSyncArm,
    type SettingsBlob,
    type SettingsSurface
} from "../src/ts/settings-sync-adapter.ts";

// `node --test` runs each test file in an isolated worker. Default-detector
// heuristics live in settings-surface-detection.test.ts so this file can use
// the public override without contaminating those assertions.

afterEach(() => {
    clearSettingsSyncArms();
    setSurfaceDetector(() => "web");
});

// ---------------------------------------------------------------------------
// 1. webnative settings:get / settings:patch arm registration + dispatch
// ---------------------------------------------------------------------------

test("webnative arm is resolved when surface detector reports webnative", async () => {
    setSurfaceDetector(() => "webnative");

    let getCalls = 0;
    let patchCalls = 0;
    const arm: SettingsSyncArm = {
        get: async () => {
            getCalls += 1;
            return { core: { mode: "endpoint" } };
        },
        patch: async (patch) => {
            patchCalls += 1;
            return { core: { mode: "endpoint", patched: true }, __patch: patch };
        }
    };
    registerSettingsSyncArm("webnative", arm);

    assert.equal(resolveSettingsSyncArm(), arm, "webnative arm must resolve");

    const got = await getSettingsSync();
    assert.equal(getCalls, 1);
    assert.deepEqual(got, { core: { mode: "endpoint" } });

    const patched = await patchSettingsSync({ core: { bridge: { enabled: true } } });
    assert.equal(patchCalls, 1);
    assert.deepEqual(patched, {
        core: { mode: "endpoint", patched: true },
        __patch: { core: { bridge: { enabled: true } } }
    });
});

test("settings:patch passes the patch through unchanged and returns arm result", async () => {
    setSurfaceDetector(() => "webnative");
    let captured: SettingsBlob | null = null;
    registerSettingsSyncArm("webnative", {
        get: async () => ({ a: 1 }),
        patch: async (p) => {
            captured = p;
            return { merged: true, ...p };
        }
    });

    const out = await patchSettingsSync({ x: 2, nested: { y: 3 } });
    assert.deepEqual(captured, { x: 2, nested: { y: 3 } });
    assert.deepEqual(out, { merged: true, x: 2, nested: { y: 3 } });
});

test("setSurfaceDetector override controls the detected surface", () => {
    setSurfaceDetector(() => "capacitor");
    assert.equal(detectSettingsSurface(), "capacitor");
});

// ---------------------------------------------------------------------------
// 3. Merge / preservation behavior available at this layer
//
// The adapter does NOT merge — it delegates. Merge/preservation is the arm's
// (backend's) job. What this layer guarantees: the arm result is returned
// verbatim, and optional defaults()/snapshot() are delegated when present.
// ---------------------------------------------------------------------------

test("getSettingsDefaults delegates to arm.defaults when present", async () => {
    setSurfaceDetector(() => "webnative");
    registerSettingsSyncArm("webnative", {
        get: async () => ({}),
        patch: async (p) => p,
        defaults: async () => ({ core: { ops: { logLevel: "info" } } })
    });
    assert.deepEqual(await getSettingsDefaults(), { core: { ops: { logLevel: "info" } } });
});

test("getSettingsSnapshot delegates to arm.snapshot when present", async () => {
    setSurfaceDetector(() => "webnative");
    registerSettingsSyncArm("webnative", {
        get: async () => ({}),
        patch: async (p) => p,
        snapshot: async () => ({ core: { mode: "endpoint", bridge: { enabled: true } } })
    });
    assert.deepEqual(await getSettingsSnapshot(), {
        core: { mode: "endpoint", bridge: { enabled: true } }
    });
});

test("arm without defaults/snapshot yields {} from both helpers", async () => {
    setSurfaceDetector(() => "webnative");
    registerSettingsSyncArm("webnative", {
        get: async () => ({ a: 1 }),
        patch: async (p) => p
    });
    assert.deepEqual(await getSettingsDefaults(), {});
    assert.deepEqual(await getSettingsSnapshot(), {});
});

// ---------------------------------------------------------------------------
// 4. Missing-arm behavior
//
// No arm registered for the detected surface AND no "web" fallback (this file
// never registers a "web" arm) → resolve returns null and all helpers return {}
// without throwing.
// ---------------------------------------------------------------------------

test("resolveSettingsSyncArm returns null when no arm matches the surface", () => {
    setSurfaceDetector(() => "web");
    assert.equal(resolveSettingsSyncArm(), null);
});

test("getSettingsSync returns {} and does not throw when no arm is registered", async () => {
    setSurfaceDetector(() => "web");
    assert.deepEqual(await getSettingsSync(), {});
});

test("patchSettingsSync returns {} and does not throw when no arm is registered", async () => {
    setSurfaceDetector(() => "web");
    assert.deepEqual(await patchSettingsSync({ a: 1 }), {});
});

test("getSettingsDefaults / getSettingsSnapshot return {} with no arm", async () => {
    setSurfaceDetector(() => "web");
    assert.deepEqual(await getSettingsDefaults(), {});
    assert.deepEqual(await getSettingsSnapshot(), {});
});

test("arm.get() throwing is swallowed → getSettingsSync returns {}", async () => {
    setSurfaceDetector(() => "webnative");
    registerSettingsSyncArm("webnative", {
        get: async () => {
            throw new Error("backend down");
        },
        patch: async (p) => p
    });
    assert.deepEqual(await getSettingsSync(), {});
});

test("arm.patch() throwing propagates (patch is the write path, not a read probe)", async () => {
    setSurfaceDetector(() => "webnative");
    registerSettingsSyncArm("webnative", {
        get: async () => ({}),
        patch: async () => {
            throw new Error("write failed");
        }
    });
    await assert.rejects(() => patchSettingsSync({ a: 1 }), /write failed/);
});

test("arm.defaults() throwing is swallowed → {} (defaults are advisory)", async () => {
    setSurfaceDetector(() => "webnative");
    registerSettingsSyncArm("webnative", {
        get: async () => ({}),
        patch: async (p) => p,
        defaults: async () => {
            throw new Error("no config");
        }
    });
    assert.deepEqual(await getSettingsDefaults(), {});
});

// ---------------------------------------------------------------------------
// Surface preference: registered surface arm is preferred; web is last resort.
// ---------------------------------------------------------------------------

test("a non-web arm is preferred over a registered web fallback", async () => {
    setSurfaceDetector(() => "webnative");
    const webnativeArm: SettingsSyncArm = {
        get: async () => ({ from: "webnative" }),
        patch: async (p) => ({ from: "webnative", ...p })
    };
    const webArm: SettingsSyncArm = {
        get: async () => ({ from: "web" }),
        patch: async (p) => ({ from: "web", ...p })
    };
    registerSettingsSyncArm("webnative", webnativeArm);
    registerSettingsSyncArm("web", webArm);

    assert.equal(resolveSettingsSyncArm(), webnativeArm);
    assert.deepEqual(await getSettingsSync(), { from: "webnative" });
});

test("web arm is used as fallback when the detected surface has no arm", async () => {
    setSurfaceDetector(() => "native");
    const webArm: SettingsSyncArm = {
        get: async () => ({ from: "web" }),
        patch: async (p) => ({ from: "web", ...p })
    };
    registerSettingsSyncArm("web", webArm);

    assert.equal(resolveSettingsSyncArm(), webArm);
    assert.deepEqual(await getSettingsSync(), { from: "web" });
});

// Compile-time surface type sanity (no runtime assertion).
test("SettingsSurface type includes webnative + web", () => {
    const s: SettingsSurface = "webnative";
    const w: SettingsSurface = "web";
    assert.ok(s && w);
});

// ---------------------------------------------------------------------------
// Reference memory arm + Capacitor parity (get/patch persistence contract)
// ---------------------------------------------------------------------------

test("createMemorySettingsSyncArm persists get/patch for the capacitor surface", async () => {
    setSurfaceDetector(() => "capacitor");
    registerSettingsSyncArm(
        "capacitor",
        createMemorySettingsSyncArm({ core: { mode: "endpoint" } })
    );

    assert.deepEqual(await getSettingsSync(), { core: { mode: "endpoint" } });
    const patched = await patchSettingsSync({ core: { bridge: { enabled: true } } });
    assert.deepEqual(patched, {
        core: { mode: "endpoint", bridge: { enabled: true } }
    });
    assert.deepEqual(await getSettingsSync(), patched);
});

test("mergeSettingsPatch keeps sibling keys when a nested object is patched", () => {
    assert.deepEqual(
        mergeSettingsPatch(
            { core: { mode: "endpoint", ops: { logLevel: "info" } }, keep: true },
            { core: { ops: { logLevel: "debug" } } }
        ),
        {
            core: { mode: "endpoint", ops: { logLevel: "debug" } },
            keep: true
        }
    );
});

test("unregisterSettingsSyncArm removes only the named surface", async () => {
    setSurfaceDetector(() => "webnative");
    registerSettingsSyncArm("webnative", createMemorySettingsSyncArm({ a: 1 }));
    registerSettingsSyncArm("web", createMemorySettingsSyncArm({ a: 2 }));
    unregisterSettingsSyncArm("webnative");
    assert.deepEqual(await getSettingsSync(), { a: 2 }, "web fallback must remain");
});
