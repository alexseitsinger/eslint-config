module.exports = {
  parserOptions: {
    ecmaVersion: 9,
    sourceType: "module"
  },
  extends: [
    "eslint",
    "node",
    "import",
    "simple-import-sort",
    "package-json"
  ].map(n => require.resolve(`./${n}`))
};
