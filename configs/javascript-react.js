const coreRules = require("../lib/rulesets/core")
const commonRules = require("../lib/rulesets/common")
const javascriptRules = require("../lib/rulesets/javascript")
const reactRules = require("../lib/rulesets/react")

const importSettings = require("../lib/settings/import")

const corePlugins = require("../lib/plugins/core")
const commonPlugins = require("../lib/plugins/common")
const javascriptPlugins = require("../lib/plugins/javascript")
const reactPlugins = require("../lib/plugins/react")

const defaults = require("../lib/defaults")

module.exports = {
  ...defaults,
  settings: {
    ...importSettings,
  },
  plugins: [
    ...corePlugins,
    ...commonPlugins,
    ...reactPlugins,
    ...javascriptPlugins,
  ],
  rules: {
    ...coreRules,
    ...commonRules,
    ...reactRules,
    ...javascriptRules,
  },
}
