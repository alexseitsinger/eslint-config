const { createConfig, getRules } = require("./create-config")

const imports = ["import", "simple-import-sort", "unused-imports"]
const testing = ["jest", "jest-formatting"]
const react = [
  "react",
  "react-hooks",
  "better-styled-components",
  "react-perf",
  ...testing,
]
const redux = ["react-redux", "redux-saga"]

const base = []
const javascriptBase = [...base, ...imports]
const typescriptBase = [
  ...base,
  ...imports,
  "tsdoc",
  "@typescript-eslint/eslint-plugin",
  "jsx-falsy",
]

module.exports = {
  createConfig,
  getRules,
  defaultsOnly: createConfig(base),
  javascript: createConfig(javascriptBase),
  javascriptReact: createConfig([...javascriptBase, ...react]),
  javascriptReactRedux: createConfig([...javascriptBase, ...react, ...redux]),
  typescript: createConfig(typescriptBase),
  typescriptReact: createConfig([...typescriptBase, ...react]),
  typescriptReactRedux: createConfig([...typescriptBase, ...react, ...redux]),
  markdown: createConfig(["markdown"]),
  markdownTypescript: createConfig([...typescriptBase, "markdown"]),
  markdownTypescriptReact: createConfig([
    ...typescriptBase,
    ...react,
    "markdown",
  ]),
  markdownTypescriptReactRedux: createConfig([
    ...typescriptBase,
    ...react,
    ...redux,
    "markdown",
  ]),
  markdownJavascript: createConfig([...javascriptBase, "markdown"]),
  markdownJavascriptReact: createConfig([
    ...javascriptBase,
    ...react,
    "markdown",
  ]),
  markdownJavascriptReactRedux: createConfig([
    ...javascriptBase,
    ...react,
    ...redux,
    "markdown",
  ]),
  json: createConfig(["json"], false),
  jsonPackage: createConfig(["package-json"], false),
}
