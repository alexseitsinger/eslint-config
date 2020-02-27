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
  "markdown",
  "@typescript-eslint",
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

/**
 * @example
 * @param targets
 * @param order
 */

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

module.exports = function factory(groups = []) {
  let settings = {}
  let plugins = ["eslint-comments", "node"]
  let rules = {
    ...require("./rules/eslint").rules,
    ...require("./rules/eslint-comments").rules,
    ...require("./rules/node").rules,
  }
  let parser = "espree"
  let parserOptions = {
    ecmaVersion: 2020,
    sourceType: "module",
  }
  let ecmaFeatures = {}
  let extending = ["prettier", "prettier/babel"]

  let disabledRules = []

  const sortedGroups = sortArray(groups, pluginOrder)
  sortedGroups.forEach(g => {
    const groupName = getGroupName(g)
    const m = require(`./groups/${groupName}`)

    if (m.extending) {
      extending = [...extending, ...m.extending]
    }

    settings = {
      ...settings,
      ...m.settings,
    }

    const sortedPlugins = sortArray(m.plugins, pluginOrder)
    sortedPlugins.forEach(n => {
      const pluginName = getPluginName(n)
      // Add each plugin in correct order.
      plugins = sortArray([...plugins, pluginName], pluginOrder)

      const pluginRules = require(`./rules/${pluginName}`)

      // save the disabled to apply after all rules have been added.
      disabledRules = { ...disabledRules, ...pluginRules.disabled }

      rules = { ...rules, ...pluginRules.rules }
    })

    // Apply the disabled.
    Object.keys(disabledRules).forEach(ruleName => {
      rules = {
        ...rules,
        [ruleName]: disabledRules[ruleName],
      }
    })

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

    if (m.parser) {
      parser = m.parser
    }
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
