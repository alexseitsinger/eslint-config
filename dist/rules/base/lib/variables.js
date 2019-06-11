module.exports = {
  rules: {
    /**
     * Require or disallow initialization in variable declarations.
     *
     * https://eslint.org/docs/rules/init-declarations
     */
    "init-declarations": [0, "never", {
      "ignoreForLoopInit": true,
    }],

    /**
     * Disallow deleting variables.
     *
     * https://eslint.org/docs/rules/no-delete-var
     */
    // we sometimes delete a var for garbage collection
    "no-delete-var": 1, 

    /**
     * Disallow labels that share a name with a variable.
     *
     * https://eslint.org/docs/rules/no-label-var
     */
    "no-label-var": 2,

    /**
     * Disallow specified global variables.
     *
     * https://eslint.org/docs/rules/no-restricted-globals
     */
    // Specify the global variable names that you don't want to use in your code.
    "no-restricted-globals": [2,],

    /**
     * Disallow variable declarations from shadowing variables declared in the
     * outer scope.
     *
     * https://eslint.org/docs/rules/no-shadow
     */
    "no-shadow": [1, {
      "builtinGlobals": true,
      "hoist": "all",
      "allow": [],
    }],

    /**
     * Disallow identifiers from shadowing restricted names.
     *
     * https://eslint.org/docs/rules/no-shadow-restricted-names<Paste>
     */
    "no-shadow-restricted-names": 2,

    /**
     * Disallow the use of undeclared variables unless mentioned in global comments.
     *
     * https://eslint.org/docs/rules/no-undef
     */
    "no-undef": [2, {
      "typeof": true,  
    }],
    
    /**
     * Disallow initializing variables to undefined.
     *
     * https://eslint.org/docs/rules/no-undef-init
     */
    "no-undef-init": 2,

    /**
     * Disallow the use of undefined as an identifier.
     *
     * https://eslint.org/docs/rules/no-undefined
     */
    "no-undefined": 2,

    /**
     * Disallow unused variables.
     *
     * https://eslint.org/docs/rules/no-unused-vars
     */
    "no-unused-vars": [1, {
      vars: "all",
      varsIgnorePattern: "",
      args: "after-used",
      ignoreRestSiblings: true,
      argsIgnorePattern: "",
      caughtErrors: "all",
      caughtErrorsIgnorePattern: "",
    }],

    /**
     * Disallow the use of variables before they are defined.
     *
     * https://eslint.org/docs/rules/no-use-before-define
     */
    "no-use-before-define": [2, {
      "functions": true,
      "classes": true,
      "variables": true,
    }],
  }
}
