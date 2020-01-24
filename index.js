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
    "sort-destructure-keys"
  ].map(n => require.resolve(`./${n}`))
};
