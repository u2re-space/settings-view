/**
 * Test-only DOM shim — installs jsdom globals so profile/prune tests that touch
 * `document` can run under `node --test`. DOM-using test entries import this
 * module directly, so every isolated test worker receives a fresh document.
 */
import { JSDOM } from "jsdom";

const dom = new JSDOM("<!doctype html><html><body></body></html>", {
    pretendToBeVisual: true,
    url: "http://localhost/"
});

const g = globalThis as unknown as {
    document?: unknown;
    window?: unknown;
    HTMLElement?: unknown;
    Node?: unknown;
    Element?: unknown;
    HTMLInputElement?: unknown;
    HTMLSelectElement?: unknown;
    HTMLTextAreaElement?: unknown;
};

g.document = dom.window.document;
g.window = dom.window;
g.HTMLElement = dom.window.HTMLElement;
g.Node = dom.window.Node;
g.Element = dom.window.Element;
g.HTMLInputElement = dom.window.HTMLInputElement;
g.HTMLSelectElement = dom.window.HTMLSelectElement;
g.HTMLTextAreaElement = dom.window.HTMLTextAreaElement;

export {};
