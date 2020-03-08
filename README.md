# Eslint Config

Preset configurations for various environments. Presets can be loaded directly
instead of extending, or a new config can be created using the exported
`create` method.

## Installation

```bash
yarn add @alexseitsinger/eslint-config
```

## Plugin Groups



Name        | Plugins Used
---         | ---
default     | eslint, eslint-comments, node, sort-requires, promise, unicorn, security, sort-destructure-keys, no-loops, return-early-dont-assign,
javascript  | none
testing     | jest, jest-formatting
react       | react, react-hooks, react-perf
redux       | react-redux, redux-saga
typescript  | tsdoc, @typescript-eslint/eslint-plugin, jsx-falsy
markdown    | markdown
jsonPackage | package-json
json        | json

## Preset Configurations

Name                         | Plugin Groups Included
---                          | ---
javascript                   | default, javascript
javascriptReact              | default, javascript, react
javascriptReactRedux         | default, javascript, react, redux
typescript                   | default, typescript
typescriptReact              | default, typescript, react,
typescriptReactRedux         | default, typescript, react, redux
markdownJavascript           | default, javascript, markdown
markdownJavascriptReact      | default, javascript, react, markdown
markdownJavascriptReactRedux | default, javascript, react, redux, markdown
markdownTypescript           | default, typescript, markdown
markdownTypescriptReact      | default, typescript, react, markdown
markdownTypescriptReactRedux | default, typescript, react, redux, markdown
jsonPackage                  | package-json
json                         | json

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
