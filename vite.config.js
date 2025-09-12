import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

function wrapVuetifyCssInLayer() {
  return {
    name: "wrap-vuetify-in-layers",
    enforce: "post",
    generateBundle(options, bundle) {
      for (const [fileName, chunk] of Object.entries(bundle)) {
        if (fileName.endsWith(".css") && chunk.type === "asset") {
          chunk.source = `@layer vuetify { @layer components {\n${chunk.source}\n}}`;
        }
      }
    },
  };
}

export default defineConfig({
  plugins: [vue(), wrapVuetifyCssInLayer()],
  build: {
    lib: {
      entry: "resources/index.js",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: [
        "vue",
        "vuetify",
        "@evomark/vue-forward-slots",
        "@inertiajs/vue3",
        "lodash-es",
        "axios",
        "@vueuse/core",
      ],
    },
  },
});
