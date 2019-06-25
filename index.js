/**
 * ESLint config meta-package. This includes rules for base, import, and react.
 *
 * @return {object}
 * The eslint config object.
 */
module.exports = {
  extends: [
    "@alexseitsinger/eslint-config-base",
    "@alexseitsinger/eslint-config-react",
  ]
}
