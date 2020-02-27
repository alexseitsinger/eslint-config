const markdownConfig = require("./.eslintrc-markdown");
const packageConfig = require("./.eslintrc-package");
const javascriptConfig = require("./.eslintrc-javascript");

module.exports = {
  overrides: [
    {
      files: ["*.js"],
      ...javascriptConfig
    },
    {
      files: ["*.md"],
      ...markdownConfig
    },
    {
      files: ["package.json"],
      ...packageConfig
    }
  ]
};
