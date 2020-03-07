const createConfig = require("./create-config")

const testing = ["jest", "jest-formatting"]
const javascript = []
const react = ["react", "react-hooks", "better-styled-components"]
const typescript = ["tsdoc", "@typescript-eslint/eslint-plugin"]
const redux = ["react-redux", "redux-saga"]
const json = ["json"]

module.exports = {
  create: createConfig,
  javascript: createConfig([...javascript]),
  javascriptReact: createConfig([...javascript, ...testing, ...react]),
  javascriptReactRedux: createConfig([
    ...javascript,
    ...testing,
    ...react,
    ...redux,
  ]),
  typescript: createConfig([...typescript]),
  typescriptReact: createConfig([...typescript, ...testing, ...react]),
  typescriptReactRedux: createConfig([
    ...typescript,
    ...testing,
    ...react,
    ...redux,
  ]),
  markdown: createConfig(["markdown"]),
  markdownTypescript: createConfig([...typescript, "markdown"]),
  markdownTypescriptReact: createConfig([...typescript, ...react, "markdown"]),
  markdownTypescriptReactRedux: createConfig([
    ...typescript,
    ...react,
    ...redux,
    "markdown",
  ]),
  markdownJavascript: createConfig([...javascript, "markdown"]),
  markdownJavascriptReact: createConfig([...javascript, ...react, "markdown"]),
  markdownJavascriptReactRedux: createConfig([
    ...javascript,
    ...react,
    ...redux,
    "markdown",
  ]),
  json: createConfig([...json], false),
  jsonPackage: createConfig(["package-json"], false),
}
