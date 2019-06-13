module.exports = {
  rules: {
    /**
     * Require return statements after callbacks.
     *
     * NOTES:
     * - Since our callback are often asyncronous, we shouldn't expect return
     *   statements. As a result, disable this rule.
     *
     * https://eslint.org/docs/rules/callback-return
     */
    "callback-return": ["off", [
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
     * NOTES:
     * - Since we use require() calls in our reducer, when its hot reloaded, we
     *   need to disable this rule.
     *
     * https://eslint.org/docs/rules/global-require
     */
    "global-require": "off",

    /**
     * Require error handling in callbacks.
     *
     * https://eslint.org/docs/rules/handle-callback-err
     */
    "handle-callback-err": ["error", "err"],

    /**
     * Disallow use of the Buffer() constructor
     *
     * https://eslint.org/docs/rules/no-buffer-constructor
     */
    "no-buffer-constructor": "error",

    /**
     * Disallow require calls to be mixed with regular variable declarations.
     *
     * https://eslint.org/docs/rules/no-mixed-requires
     */
    "no-mixed-requires": ["error", {
      "grouping": false,
      "allowCall": false,
    }],

    /**
     * Disallow new operators with calls to require.
     *
     * https://eslint.org/docs/rules/no-new-require
     */
    "no-new-require": "error",

    /**
     * Disallow string concatenation with __dirname and __filename.
     *
     * https://eslint.org/docs/rules/no-path-concat
     */
    "no-path-concat": "error",
    
    /**
     * Disallow the use of process.env.
     *
     * NOTES:
     * - Since we use process.env for webpack configs, we need to disable this
     *   rule.
     *
     * https://eslint.org/docs/rules/no-process-env
     */
    "no-process-env": "off", 
    
    /**
     * Disallow the use of process.exit().
     *
     * https://eslint.org/docs/rules/no-process-exit
     */
    "no-process-exit": "error",

    /**
     * Disallow specified modules when loaded by require.
     *
     * NOTES:
     * - Since we arent specifying any modules, by default, we don't need to
     *   enable this rule.
     *
     * https://eslint.org/docs/rules/no-restricted-modules
     */
    "no-restricted-modules": ["off", {
      "paths": [],
      "patterns": [],
    }],

    /**
     * Disallow synchronous methods.
     *
     * NOTES:
     * - We use syncronous methods in some node packages, so we should disable
     *   this rule.
     *
     * https://eslint.org/docs/rules/no-sync
     */
    "no-sync": ["off", {
      "allowAtRootLevel": false
    }],
  }
}
