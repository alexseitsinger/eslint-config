const coreRules = require("../lib/rulesets/core")
const commonRules = require("../lib/rulesets/common")
const reactRules = require("../lib/rulesets/react")
const typescriptRules = require("../lib/rulesets/typescript")

const importSettings = require("../lib/settings/import")
const reactSettings = require("../lib/settings/react")
const typescriptSettings = require("../lib/settings/typescript")

const corePlugins = require("../lib/plugins/core")
const commonPlugins = require("../lib/plugins/common")
const reactPlugins = require("../lib/plugins/react")
const typescriptPlugins = require("../lib/plugins/typescript")

const defaults = require("../lib/defaults")

module.exports = {
  ...defaults,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ...defaults.parserOptions,
    project: "./tsconfig.json",
    tsconfigRootDir: ".",
  },
  settings: {
    ...importSettings,
    ...reactSettings,
    ...typescriptSettings,
  },
  plugins: [
    ...corePlugins,
    ...commonPlugins,
    ...reactPlugins,
    ...typescriptPlugins,
  ],
  rules: {
    ...coreRules,
    ...commonRules,
    ...reactRules,
    ...typescriptRules,
  },
}
