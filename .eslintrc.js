const configs = require(".")

module.exports = {
  overrides: [
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
    {
      files: ["package.json"],
      ...configs.jsonPackage,
    },
  ],
}
