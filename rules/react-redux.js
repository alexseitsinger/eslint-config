// react-redux plugin

const disabled = {}

const rules = {
  //"react-redux/connect-prefer-minimum-two-arguments": "error",

  /**
   * connect has 4 optional arguments:
   * 1. mapStateToProps
   * 2. mapDispatchToProps
   * 3. mergeProps
   * 4. options
   *
   * This rule enforces that all of the provided parameters should follow the
   * above naming conventions.
   *
   * https://github.com/DianaSuvorova/eslint-plugin-react-redux/blob/HEAD/docs/rules/connect-prefer-named-arguments.md
   */
  "react-redux/connect-prefer-named-arguments": "error",

  /**
   * Enforces that the mapDispatchToProps is an object or a function returning an object.
   *
   * https://github.com/DianaSuvorova/eslint-plugin-react-redux/blob/HEAD/docs/rules/mapDispatchToProps-returns-object.md
   */
  "react-redux/mapDispatchToProps-returns-object": "error",

  /**
   * Enforces that mapDispatchToProps uses a shorthand method to wrap actions in dispatch calls whenever possible.
   *
   * https://github.com/DianaSuvorova/eslint-plugin-react-redux/blob/HEAD/docs/rules/mapDispatchToProps-prefer-shorthand.md
   */
  "react-redux/mapDispatchToProps-prefer-shorthand": "error",

  /**
   * Enforces that all mapDispatchToProps parameters have specific names.
   */
  "react-redux/mapDispatchToProps-prefer-parameters-names": "error",

  /**
   * Prohibits binding a whole store object to a component.
   * https://github.com/DianaSuvorova/eslint-plugin-react-redux/blob/HEAD/docs/rules/mapStateToProps-no-store.md
   */
  "react-redux/mapStateToProps-no-store": "error",

  /**
   * Flags generation of copies of same-by-value but different-by-reference props.
   * https://github.com/DianaSuvorova/eslint-plugin-react-redux/blob/HEAD/docs/rules/mapStateToProps-prefer-hoisted.md
   */
  "react-redux/mapStateToProps-prefer-hoisted": "error",

  /**
   * Enforces that all mapStateToProps parameters have specific names.
   */
  "react-redux/mapStateToProps-prefer-parameters-names": "error",

  /**
   * Extension of a react's no-unused-prop-types rule filtering out false positive used in redux context.
   */
  "react-redux/no-unused-prop-types": "error",

  /**
   * Enforces that all connected components are defined in a separate file.
   * https://github.com/DianaSuvorova/eslint-plugin-react-redux/blob/HEAD/docs/rules/prefer-separate-component-file.md
   */
  "react-redux/prefer-separate-component-file": "error",
}

module.exports = {
  rules,
  disabled,
}
