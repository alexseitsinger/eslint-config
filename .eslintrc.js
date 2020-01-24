const markdownConfig = require("./.eslintrc.markdown");
const packageConfig = require("./.eslintrc.package");

module.exports = {
  parserOptions: {
    ecmaVersion: 9,
    sourceType: "module"
  },
  plugins: ["node"],
  extends: [
    require.resolve("./eslint"),
    require.resolve("./node"),
    "prettier",
    "prettier/babel"
  ],
  overrides: [
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
