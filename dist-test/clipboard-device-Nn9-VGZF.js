//#region ../../projects/subsystem/src/routing/native/clipboard-device.ts
var e = () => {
	try {
		let e = globalThis.Capacitor;
		return typeof e?.isNativePlatform == "function" && !!e.isNativePlatform();
	} catch {
		return !1;
	}
};
async function t() {
	if (e()) try {
		let { NativeSettings: e, AndroidSettings: t, IOSSettings: n } = await import(
			/* @vite-ignore */
			"capacitor-native-settings"
);
		await e.open({
			optionAndroid: t.AppNotification,
			optionIOS: n.AppNotification
		});
	} catch {}
}
async function n() {
	if (e()) try {
		let { NativeSettings: e, AndroidSettings: t, IOSSettings: n } = await import(
			/* @vite-ignore */
			"capacitor-native-settings"
);
		await e.open({
			optionAndroid: t.ApplicationDetails,
			optionIOS: n.App
		});
	} catch {}
}
//#endregion
export { n as openAppClipboardRelatedSettings, t as openNativeNotificationSettings };
