import { decodeToastMessage } from "@fest-lib/lure";

export function showSuccess(message: string): void {
    globalThis.dispatchEvent?.(new CustomEvent("view:toast", { detail: { type: "success", message: decodeToastMessage(message) } }));
}

export function showError(message: string): void {
    globalThis.dispatchEvent?.(new CustomEvent("view:toast", { detail: { type: "error", message: decodeToastMessage(message) } }));
}
