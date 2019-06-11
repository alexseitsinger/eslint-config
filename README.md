# ESLint Config

## Description

Custom ESLint config that includes rules for:

- Base
  - Errors
  - Stylistic
  - Variables
  - Strict Mode
  - NodeJS and CommonJS
- React
  - General
  - JSX

## Installation

```
npm i --save-dev @alexseitsinger/eslint-config
```

## Usage

.eslintrc.js

```javascript
module.exports = {
  env: {
    browser: true,
    node: true,
    commonjs: true,
    "shared-node-browser": true,
    es6: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
      jsx: true
    }
  },
  settings: {
    "linkComponents": [
      {name: "Link", linkAttribute: "to"},
    ]
  },
  plugins: [
    "react",
  ],
  extends: [
    "@alexseitsinger/eslint-config"
  ]
}
```
