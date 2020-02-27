const coreRules = require("../lib/rulesets/core")
const commonRules = require("../lib/rulesets/common")
const reactRules = require("../lib/rulesets/react")
const typescriptRules = require("../lib/rulesets/typescript")
const reduxRules = require("../lib/rulesets/redux")

const importSettings = require("../lib/settings/import")
const reactSettings = require("../lib/settings/react")

const corePlugins = require("../lib/plugins/core")
const commonPlugins = require("../lib/plugins/common")
const reactPlugins = require("../lib/plugins/react")
const typescriptPlugins = require("../lib/plugins/typescript")
const reduxPlugins = require("../lib/plugins/redux")

const defaults = require("../lib/defaults")

module.exports = {
  ...defaults,
  parser: "@typescript-eslint/parser",
  settings: {
    ...importSettings,
    ...reactSettings,
  },
  plugins: [
    ...corePlugins,
    ...commonPlugins,
    ...reactPlugins,
    ...reduxPlugins,
    ...typescriptPlugins,
  ],
  rules: {
    ...coreRules,
    ...commonRules,
    ...reactRules,
    ...reduxRules,
    ...typescriptRules,
  },
}
