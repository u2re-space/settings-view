export function showSuccess(message: string): void {
    globalThis.dispatchEvent?.(new CustomEvent("view:toast", { detail: { type: "success", message } }));
}

export function showError(message: string): void {
    globalThis.dispatchEvent?.(new CustomEvent("view:toast", { detail: { type: "error", message } }));
}
