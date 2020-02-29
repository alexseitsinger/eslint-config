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

  /**
   * Load the groups in the order that the plugins are listed.
   */
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

  /**
   * Create a new config for each plugins enabled and disabled rules.
   */
  const pluginRules = {}

  const getRulePatches = pluginName => {
    let patches = {}
    Object.keys(pluginRules)
      .filter(n => n !== pluginName)
      .forEach(key => {
        const obj = pluginRules[key]
        if (pluginName in obj.disabled) {
          patches = { ...patches, ...obj.disabled[pluginName] }
        }
      })
    return patches
  }

  /**
   * Save a rules config for each plugin we're using so we can merge them
   * correctly next.
   */
  sortArray(plugins, pluginOrder).forEach(pluginName => {
    const ruleName = getRuleName(pluginName)
    const { enabled, disabled } = require(`./rules/${ruleName}`)
    pluginRules[pluginName] = { enabled, disabled }
  })

  /**
   * Update the initial rules (plain eslint) with any eslint patches specified
   * in the rule configs for each plugin.
   */
  rules = deepMerge(rules, getRulePatches("eslint"))

  /**
   * Then, for each plugin, in order, load the enabled rules, then patch them
   * with any patches in other rule sets from the other plugins.
   */
  sortArray(Object.keys(pluginRules), pluginOrder).forEach(pluginName => {
    const obj = pluginRules[pluginName]
    const patchedRules = deepMerge(obj.enabled, getRulePatches(pluginName))
    deepMerge(rules, patchedRules)
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
