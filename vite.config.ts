import { defineConfig } from "vite";
import wyw from '@wyw-in-js/vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [wyw()],
	build: {
		outDir: "docs",
		cssMinify: false
	}
});