import { defineViewProject } from "../../shared/vite.view.config.js";

export default defineViewProject({ name: "settings-view", root: import.meta.dirname, buildExtend: { cssMinify: "esbuild" } });
