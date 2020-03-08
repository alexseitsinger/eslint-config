# Eslint Config

Preset configurations for various environments. Presets can be loaded directly
instead of extending, or a new config can be created using the exported
`create` method.

## Installation

```bash
yarn add @alexseitsinger/eslint-config
```

## Exports

#### createConfig

Returns a complete eslint config using the rules for the specified plugins. All configs come with certain plugins automatically, so no need to specify them.

Plugins Included:
1. eslint
2. eslint-comments
3. node
4. sort-requires
5. sort-destructure-keys
6. promise
7. unicorn
8. security
9. no-loops
10. return-early-no-assign

```javascript
const reactConfig = createConfig([
  "react", "react-hooks",
])

module.exports = {
  overrides: [
    {
      files: ["*.js", "*.jsx"],
      ...reactConfig,
    },
  ]
}
```

#### getRules

Returns the ruleset for a plugin (patches, options, rules). The second arguments specifies if its a typescript plugin, or not (default: false).

```javascript
const reactRules = getRules("react", false)
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
