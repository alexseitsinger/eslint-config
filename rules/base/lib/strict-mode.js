module.exports = {
  rules: {
    /**
     * Requires or disallows strict mode directives. 
     *
     * (fixable)
     *
     * NOTES:
     * - Since we use babel, we don't need to add this manually.
     *
     * https://eslint.org/docs/rules/strict
     */
    "strict": ["error", "never"],
  }
}
