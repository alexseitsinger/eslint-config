module.exports = {
  parserOptions: {
    ecmaVersion: 9,
    sourceType: "module"
  },
  extends: [
    "eslint",
    "package-json",
    "import",
    "node",
    "jest",
    "jest-formatting",
    "react",
    "react-redux",
    "typescript-eslint",
    "simple-import-sort"
  ].map(n => require.resolve(`./${n}`))
};
