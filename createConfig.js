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
  "filenames",
  "emotion",
  "prettier",
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
  "spellcheck",
  "package-json"
]

const pluginNameMap = {
  "@typescript-eslint": "@typescript-eslint/eslint-plugin"
}

function getPluginName(ruleFileName) {
  if (ruleFileName in pluginNameMap) {
    return pluginNameMap[ruleFileName]
  }
  return ruleFileName
}

const directoryNameMap = {
  "@typescript-eslint/eslint-plugin": "@typescript-eslint"
}

function getDirectoryName(pluginName) {
  if (pluginName in directoryNameMap) {
    return directoryNameMap[pluginName]
  }
  return pluginName
}

function sortArray(targets, order) {
  return targets.sort((a, b) => {
    if (order.indexOf(a) > order.indexOf(b)) {
      return -1
    }
    return 1
  })
}

function getPatches(pluginName) {
  const target = getDirectoryName(pluginName)
  return require(`./plugins/${target}/patches.js`)
}

function getRules(pluginName) {
  const target = getDirectoryName(pluginName)
  return require(`./plugins/${target}/rules.js`)
}

function getOptions(pluginName) {
  const target = getDirectoryName(pluginName)
  return require(`./plugins/${target}/options.js`)
}

const defaultPlugins = [
  "eslint",
  "eslint-comments",
  "node",
  "import",
  "simple-import-sort",
  "sort-destructure-keys"
]

function createConfig(pluginNames) {
  let config = {
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module"
    },
    plugins: sortArray(
      _.uniq(
        [...defaultPlugins, ...pluginNames]
          .filter(n => n !== "eslint")
          .map(n => getPluginName(n))
      ),
      pluginOrder
    ),
    rules: getRules("eslint"),
    settings: {},
    env: {
      browser: true,
      node: true,
      es6: true
    }
  }

  // Load default settings.
  defaultPlugins.forEach(n => {
    config = deepMerge(config, getOptions(n))
  })

  let ruleSets = {}

  function getPatchesForPlugin(forPlugin) {
    let patches = {}
    Object.keys(ruleSets)
      .filter(n => n !== forPlugin)
      .forEach(fromPlugin => {
        const newPatches = getPatches(fromPlugin)
        if (forPlugin in newPatches) {
          patches = {
            ...patches,
            ...newPatches[forPlugin]
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
        options: getOptions(pluginName)
      }
    }
  })

  /**
   * Load patches for eslint from the ruleset first.
   */
  config.rules = {
    ...config.rules,
    ...getPatchesForPlugin("eslint")
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
      ...getPatchesForPlugin(pluginName)
    }
  })

  /**
   * Remove duplicate settings.
   */
  Object.keys(config.settings).forEach(key => {
    if (Array.isArray(config.settings[key])) {
      config.settings[key] = _.uniq(config.settings[key])
    }
  })

  return config
}

module.exports = createConfig
