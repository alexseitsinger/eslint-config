const _ = require("underscore")
const deepMerge = require("deepmerge")

const pluginOrder = [
  "eslint",
  "eslint-comments",
  "node",
  "import",
  "simple-import-sort",
  "promise",
  "unicorn",
  "security",
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
  "json",
  "package-json",
]

const pluginNameMap = {
  "@typescript-eslint": "@typescript-eslint/eslint-plugin",
}

function getPluginName(ruleFileName) {
  if (ruleFileName in pluginNameMap) {
    return pluginNameMap[String(ruleFileName)]
  }
  return ruleFileName
}

const directoryNameMap = {
  "@typescript-eslint/eslint-plugin": "@typescript-eslint",
}

function getDirectoryName(pluginName) {
  if (pluginName in directoryNameMap) {
    return directoryNameMap[String(pluginName)]
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
  /* eslint-disable security/detect-non-literal-require */
  return require(`./plugins/${target}/patches.js`)
  /* eslint-enable security/detect-non-literal-require */
}

function getRules(pluginName) {
  const target = getDirectoryName(pluginName)
  /* eslint-disable security/detect-non-literal-require */
  return require(`./plugins/${target}/rules.js`)
  /* eslint-enable security/detect-non-literal-require */
}

function getOptions(pluginName) {
  const target = getDirectoryName(pluginName)
  /* eslint-disable security/detect-non-literal-require */
  return require(`./plugins/${target}/options.js`)
  /* eslint-enable security/detect-non-literal-require */
}

function sortPlugins(array) {
  return sortArray(
    _.uniq(array)
      .filter(n => n !== "eslint")
      .map(n => getPluginName(n)),
    pluginOrder
  )
}

const defaultPlugins = [
  "eslint",
  "eslint-comments",
  "node",
  "import",
  "simple-import-sort",
  "sort-destructure-keys",
  "promise",
  "unicorn",
  "security",
]

function createConfig(pluginNames, useDefaults = true) {
  let config = {
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
    },
    plugins: sortPlugins([
      ...(useDefaults ? defaultPlugins : []),
      ...pluginNames,
    ]),
    rules: useDefaults ? getRules("eslint") : {},
    settings: {},
    env: {},
  }

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
            ...newPatches[String(forPlugin)],
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
   * After rulesets are populated, load options and patches for eslint, first.
   */
  if (useDefaults) {
    config = deepMerge(config, getOptions("eslint"))
    config.env = {
      ...config.env,
      browser: true,
      node: true,
      es6: true,
    }
    config.rules = {
      ...config.rules,
      ...getPatchesForPlugin("eslint"),
    }
  }

  /**
   * Then load each ruleset in order.
   */
  sortArray(Object.keys(ruleSets), pluginOrder).forEach(pluginName => {
    const ruleSet = ruleSets[String(pluginName)]
    config = deepMerge(config, ruleSet.options)
    config.rules = {
      ...config.rules,
      ...ruleSet.rules,
      ...getPatchesForPlugin(pluginName),
    }
  })

  /**
   * Finall,y remove duplicate settings.
   */
  Object.keys(config.settings).forEach(key => {
    if (Array.isArray(config.settings[String(key)])) {
      config.settings[String(key)] = _.uniq(config.settings[String(key)])
    }
  })

  return config
}

module.exports = createConfig
