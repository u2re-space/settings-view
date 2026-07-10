/**
 * Pass-II Settings contract tests — production default surface detector.
 *
 * INVARIANT: this file never calls `setSurfaceDetector`. Each node:test file
 * runs in an isolated worker, so every assertion below executes the actual
 * module-default detector installed by settings-sync-adapter.ts.
 */
import assert from "node:assert/strict";
import test, { afterEach, beforeEach } from "node:test";

import { detectSettingsSurface } from "../src/ts/settings-sync-adapter.ts";

type SurfaceGlobals = {
    __CWS_WEBNATIVE_BOOT__?: boolean;
    Capacitor?: unknown;
    chrome?: { runtime?: unknown };
};

const surfaceGlobals = globalThis as unknown as SurfaceGlobals;

const clearSurfaceHints = (): void => {
    delete surfaceGlobals.__CWS_WEBNATIVE_BOOT__;
    delete surfaceGlobals.Capacitor;
    delete surfaceGlobals.chrome;
};

beforeEach(clearSurfaceHints);
afterEach(clearSurfaceHints);

test("production default detector resolves web without shell hints", () => {
    assert.equal(detectSettingsSurface(), "web");
});

test("production default detector resolves crx from chrome.runtime", () => {
    surfaceGlobals.chrome = { runtime: { id: "settings-contract-test" } };
    assert.equal(detectSettingsSurface(), "crx");
});

test("production default detector resolves capacitor from the injected global", () => {
    surfaceGlobals.Capacitor = { isNativePlatform: () => true };
    assert.equal(detectSettingsSurface(), "capacitor");
});

test("production default detector gives webnative precedence over other hints", () => {
    surfaceGlobals.__CWS_WEBNATIVE_BOOT__ = true;
    surfaceGlobals.Capacitor = { isNativePlatform: () => true };
    surfaceGlobals.chrome = { runtime: { id: "settings-contract-test" } };
    assert.equal(detectSettingsSurface(), "webnative");
});
