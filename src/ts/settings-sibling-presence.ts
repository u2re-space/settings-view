/*
 * Filename: settings-sibling-presence.ts
 * FullPath: modules/views/settings-view/src/ts/settings-sibling-presence.ts
 * FIND:settings-profile
 * TAG:sku,settings-profile
 * Change date and time: 22.25.00_24.08.2026
 * Reason for changes: Launcher settings tabs follow installed sibling APKs.
 */
import {
    androidPackageForSku,
    readCwspSku,
    type CwspSku
} from "com/config/ecosystem-skus";
import {
    SIBLING_HUB_SETTINGS_SECTIONS,
    resolveEffectiveHubSettingsSection,
    skuForHubSettingsSection,
    type HubSettingsSection,
    type SettingsAreaNavMode
} from "com/config/settings/settings-shell-profile";

type SiblingSection = (typeof SIBLING_HUB_SETTINGS_SECTIONS)[number];

let cachedInstalled: SiblingSection[] | null = null;
let inflight: Promise<SiblingSection[]> | null = null;

const isNativeApkHost = (): boolean => {
    try {
        const g = globalThis as {
            Capacitor?: { isNativePlatform?: () => boolean; getPlatform?: () => string };
            __CWS_NATIVE__?: boolean;
        };
        const platform = g.Capacitor?.getPlatform?.();
        return Boolean(
            g.Capacitor?.isNativePlatform?.() ||
                platform === "android" ||
                platform === "ios" ||
                g.__CWS_NATIVE__ === true
        );
    } catch {
        return false;
    }
};

/** Hub URL tree, or launcher APK (sibling packages), otherwise no area nav. */
export const resolveSettingsAreaNavMode = (): SettingsAreaNavMode => {
    if (resolveEffectiveHubSettingsSection() !== null) return "hub";
    if (readCwspSku() === "launcher" && isNativeApkHost()) return "launcher";
    return "none";
};

export const peekInstalledSiblingSettingsSections = (): SiblingSection[] | null =>
    cachedInstalled;

export const refreshInstalledSiblingSettingsSections = async (): Promise<SiblingSection[]> => {
    if (inflight) return inflight;
    inflight = (async () => {
        const wanted = SIBLING_HUB_SETTINGS_SECTIONS.map((section) => {
            const sku = skuForHubSettingsSection(section) as CwspSku;
            return { section, pkg: androidPackageForSku(sku) };
        }).filter((row): row is { section: SiblingSection; pkg: string } => Boolean(row.pkg));
        try {
            const { launcherHasPackages } = await import("com/routing/native/launcher-bridge");
            const map = await launcherHasPackages(wanted.map((row) => row.pkg));
            cachedInstalled = wanted
                .filter((row) => map[row.pkg] === true)
                .map((row) => row.section);
        } catch {
            cachedInstalled = [];
        }
        return cachedInstalled;
    })();
    try {
        return await inflight;
    } finally {
        inflight = null;
    }
};

export const sameSiblingSectionSet = (
    a: readonly HubSettingsSection[] | null | undefined,
    b: readonly HubSettingsSection[] | null | undefined
): boolean => {
    const left = [...(a || [])].filter((s) => s !== "hub").sort();
    const right = [...(b || [])].filter((s) => s !== "hub").sort();
    return left.length === right.length && left.every((s, i) => s === right[i]);
};
