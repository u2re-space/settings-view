/**
 * Focused Pass-II Settings contract-test runner.
 *
 * WHY: settings-view source uses the package's Vite/tsconfig aliases, which a
 * direct `node --test`/tsx invocation cannot resolve. Bundle each test entry
 * with those production aliases, keep Node/jsdom external, then execute the
 * generated ESM files with the built-in Node test runner.
 */
import { spawn } from "node:child_process";
import { mkdtemp, rm } from "node:fs/promises";
import { join, resolve } from "node:path";
import { build } from "vite";

import { getViewResolveAliases } from "../../view-resolve-aliases.js";

const root = resolve(import.meta.dirname, "..");
// Keep generated files under the workspace dependency tree so Node can resolve
// external test dependencies (jsdom) from the bundled test modules.
const outputDirectory = await mkdtemp(
    join(resolve(root, "../../../node_modules"), ".settings-view-contracts-")
);
const testOnlyAliases = [{
    find: "cwsp-shared/cwsp-endpoint-resolve",
    replacement: resolve(root, "test/stubs/cwsp-endpoint-resolve.ts")
}];
const testEntries = {
    "settings-contributions.test": resolve(root, "test/settings-contributions.test.ts"),
    "settings-shell-profile.test": resolve(root, "test/settings-shell-profile.test.ts"),
    "settings-surface-detection.test": resolve(root, "test/settings-surface-detection.test.ts"),
    "settings-sync-adapter.test": resolve(root, "test/settings-sync-adapter.test.ts")
};

// INVARIANT: the profile contract must execute with desktop-only views disabled
// before the routing module is evaluated, matching the CWSP mobile shell.
process.env.VITE_ENABLED_VIEWS = "network,settings";

try {
    await build({
        root,
        configFile: false,
        logLevel: "warn",
        resolve: {
            alias: getViewResolveAliases(root, testOnlyAliases)
        },
        build: {
            target: "esnext",
            minify: false,
            sourcemap: "inline",
            emptyOutDir: true,
            outDir: outputDirectory,
            lib: {
                entry: testEntries,
                formats: ["es"],
                fileName: (_format, entryName) => `${entryName}.mjs`
            },
            rollupOptions: {
                external: [/^node:/, "jsdom"]
            }
        }
    });

    const outputs = Object.keys(testEntries).map((name) => resolve(outputDirectory, `${name}.mjs`));
    const exitCode = await new Promise((resolveExit, reject) => {
        const child = spawn(process.execPath, [
            `--localstorage-file=${resolve(outputDirectory, "local-storage.json")}`,
            "--test",
            ...outputs
        ], {
            cwd: root,
            env: {
                ...process.env,
                VITE_ENABLED_VIEWS: "network,settings"
            },
            stdio: "inherit"
        });
        child.once("error", reject);
        child.once("exit", (code, signal) => {
            if (signal) reject(new Error(`contract tests terminated by ${signal}`));
            else resolveExit(code ?? 1);
        });
    });

    if (exitCode !== 0) process.exitCode = exitCode;
} finally {
    await rm(outputDirectory, { recursive: true, force: true });
}
