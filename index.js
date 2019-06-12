module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
    commonjs: true,
  },
  globals: {
    // Add some globals for Jest.
    describe: "readonly",
    it: "readonly",
    test: "readonly",
    expect: "readonly",
    shallow: "readonly",
    mount: "readonly",
    render: "readonly",
  },
  parserOptions: {
    ecmaVersion: "2018",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      globalReturn: false,
      impliedStrict: true,
    },
  },
  extends: [
    "./rules/react",
    "./rules/base",
    "./rules/import",
  ].map(require.resolve)
}
