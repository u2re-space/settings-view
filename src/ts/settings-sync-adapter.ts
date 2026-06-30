/**
 * Settings-sync adapter — canonical contract + registry for cross-platform settings sync.
 *
 * WHY this exists: Capacitor (Android) syncs settings via `CwsBridge.invoke("settings:patch")`
 * → Java `prefs.db`; WebNative (desktop) syncs via control RPC `/service/config` →
 * `portable.config.json`. Both are "settings:patch"/"settings:get" under the hood but live in
 * different layers (CwsBridge is in the CrossWord app layer; WebNative control RPC is in the
 * webnative app layer). The shared settings-view module sits BELOW both and cannot import
 * either arm without violating the import hierarchy.
 *
 * Resolution: this module is the dependency-free contract + registry. Each shell registers
 * its arm at bootstrap; the dispatcher resolves the registered arm for the detected surface.
 * Shells that don't register keep their existing direct call sites (no regression — the
 * adapter is additive).
 *
 * Canonical verbs (match CWSP network.mdc stable action naming):
 *   - settings:get  → read the persisted settings blob
 *   - settings:patch → shallow-merge a patch into persisted settings + trigger backend reload
 *
 * Surface detection is pluggable: defaults to checking `globalThis` hints set by each shell
 * (`__CWS_WEBNATIVE_BOOT__` by the WebNative custom panel; the Capacitor bridge presence is
 * checked by the Capacitor shell when it registers its arm). Override via `setSurfaceDetector`.
 */

export type SettingsSurface = "capacitor" | "native" | "crx" | "webnative" | "web";

export interface SettingsBlob {
    [key: string]: unknown;
}
export type SettingsPatch = SettingsBlob;

export interface SettingsSyncArm {
    get(): Promise<SettingsBlob>;
    patch(patch: SettingsPatch): Promise<SettingsBlob>;
    /**
     * Optional: config-driven defaults + resolved snapshot for views that want to render
     * actual-config-derived values (ports, bridge, roles, endpointIDs, DEFAULT_SETTINGS).
     * Shells backed by a control-RPC/bridge that exposes the CWSP config layer implement this;
     * pure-web arms return `{}` (views fall back to local defaults).
     */
    defaults?(): Promise<SettingsBlob>;
    snapshot?(): Promise<SettingsBlob>;
}

type ArmRegistry = Partial<Record<SettingsSurface, SettingsSyncArm>>;

const arms: ArmRegistry = {};

let surfaceDetector: () => SettingsSurface = detectSurfaceDefault;

/**
 * Default surface detector — order matters (most specific first).
 *
 * `__CWS_WEBNATIVE_BOOT__` is set by `runtime/cwsp/webnative/app/frontend/index.ts`.
 * The Capacitor native shell is detected via the `Capacitor` global injected by
 * `@capacitor/core`; the CRX surface via the chrome extension global. Fallback is `web`.
 */
function detectSurfaceDefault(): SettingsSurface {
    const g = globalThis as unknown as {
        __CWS_WEBNATIVE_BOOT__?: boolean;
        Capacitor?: unknown;
        chrome?: { runtime?: unknown };
    };
    if (g.__CWS_WEBNATIVE_BOOT__) return "webnative";
    if (typeof g.Capacitor !== "undefined") return "capacitor";
    if (typeof g.chrome !== "undefined" && g.chrome?.runtime) return "crx";
    return "web";
}

/** Override the surface detector (used by shells that know their surface better than heuristics). */
export function setSurfaceDetector(fn: () => SettingsSurface): void {
    surfaceDetector = fn;
}

/** Register a sync arm for a surface. Shells call this at bootstrap. */
export function registerSettingsSyncArm(surface: SettingsSurface, arm: SettingsSyncArm): void {
    arms[surface] = arm;
}

/** Current detected surface (exposed for diagnostics + arm selection). */
export function detectSettingsSurface(): SettingsSurface {
    return surfaceDetector();
}

/**
 * Resolve the sync arm for the current surface, falling back to `web` (IDB-only, no backend
 * persistence — the historical browser/PWA behavior).
 */
export function resolveSettingsSyncArm(): SettingsSyncArm | null {
    const surface = surfaceDetector();
    return arms[surface] || arms.web || null;
}

/**
 * settings:get — read the persisted settings blob for the current surface.
 * Returns `{}` when no arm is registered (caller falls back to IDB / defaults).
 */
export async function getSettingsSync(): Promise<SettingsBlob> {
    const arm = resolveSettingsSyncArm();
    if (!arm) return {};
    try { return await arm.get(); } catch { return {}; }
}

/**
 * settings:patch — shallow-merge a patch into persisted settings and trigger backend reload.
 * Returns the merged blob, or `{}` when no arm is registered (caller should persist to IDB).
 */
export async function patchSettingsSync(patch: SettingsPatch): Promise<SettingsBlob> {
    const arm = resolveSettingsSyncArm();
    if (!arm) return {};
    return arm.patch(patch);
}

/**
 * settings:defaults — config-driven defaults (DEFAULT_SETTINGS + resolved snapshot) for views
 * that render actual-config-derived values. Returns `{}` when the arm doesn't expose defaults.
 */
export async function getSettingsDefaults(): Promise<SettingsBlob> {
    const arm = resolveSettingsSyncArm();
    if (!arm?.defaults) return {};
    try { return await arm.defaults(); } catch { return {}; }
}

/**
 * settings:snapshot — the actual resolved runtime config (ports, bridge, roles, endpointIDs, …)
 * for views (e.g. network-view) that display live config state. Returns `{}` when unavailable.
 */
export async function getSettingsSnapshot(): Promise<SettingsBlob> {
    const arm = resolveSettingsSyncArm();
    if (!arm?.snapshot) return {};
    try { return await arm.snapshot(); } catch { return {}; }
}
