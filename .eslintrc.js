const configs = require(".")

module.exports = {
  overrides: [
    {
      files: ["package.json"],
      ...configs.jsonPackage,
    },
    {
      files: ["*.js"],
      ...configs.javascript,
      rules: {
        ...configs.javascript.rules,
        "max-lines": "off",
      },
    },
    {
      files: ["*.md"],
      ...configs.markdownJavascript,
    },
  ],
}
