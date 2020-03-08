const { createConfig, getRules } = require("./create-config")

const javascript = []
const typescript = ["tsdoc", "@typescript-eslint/eslint-plugin", "jsx-falsy"]
const imports = ["import", "simple-import-sort", "unused-imports"]
const testing = ["jest", "jest-formatting"]
const react = ["react", "react-hooks", "better-styled-components", "react-perf"]
const redux = ["react-redux", "redux-saga"]
const json = ["json"]

module.exports = {
  createConfig,
  getRules,
  javascript: createConfig([...javascript]),
  javascriptReact: createConfig([
    ...javascript,
    ...imports,
    ...testing,
    ...react,
  ]),
  javascriptReactRedux: createConfig([
    ...javascript,
    ...imports,
    ...testing,
    ...react,
    ...redux,
  ]),
  typescript: createConfig([...typescript, ...imports]),
  typescriptReact: createConfig([
    ...typescript,
    ...imports,
    ...testing,
    ...react,
  ]),
  typescriptReactRedux: createConfig([
    ...typescript,
    ...imports,
    ...testing,
    ...react,
    ...redux,
  ]),
  markdown: createConfig(["markdown"]),
  markdownTypescript: createConfig([...typescript, ...imports, "markdown"]),
  markdownTypescriptReact: createConfig([
    ...typescript,
    ...imports,
    ...react,
    "markdown",
  ]),
  markdownTypescriptReactRedux: createConfig([
    ...typescript,
    ...imports,
    ...react,
    ...redux,
    "markdown",
  ]),
  markdownJavascript: createConfig([...javascript, "markdown"]),
  markdownJavascriptReact: createConfig([
    ...javascript,
    ...imports,
    ...react,
    "markdown",
  ]),
  markdownJavascriptReactRedux: createConfig([
    ...javascript,
    ...imports,
    ...react,
    ...redux,
    "markdown",
  ]),
  json: createConfig([...json], false),
  jsonPackage: createConfig(["package-json"], false),
}
