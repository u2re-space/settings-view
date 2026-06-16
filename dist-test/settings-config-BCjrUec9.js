//#region ../../projects/subsystem/runtime/settings-config.ts
var e = "view-settings";
function t() {
	try {
		return JSON.parse(globalThis.localStorage?.getItem(e) || "{}");
	} catch {
		return {};
	}
}
function n(t) {
	globalThis.localStorage?.setItem(e, JSON.stringify(t));
}
//#endregion
export { n, t };
