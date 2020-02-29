const factory = require("./factory")

const javascript = ["common", "javascript"]
const javascriptReact = [...javascript, "react"]
const javascriptReactRedux = [...javascriptReact, "redux"]
const typescript = ["common", "typescript"]
const typescriptReact = [...typescript, "react"]
const typescriptReactRedux = [...typescriptReact, "redux"]
const markdownTypescript = [...typescript, "markdown"]
const markdownTypescriptReact = [...typescriptReact, "markdown"]
const markdownTypescriptReactRedux = [...typescriptReactRedux, "markdown"]
const markdownJavascript = [...javascript, "markdown"]
const markdownJavascriptReact = [...javascriptReact, "markdown"]
const markdownJavascriptReactRedux = [...javascriptReactRedux, "markdown"]
const packageJson = ["package-json"]

module.exports = {
  javascript: factory(javascript),
  javascriptReact: factory(javascriptReact),
  javascriptReactRedux: factory(javascriptReactRedux),
  typescript: factory(typescript),
  typescriptReact: factory(typescriptReact),
  typescriptReactRedux: factory(typescriptReactRedux),
  markdownTypescript: factory(markdownTypescript),
  markdownTypescriptReact: factory(markdownTypescriptReact),
  markdownTypescriptReactRedux: factory(markdownTypescriptReactRedux),
  markdownJavascript: factory(markdownJavascript),
  markdownJavascriptReact: factory(markdownJavascriptReact),
  markdownJavascriptReactRedux: factory(markdownJavascriptReactRedux),
  packageJson: factory(packageJson),
}
