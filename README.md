# Vue 3 / Typescript / Prettier / Eslint

![You shall not manually format code](image.png)

- Prettier

```JSON
{
  /* default values v3.0.3 */
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": false,
  "quoteProps": "as-needed",
  "jsxSingleQuote": false,
  "trailingComma": "all",
  "bracketSpacing": true,
  "bracketSameLine": false,
  "arrowParens": "always",
  "htmlWhitespaceSensitivity": "css",
  "endOfLine": "lf",
  "embeddedLanguageFormatting": "auto",
  "vueIndentScriptAndStyle": false,
  /* custom values */
  "singleAttributePerLine": true
}
```

- Eslint

```js
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
```

- .editorconfig

```INI
[*]
charset = utf-8
insert_final_newline = true
end_of_line = lf
indent_style = space
indent_size = 2
max_line_length = 80
```

- tsconfig.json

```JSON
{
  "compilerOptions": {
    // ...other settings

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noImplicitAny": true,
    "noImplicitReturns": true,
    "strictNullChecks": true
  },
  "include": [
    "src/**/*.ts",
    "src/**/*.d.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
    "vite.config.ts",
    ".eslintrc.cjs"
  ]
}
```

- extensions.json

```JSON
{
  "recommendations": [
    "Vue.volar",
    "Vue.vscode-typescript-vue-plugin",
    "tombonnike.vscode-status-bar-format-toggle",
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint"
  ]
}

```

- settings.json

```JSON
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": true
  },
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.formatOnType": true,
  "eslint.rules.customizations": [{ "rule": "*", "severity": "warn" }],
  "typescript.tsdk": "node_modules/typescript/lib"
}
```
