import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
// import { defineConfig } from "eslint/config";
// import checker from "vite-plugin-checker";
// import { defineConfig } from "vite";

export default tseslint.config(
  {
    ignores: ["dist/**", "node_modules/**", "vite.config.mts"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "no-console": "off",
      "@typescript-eslint/no-explicit-any": "warn", 
    },
  },
);
