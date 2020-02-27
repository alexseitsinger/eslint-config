const coreRules = require("../lib/rulesets/core")
const commonRules = require("../lib/rulesets/common")
const typescriptRules = require("../lib/rulesets/typescript")

const importSettings = require("../lib/settings/import")

const corePlugins = require("../lib/plugins/core")
const commonPlugins = require("../lib/plugins/common")
const typescriptPlugins = require("../lib/plugins/typescript")

const defaults = require("../lib/defaults")

module.exports = {
  ...defaults,
  parser: "@typescript-eslint/parser",
  settings: {
    ...importSettings,
  },
  plugins: [...corePlugins, ...commonPlugins, ...typescriptPlugins],
  rules: {
    ...coreRules,
    ...commonRules,
    ...typescriptRules,
  },
}
