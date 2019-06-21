/**
 * @description The ESLint config for base rules.
 * @return {Object} The eslint config object for base rules.
 */
module.exports = {
  extends: [
    "./lib/best-practices",
    "./lib/errors",
    "./lib/es6",
    "./lib/nodejs-commonjs",
    "./lib/strict-mode",
    "./lib/stylistic",
    "./lib/variables",
  ].map(require.resolve)
}
