//#region ../../projects/subsystem/runtime/hub-socket-boot.ts
function e(e) {
	globalThis.dispatchEvent?.(new CustomEvent("view:hub-socket-settings", { detail: e }));
}
//#endregion
export { e as applyHubSocketFromSettings };
