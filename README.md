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
  root: true,
  extends: [
    "@alexseitsinger/eslint-config"
  ]
}
```
