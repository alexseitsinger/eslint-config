const coreRules = require("../lib/rulesets/core")
const commonRules = require("../lib/rulesets/common")
const javascriptRules = require("../lib/rulesets/javascript")
const markdownRules = require("../lib/rules/markdown")

const importSettings = require("../lib/settings/import")

const corePlugins = require("../lib/plugins/core")
const commonPlugins = require("../lib/plugins/common")
const javascriptPlugins = require("../lib/plugins/javascript")

const defaults = require("../lib/defaults")

module.exports = {
  ...defaults,
  parserOptions: {
    ...defaults.parserOptions,
    ecmaFeatures: {
      ...defaults.ecmaFeatures,
      impliedStrict: true,
    },
  },
  settings: {
    ...importSettings,
  },
  plugins: [...corePlugins, ...commonPlugins, ...javascriptPlugins, "markdown"],
  rules: {
    ...coreRules,
    ...commonRules,
    ...javascriptRules,
    ...markdownRules,
  },
}
