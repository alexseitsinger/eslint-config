const eslintRules = require("./rules/eslint")
const eslintCommentsRules = require("./rules/eslint-comments")
const nodeRules = require("./rules/node")
const importRules = require("./rules/import")
const prettierRules = require("./rules/prettier")
const packageRules = require("./rules/package-json")
const markdownRules = require("./rules/markdown")

const parserOptions = {
  ecmaVersion: 2020,
  sourceType: "module",
}

const plugins = ["eslint-comments", "node", "import", "prettier"]
const extended = ["prettier", "prettier/babel"]

const enabled = {
  ...eslintRules.enabled,
  ...eslintCommentsRules.enabled,
  ...nodeRules.enabled,
  ...importRules.enabled,
  ...prettierRules.enabled,
}

const disabled = {
  ...eslintRules.disabled,
  ...eslintCommentsRules.disabled,
  ...nodeRules.disabled,
  ...importRules.disabled,
  ...prettierRules.disabled,
}

module.exports = {
  overrides: [
    {
      files: ["*.js"],
      parserOptions,
      plugins,
      rules: {
        ...enabled,
        ...disabled,
      },
      extends: [...extended],
    },
    {
      files: ["*.md"],
      plugins: [...plugins, "markdown"],
      rules: {
        ...enabled,
        ...markdownRules.enabled,
        ...disabled,
        ...markdownRules.disabled,
      },
      extends: [...extended],
    },
    {
      files: ["package.json"],
      plugins: ["package-json"],
      rules: {
        ...packageRules.enabled,
        ...packageRules.disabled,
      },
    },
  ],
}
