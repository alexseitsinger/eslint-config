module.exports = {
  rules: {
    /**
     * Require return statements after callbacks.
     *
     * https://eslint.org/docs/rules/callback-return
     */
    "callback-return": [2, [
      "callback", 
      "cb", 
      "errback",
      "eb",
      "next", 
      "fn", 
      "func", 
      "f"
    ]],

    /**
     * Require require() calls to be placed at top-level module scope.
     *
     * https://eslint.org/docs/rules/global-require
     */
    "global-require": 0,

    /**
     * Require error handling in callbacks.
     *
     * https://eslint.org/docs/rules/handle-callback-err
     */
    "handle-callback-err": [2, "err"],

    /**
     * Disallow use of the Buffer() constructor
     *
     * https://eslint.org/docs/rules/no-buffer-constructor
     */
    "no-buffer-constructor": 2,

    /**
     * Disallow require calls to be mixed with regular variable declarations.
     *
     * https://eslint.org/docs/rules/no-mixed-requires
     */
    "no-mixed-requires": [2, {
      "grouping": false,
      "allowCall": false,
    }],

    /**
     * Disallow new operators with calls to require.
     *
     * https://eslint.org/docs/rules/no-new-require
     */
    "no-new-require": 2,

    /**
     * Disallow string concatenation with __dirname and __filename.
     *
     * https://eslint.org/docs/rules/no-path-concat
     */
    "no-path-concat": 2,
    
    /**
     * Disallow the use of process.env.
     *
     * https://eslint.org/docs/rules/no-process-env
     */
    "no-process-env": 2, // might want to disable this rule
    
    /**
     * Disallow the use of process.exit().
     *
     * https://eslint.org/docs/rules/no-process-exit
     */
    "no-process-exit": 2,

    /**
     * Disallow specified modules when loaded by require.
     *
     * https://eslint.org/docs/rules/no-restricted-modules
     */
    "no-restricted-modules": [2, {
      "paths": [],
      "patterns": [],
    }],

    /**
     * Disallow synchronous methods.
     *
     * https://eslint.org/docs/rules/no-sync
     */
    "no-sync": [2, {
      "allowAtRootLevel": false
    }],
  }
}
