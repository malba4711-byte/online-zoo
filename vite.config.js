import { defineConfig } from "vite";
import { resolve } from "path";
import { glob } from "glob";
import checker from "vite-plugin-checker";

import { fileURLToPath } from "url";
const __dirname = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  plugins: [
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./**/*.{ts,js}"',
        useFlatConfig: true,
      },
    }),
  ],
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        glob
          .sync("**/index.html", { ignore: ["node_modules/**", "dist/**"] })
          .map((file) => [
            file.replace(/\.html$/, "").replace(/\\/g, "/"),
            resolve(__dirname, file),
          ]),
      ),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ["import", "global-builtin"],
      },
    },
  },
});
