const coreRules = require("../lib/rulesets/core")
const packageJsonRules = require("../lib/rules/package-json")
const corePlugins = require("../lib/plugins/core")
const defaults = require("../lib/defaults")

module.exports = {
  ...defaults,
  plugins: [...corePlugins, "package-json"],
  rules: {
    ...coreRules,
    ...packageJsonRules,
  },
}
