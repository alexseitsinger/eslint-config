const eslintRules = require("./rules/eslint")
const eslintCommentsRules = require("./rules/eslint-comments")
const nodeRules = require("./rules/node")
const importRules = require("./rules/import")
const packageRules = require("./rules/package-json")
const markdownRules = require("./rules/markdown")

const parserOptions = {
  ecmaVersion: 2020,
  sourceType: "module",
}
const plugins = ["eslint-comments", "node", "import"]
const rules = {
  enabled: {
    // Enabled rules...
    ...eslintRules.enabled,
    ...eslintCommentsRules.enabled,
    ...nodeRules.enabled,
    ...importRules.enabled,
  },
  disabled: {
    // Disabled rules...
    ...eslintRules.disabled,
    ...eslintCommentsRules.disabled,
    ...nodeRules.disabled,
    ...importRules.disabled,
  },
}
const env = {
  node: true,
}

module.exports = {
  overrides: [
    {
      files: ["*.js"],
      env,
      parserOptions,
      plugins,
      rules: {
        ...rules.enabled,
        ...rules.disabled,
      },
    },
    {
      files: ["*.md"],
      env,
      parserOptions,
      plugins: [...plugins, "markdown"],
      rules: {
        ...rules.enabled,
        ...markdownRules.enabled,
        ...rules.disabled,
        ...markdownRules.disabled,
      },
    },
    {
      files: ["package.json"],
      parserOptions,
      env,
      plugins: ["package-json"],
      rules: {
        ...packageRules.enabled,
        ...packageRules.disabled,
      },
    },
  ],
}
