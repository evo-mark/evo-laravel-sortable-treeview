import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { libInjectCss } from "vite-plugin-lib-inject-css";

export default defineConfig({
	plugins: [vue(), libInjectCss()],
	build: {
		lib: {
			entry: "resources/index.js",
			formats: ["es", "cjs"]
		},
		rollupOptions: {
			external: ["vue", "@evomark/vue-forward-slots", "@inertiajs/vue3", "lodash-es", "axios", "@vueuse/core"]
		}
	}
});
