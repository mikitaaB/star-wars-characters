import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
	base: "https://mikitaab.github.io/star-wars-characters/",
	plugins: [react(), eslint()],
});
