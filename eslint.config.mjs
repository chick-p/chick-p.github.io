import js from "@eslint/js";
import tseslint from "typescript-eslint";
import nextJsPlugin from "@next/eslint-plugin-next";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  {
    plugins: {
      "@next/next": nextJsPlugin,
    },
  },
  {
    ignores: [".next/*", "out/*"],
  },
];
