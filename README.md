# Eslint Config

Configs for various eslint plugins

### Installation

```bash
yarn add @alexseitsinger/eslint-config
```

### Example

To use the default configs (for js)

```javascript
module.exports = {
  root: true,
  plugins: ["node", "import", "simple-import-sort", "sort-destructure-keys"],
  extends: ["@alexseitsinger/eslint-config"]
};
```

To use specific plugin rules.

```javascript
module.exports = {
  root: true,
  plugins: [
    "node",
    "import",
    "simple-import-sort",
    "@typescript-eslint/eslint-plugin"
  ],
  extends: [
    "@alexseitsinger/eslint-config/eslint",
    "@alexseitsinger/eslint-config/node",
    "@alexseitsinger/eslint-config/import",
    "@alexseitsinger/eslint-config/simple-import-sort",
    "@alexseitsinger/eslint-config/typescript-eslint"
  ]
};
```
