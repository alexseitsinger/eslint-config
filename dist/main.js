module.exports = {
  env: {
    browser: true,
    node: true,
    commonjs: true,
    "shared-node-browser": true,
    es6: true,
    amd: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      globalReturn: false,
      impliedStrict: true,
    },
  },
  extends: [
    "./rules/base", 
    "./rules/react",
  ].map(require.resolve),
}
