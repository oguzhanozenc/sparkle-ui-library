import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";

export default defineConfig({
  plugins: [
    react(),
    libInjectCss({ outputFilename: "assets/style.css" }),
    dts({
      tsconfigPath: resolve(import.meta.dirname, "tsconfig.lib.json"),
      include: ["src/lib"],
    }),
  ],
  css: {
    modules: {
      scopeBehaviour: "local",
      generateScopedName: "[name]__[local]___[hash:base64:5]",
    },
  },
  build: {
    lib: {
      entry: resolve(import.meta.dirname, "src/lib/index.ts"),
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: `index.[format].js`,
      },
    },
    emptyOutDir: true,
    copyPublicDir: false,
  },
});
