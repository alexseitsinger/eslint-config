const confusingBrowserGlobals = require("confusing-browser-globals")

module.exports = {
  rules: {
    /**
     * Require or disallow initialization in variable declarations.
     *
     * NOTES:
     * - We sometimes declare varialbes with values, so disable this rule.
     *
     * https://eslint.org/docs/rules/init-declarations
     */
    "init-declarations": ["off", "never", {
      "ignoreForLoopInit": true,
    }],

    /**
     * Disallow deleting variables.
     *
     * NOTES:
     * - We infrequently use delete on variables to enforce garbage collection.
     *   So, disable this rule.
     *
     * https://eslint.org/docs/rules/no-delete-var
     */
    "no-delete-var": "off",

    /**
     * Disallow labels that share a name with a variable.
     *
     * https://eslint.org/docs/rules/no-label-var
     */
    "no-label-var": "error",

    /**
     * Disallow specified global variables.
     *
     * NOTES:
     * - We added variables based on AirBNB's eslint config.
     *
     * https://eslint.org/docs/rules/no-restricted-globals
     */
    "no-restricted-globals": ["error", "isFinite", "isNaN"].concat(confusingBrowserGlobals),

    /**
     * Disallow variable declarations from shadowing variables declared in the
     * outer scope.
     *
     * https://eslint.org/docs/rules/no-shadow
     */
    "no-shadow": ["warn", {
      "builtinGlobals": true,
      "hoist": "all",
      "allow": [],
    }],

    /**
     * Disallow identifiers from shadowing restricted names.
     *
     * https://eslint.org/docs/rules/no-shadow-restricted-names<Paste>
     */
    "no-shadow-restricted-names": "error",

    /**
     * Disallow the use of undeclared variables unless mentioned in global comments.
     *
     * https://eslint.org/docs/rules/no-undef
     */
    "no-undef": ["error", {
      "typeof": true,
    }],

    /**
     * Disallow initializing variables to undefined.
     *
     * https://eslint.org/docs/rules/no-undef-init
     */
    "no-undef-init": "error",

    /**
     * Disallow the use of undefined as an identifier.
     *
     * https://eslint.org/docs/rules/no-undefined
     */
    "no-undefined": "error",

    /**
     * Disallow unused variables.
     *
     * NOTES:
     * - We sometimes declare catch without using the error object, so dont
     *   check them.
     * - Ignore rest siblings should be true,
     * - We should check all variable, even global ones.
     *
     * https://eslint.org/docs/rules/no-unused-vars
     */
    "no-unused-vars": ["error", {
      vars: "all",
      //varsIgnorePattern: "[iI]gnore",
      args: "after-used",
      ignoreRestSiblings: true,
      //argsIgnorePattern: "^_",
      caughtErrors: "none",
      //caughtErrorsIgnorePattern: "^ignore",
    }],

    /**
     * Disallow the use of variables before they are defined.
     *
     * NOTES:
     * - Since function definitions get hoisted to the top of the scope, we can
     *   disable this rule for functions. (This assumes we have prefered
     *   function definitions in another rule.)
     *
     * https://eslint.org/docs/rules/no-use-before-define
     */
    "no-use-before-define": ["error", {
      "functions": false,
      "classes": true,
      "variables": true,
    }],
  }
}
