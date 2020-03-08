const _ = require("underscore")
const deepMerge = require("deepmerge")

const defaultPlugins = [
  "eslint",
  "eslint-comments",
  "node",
  "sort-requires",
  "promise",
  "unicorn",
  "security",
  "sort-destructure-keys",
  "no-loops",
  "return-early-dont-assign",
  //"sort-class-members",
]

const pluginOrder = [
  "eslint",
  "eslint-comments",
  "babel",
  "node",
  "sort-requires",
  "import",
  "simple-import-sort",
  "unused-imports",
  "promise",
  "unicorn",
  "security",
  // Plugin is broken
  //"align-assignments",
  "sort-destructure-keys",
  "sort-class-members",
  "better-styled-components",
  "no-loops",
  "prefer-ternary",
  "return-early-dont-assign",
  "filenames",
  "emotion",
  "prettier",
  "jest",
  "jest-formatting",
  "react",
  "react-perf",
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

const typescriptPluginNames = ["@typescript-eslint/eslint-plugin"]

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

function getPatches(pluginName, isTypescript = false) {
  const target = getDirectoryName(pluginName)
  /* eslint-disable security/detect-non-literal-require */
  const module_ = require(`./plugins/${target}/patches.js`)
  /* eslint-enable security/detect-non-literal-require */
  if (shouldUseLanguage(module_)) {
    if (isTypescript) {
      return module_.typescript
    }
    return module_.javascript
  }
  return module_
}

function shouldUseLanguage(module_) {
  const keys = Object.keys(module_)
  return (
    keys.length === 2
    && keys.includes("javascript")
    && keys.includes("typescript")
  )
}

function usesTypescript(pluginNames) {
  return pluginNames
    .map(pluginName => {
      const target = getPluginName(pluginName)
      return typescriptPluginNames.includes(target)
    })
    .includes(true)
}

function getRules(pluginName, isTypescript = false) {
  const target = getDirectoryName(pluginName)
  /* eslint-disable security/detect-non-literal-require */
  const module_ = require(`./plugins/${target}/rules.js`)
  /* eslint-enable security/detect-non-literal-require */
  if (shouldUseLanguage(module_)) {
    if (isTypescript) {
      return module_.typescript
    }
    return module_.javascript
  }
  return module_
}

function getOptions(pluginName, isTypescript = false) {
  const target = getDirectoryName(pluginName)
  /* eslint-disable security/detect-non-literal-require */
  const module_ = require(`./plugins/${target}/options.js`)
  /* eslint-enable security/detect-non-literal-require */
  if (shouldUseLanguage(module_)) {
    if (isTypescript) {
      return module_.typescript
    }
    return module_.javascript
  }
  return module_
}

function sortPlugins(array) {
  return sortArray(
    _.uniq(array)
      .filter(n => n !== "eslint")
      .map(n => getPluginName(n)),
    pluginOrder
  )
}

function createConfig(pluginNames, useDefaults = true) {
  const plugins = sortPlugins([
    ...(useDefaults ? defaultPlugins : []),
    ...pluginNames,
  ])

  const isTypescript = usesTypescript(plugins)

  let config = {
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
    },
    plugins,
    rules: useDefaults ? getRules("eslint", isTypescript) : {},
    settings: {},
    env: {},
  }

  let ruleSets = {}
  function getPatchesForPlugin(forPlugin) {
    let patches = {}
    Object.keys(ruleSets)
      .filter(n => n !== forPlugin)
      .forEach(fromPlugin => {
        const newPatches = getPatches(fromPlugin, isTypescript)
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
        rules: getRules(pluginName, isTypescript),
        patches: getPatches(pluginName, isTypescript),
        options: getOptions(pluginName, isTypescript),
      },
    }
  })

  /**
   * After rulesets are populated, load options and patches for eslint, first.
   */
  if (useDefaults) {
    config = deepMerge(config, getOptions("eslint", isTypescript))
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

module.exports = {
  createConfig,
  getRules,
}
