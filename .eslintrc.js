const pkgConfig = require("./configs/package-json")
const jsConfig = require("./configs/javascript")

module.exports = {
  overrides: [
    {
      files: ["*.js", "*.md"],
      ...jsConfig,
    },
    {
      files: ["package.json"],
      ...pkgConfig,
    },
  ],
}
