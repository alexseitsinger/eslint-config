const eslintRules = require("./rules/eslint")
const eslintCommentsRules = require("./rules/eslint-comments")
const nodeRules = require("./rules/node")
const importRules = require("./rules/import")
const prettierRules = require("./rules/prettier")

const extendedOrder = [
  "prettier",
  "prettier/babel",
  "prettier/react",
  "prettier/@typescript-eslint",
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
  "@typescript-eslint",
  "markdown",
  "tsdoc",
  "package-json",
  "prettier",
]

const pluginNameMap = {
  typescript: "@typescript-eslint",
}

const groupNameMap = {
  "@typescript-eslint": "typescript",
}

function getPluginName(n) {
  if (n in pluginNameMap) {
    return pluginNameMap[n]
  }
  return n
}

function getGroupName(n) {
  if (n in groupNameMap) {
    return groupNameMap[n]
  }
  return n
}

function sortFunc(a, b, order) {
  return order.indexOf(a[1]) - order.indexOf(b[1])
}

function sortArray(targets, order) {
  return targets.sort((a, b) => sortFunc(a, b, order))
}

function sortRules(rules) {
  let sortedRules = {}
  let pluginRules = {}

  Object.keys(rules).forEach(ruleName => {
    const ruleValue = rules[ruleName]

    const pluginName = ruleName.split("/").shift()

    if (!(pluginName in pluginRules)) {
      pluginRules[pluginName] = {}
    }

    pluginRules = {
      ...pluginRules,
      [pluginName]: {
        ...pluginRules[pluginName],
        [ruleName]: ruleValue,
      },
    }
  })

  const pluginNames = Object.keys(pluginRules)
  const sortedPluginNames = sortArray(pluginNames, pluginOrder)

  sortedPluginNames.forEach(pluginName => {
    sortedRules = {
      ...sortedRules,
      ...pluginRules[pluginName],
    }
  })

  return sortedRules
}

const defaults = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["eslint-comments", "node", "import", "prettier"],
  enabledRules: {
    ...eslintRules.enabled,
    ...eslintCommentsRules.enabled,
    ...nodeRules.enabled,
    ...importRules.enabled,
    ...prettierRules.enabled,
  },
  disabledRules: {
    ...eslintRules.disabled,
    ...eslintCommentsRules.disabled,
    ...nodeRules.disabled,
    ...importRules.disabled,
    ...prettierRules.disabled,
  },
  extends: ["prettier", "prettier/babel"],
}

module.exports = function factory(groups = []) {
  let plugins = [...defaults.plugins]
  let settings = { ...defaults.settings }
  let disabledRules = { ...defaults.disabledRules }
  let enabledRules = { ...defaults.enabledRules }
  let parser = "espree"
  let parserOptions = { ...defaults.parserOptions }
  let ecmaFeatures = {}
  let extending = [...defaults.extends]

  sortArray(groups, pluginOrder).forEach(g => {
    const groupName = getGroupName(g)
    const m = require(`./groups/${groupName}`)

    if (m.parser) {
      parser = m.parser
    }

    if (m.parserOptions) {
      parserOptions = {
        ...parserOptions,
        ...m.parserOptions,
      }
    }

    if (m.ecmaFeatures) {
      ecmaFeatures = {
        ...ecmaFeatures,
        ...m.ecmaFeatures,
      }
    }

    if (m.settings) {
      settings = {
        ...settings,
        ...m.settings,
      }
    }

    if (m.extending) {
      extending = [...extending, ...m.extending]
    }

    const remainingPlugins = m.plugins.filter(n => !plugins.includes(n))
    sortArray(remainingPlugins, pluginOrder).forEach(n => {
      const pluginName = getPluginName(n)
      // Add each plugin in correct order.
      plugins = sortArray([...plugins, pluginName], pluginOrder)

      // save the disabled to apply after all rules have been added.
      const pluginRules = require(`./rules/${pluginName}`)
      disabledRules = { ...disabledRules, ...pluginRules.disabled }
      enabledRules = { ...rules, ...pluginRules.enabled }
    })

    // Apply the disabled rules to the enabled rules.
    Object.keys(disabledRules).forEach(ruleName => {
      enabledRules = {
        ...enabledRules,
        [ruleName]: disabledRules[ruleName],
      }
    })
  })

  return {
    parser,
    parserOptions: {
      ...parserOptions,
      ecmaFeatures: {
        ...ecmaFeatures,
      },
    },
    env: {
      node: true,
      browser: true,
      es6: true,
      jest: true,
    },
    settings,
    plugins,
    rules: sortRules(rules),
    extends: sortArray(extending, extendedOrder),
  }
}
