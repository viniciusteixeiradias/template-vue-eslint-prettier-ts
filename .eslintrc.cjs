/* eslint-env node */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/base",
    "plugin:vue/vue3-essential",
    "plugin:vue/vue3-recommended",
    "plugin:vue/vue3-strongly-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/strict-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "prettier",
  ],
  parser: "vue-eslint-parser",
  root: true,
  parserOptions: {
    project: true,
    sourceType: "module",
    ecmaVersion: "latest",
    tsconfigRootDir: __dirname,
    extraFileExtensions: [".vue"],
    parser: "@typescript-eslint/parser",
  },
  plugins: ["@typescript-eslint", "vue"],
  rules: {
    "no-console": ["error", { allow: ["error", "info", "warn"] }],
    "vue/max-attributes-per-line": "error",
    "logical-assignment-operators": "error",
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/prefer-as-const": "error",
  },
};
