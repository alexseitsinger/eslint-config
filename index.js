module.exports = {
  parserOptions: {
    ecmaVersion: 9,
    sourceType: "module"
  },
  extends: [
    ...[
      "core",
      "import",
      "node",
      "package-json",
      "ban",
      "react",
      "react-hooks",
      "react-redux",
      "redux-saga",
      "jest",
      "jest-formatting",
      "simple-import-sort"
    ].map(configName => require.resolve(`./configs/${configName}`))
  ]
}
