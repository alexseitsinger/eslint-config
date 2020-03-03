const _ = require("underscore")
const deepMerge = require("deepmerge")

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
  "tsdoc",
  "markdown",
  "package-json",
]

const pluginNameMap = {
  "@typescript-eslint": "@typescript-eslint/eslint-plugin",
}

/**
 * @example
 * @param ruleFileName
 */
function getPluginName(ruleFileName) {
  if (ruleFileName in pluginNameMap) {
    return pluginNameMap[ruleFileName]
  }
  return ruleFileName
}

const directoryNameMap = {
  "@typescript-eslint/eslint-plugin": "@typescript-eslint",
}

/**
 * @example
 * @param pluginName
 */
function getDirectoryName(pluginName) {
  if (pluginName in directoryNameMap) {
    return directoryNameMap[pluginName]
  }
  return pluginName
}

/**
 * @description
 * Returns an array in the order specified.
 * @example
 * sortArray([a, b, c], [c, b, a])
 * @param targets
 * @param order
 * @returns [].
 */
function sortArray(targets, order) {
  return targets.sort((a, b) => {
    if (order.indexOf(a) > order.indexOf(b)) {
      return -1
    }
    return 1
  })
}

/**
 * @example
 * @param pluginName
 */
function getPatches(pluginName) {
  const target = getDirectoryName(pluginName)
  return require(`./rules/${target}/patches.js`)
}

/**
 * @example
 * @param pluginName
 */
function getRules(pluginName) {
  const target = getDirectoryName(pluginName)
  return require(`./rules/${target}/rules.js`)
}

/**
 * @example
 * @param pluginName
 */
function getOptions(pluginName) {
  const target = getDirectoryName(pluginName)
  return require(`./rules/${target}/options.js`)
}

module.exports = function createConfig(pluginNames) {
  let config = {
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
    },
    plugins: sortArray(
      _.uniq([
        "eslint-comments",
        "node",
        "import",
        "simple-import-sort",
        "sort-destructure-keys",
        ...pluginNames.filter(n => n !== "eslint").map(n => getPluginName(n)),
      ]),
      pluginOrder
    ),
    rules: {
      ...getRules("eslint"),
    },
    env: {
      browser: true,
      node: true,
      es6: true,
    },
  }

  let ruleSets = {}

  /**
   * @example
   * @param forPlugin
   */
  function getPatchesForPlugin(forPlugin) {
    let patches = {}
    Object.keys(ruleSets)
      .filter(n => n !== forPlugin)
      .forEach(fromPlugin => {
        const newPatches = getPatches(fromPlugin)
        if (forPlugin in newPatches) {
          patches = {
            ...patches,
            ...newPatches[forPlugin],
          }
        }
      })
    return patches
  }

  /**
   * Load the rulesets for each plugin.
   */
  config.plugins.forEach(pluginName => {
    ruleSets = {
      ...ruleSets,
      [pluginName]: {
        rules: getRules(pluginName),
        patches: getPatches(pluginName),
        options: getOptions(pluginName),
      },
    }
  })

  /**
   * Load patches for eslint from the ruleset first.
   */
  config.rules = {
    ...config.rules,
    ...getPatchesForPlugin("eslint"),
  }

  /**
   * Apply each ruleset in order.
   */
  sortArray(Object.keys(ruleSets), pluginOrder).forEach(pluginName => {
    const ruleSet = ruleSets[pluginName]
    config = deepMerge(config, ruleSet.options)
    config.rules = {
      ...config.rules,
      ...ruleSet.rules,
      ...getPatchesForPlugin(pluginName),
    }
  })

  return config
}
