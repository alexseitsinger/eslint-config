const configs = require(".")

module.exports = {
  overrides: [
    {
      files: ["*.js"],
      ...configs.javascript,
    },
    {
      files: ["*.md"],
      ...configs.markdownJavascript,
    },
    {
      files: ["package.json"],
      ...configs.package,
    },
  ],
}
