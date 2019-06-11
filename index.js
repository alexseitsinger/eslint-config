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
    ecmaVersion: "2018",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      globalReturn: false,
      impliedStrict: true,
    },
  },
  plugins: [
    "react",
  ],
  settings: {
    linkComponents: [
      {name: "Link", linkAttribute: "to"}  
    ]
  },
  extends: [
    // base
    "./rules/base/best-practices",
    "./rules/base/errors",
    "./rules/base/es6",
    "./rules/base/nodejs-commonjs",
    "./rules/base/strict-mode",
    "./rules/base/stylistic",
    "./rules/base/variables",
    // react
    "./rules/react/general",
    "./rules/react/jsx",
  ].map(require.resolve)
}
