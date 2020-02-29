const disabled = {
  indent: "off",
}

const enabled = {
  /**
   * Set prettier rules to warnings since they're primarily style-oriented,
   * and not functionality.
   *
   * This rule should be accompanied by the rules from
   * 'eslint-config-prettier', too.
   */
  "prettier/prettier": "warn",
}

module.exports = {
  enabled,
  disabled,
}
