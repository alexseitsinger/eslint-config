const deepMerge = require("deepmerge")

const eslintRules = require("./rules/eslint")

const groupOrder = [
  "javascript",
  "react",
  "redux",
  "typescript",
  "markdown",
  "package-json",
]

const pluginOrder = [
  "eslint",
  "eslint-comments",
  "node",
  "import",
  "simple-import-sort",
  "sort-destructure-keys",
  "better-styled-components",
  "prefer-ternary",
  "jest",
  "jest-formatting",
  "react",
  "react-hooks",
  "react-redux",
  "redux-saga",
  "jsdoc",
  "@typescript-eslint/eslint-plugin",
  "markdown",
  "tsdoc",
  "package-json",
]

const ruleNameMap = {
  "@typescript-eslint/eslint-plugin": "@typescript-eslint",
}

function getRuleName(pn) {
  if (pn in ruleNameMap) {
    return ruleNameMap[pn]
  }
  return pn
}

function sortArray(targets, order) {
  return targets.sort((a, b) => {
    if (order.indexOf(a) > order.indexOf(b)) {
      return -1
    }
    return 1
  })
}

const defaults = {
  parser: "espree",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {},
  },
  plugins: [
    "eslint-comments",
    "node",
    "import",
    "simple-import-sort",
    "sort-destructure-keys",
  ],
  settings: {
    "import/core-modules": ["fs", "path", "child_process"],
    "import/ignore": ["node_modules", ".yalc"],
    "import/external-module-folders": ["node_modules", ".yalc"],
  },
  rules: {
    ...eslintRules.enabled,
    ...eslintRules.disabled,
  },
  env: {
    node: true,
    browser: true,
    es6: true,
    jest: true,
  },
}

module.exports = function factory(groups = []) {
  let plugins = [...defaults.plugins]
  let settings = { ...defaults.settings }
  let rules = { ...defaults.rules }
  let { parser } = defaults
  let parserOptions = { ...defaults.parserOptions }
  const env = { ...defaults.env }

  // Sort the group names in the same order as the plugins.
  sortArray(groups, groupOrder).forEach(groupName => {
    const m = require(`./groups/${groupName}`)
    parser = m.parser ? m.parser : parser
    parserOptions = deepMerge(
      parserOptions,
      m.parserOptions ? m.parserOptions : {}
    )
    settings = deepMerge(settings, m.settings ? m.settings : {})
    plugins = sortArray([...plugins, ...m.plugins], pluginOrder)
  })

  // For each plugin, load its rules into its own object.
  const rulesPer = {}

  sortArray(plugins, pluginOrder).forEach(pluginName => {
    const ruleName = getRuleName(pluginName)
    const { enabled, disabled } = require(`./rules/${ruleName}`)
    rulesPer[pluginName] = { enabled, disabled }
  })

  // Then, in the order that plugins are listed...
  const pluginNames = sortArray(Object.keys(rulesPer), pluginOrder)

  // Merge the enabled rules into the rules object.
  pluginNames.forEach(pluginName => {
    rules = deepMerge(rules, rulesPer[pluginName].enabled)
  })

  // Then merge disabled rules for each.
  pluginNames.forEach(pluginName => {
    rules = deepMerge(rules, rulesPer[pluginName].disabled)
  })

  return {
    parser,
    parserOptions,
    env,
    settings,
    plugins,
    rules,
  }
}
