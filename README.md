# Eslint Config

Preset configs for eslint environments. Each config can be used as a top-level
configuration (no extending needed).

## Installation

```bash
yarn add @alexseitsinger/eslint-config
```

## Presets

Name                         | Plugins Configured
---                          | ---
javascript                   | eslint, eslint-comments, node, jsdoc
javascriptReact              | (javascript), react, react-hooks
javascriptReactRedux         | (javascriptReact), react-redux, redux-saga
typescript                   | eslint, eslint-comments, node, @typescript-eslint, tsdoc
typescriptReact              | (typescript), react, react-hooks
typescriptReactRedux         | (typescriptReact), react-redux, redux-saga
markdownJavascript           | (javascript), markdown
markdownJavascriptReact      | (javascriptReact), markdown
markdownJavascriptReactRedux | (javascriptReactRedux), markdown
markdownTypescript           | (typescript), markdown
markdownTypescriptReact      | (typescriptReact), markdown
markdownTypescriptReactRedux | (typescriptReactRedux), markdown
packageJson                  | package-json

## Example

```javascript
// .eslintrc.js
const configs = require("@alexseitsinger/eslint-config")

module.exports = {
  overrides: [
    {
      files: ["*.md"],
      ...configs.markdownJavascript,
    },
    {
      files: ["*.js", "*.jsx"],
      ...configs.javascriptReact,
    },
    {
      files: ["*.ts", "*.tsx"],
      ...configs.typescriptReact,
    },
  ],
}
```
