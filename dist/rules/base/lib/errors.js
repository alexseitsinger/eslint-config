module.exports = {
  rules: {
    /**
     * Enforce “for” loop update clause moving the counter in the right direction.
     *
     * https://eslint.org/docs/rules/for-direction
     */
    "for-direction": 2,
    
    /**
     * Enforce return statements in getters.
     *
     * https://eslint.org/docs/rules/getter-return
     */
    "getter-return": [2, {
      "allowImplicit": true,
    }],
    
    /**
     * Disallow using an async function as a Promise executor.
     *
     * https://eslint.org/docs/rules/no-async-promise-executor
     */
    "no-async-promise-executor": 2,

    /**
     * Disallow await inside of loops.
     *
     * https://eslint.org/docs/rules/no-await-in-loop
     */
    "no-await-in-loop": 2,

    /**
     * Disallow comparing against -0.
     *
     * https://eslint.org/docs/rules/no-compare-neg-zero
     */
    "no-compare-neg-zero": 2,
    
    /**
     * Disallow assignment operators in conditional expressions.
     *
     * https://eslint.org/docs/rules/no-cond-assign
     */
    "no-cond-assign": 2,

    /**
     * Disallow the use of console.
     *
     * https://eslint.org/docs/rules/no-console
     */
    "no-console": 2,

    /**
     * Disallow constant expressions in conditions.
     *
     * https://eslint.org/docs/rules/no-constant-condition
     */
    "no-constant-condition": [2, {
      "checkLoops": true,
    }],

    /**
     * Disallow control characters in regular expressions.
     *
     * https://eslint.org/docs/rules/no-control-regex
     */
    "no-control-regex": 2,

    /**
     * Disallow the use of debugger.
     *
     * https://eslint.org/docs/rules/no-debugger
     */
    "no-debugger": 2,

    /**
     * Disallow duplicate arguments in function definitions.
     *
     * https://eslint.org/docs/rules/no-dupe-args
     */
    "no-dupe-args": 2,

    /**
     * Disallow duplicate keys in object literals.
     *
     * https://eslint.org/docs/rules/no-dupe-keys
     */
    "no-dupe-keys": 2,

    /**
     * Disallow duplicate case labels.
     *
     * https://eslint.org/docs/rules/no-duplicate-case
     */
    "no-duplicate-case": 2,

    /**
     * Disallow empty block statements.
     *
     * https://eslint.org/docs/rules/no-empty
     */
    "no-empty": [2, {
      "allowEmptyCatch": false,
    }],

    /**
     * Disallow empty character classes in regular expressions.
     *
     * https://eslint.org/docs/rules/no-empty-character-class
     */
    "no-empty-character-class": 2,

    /**
     * Disallow reassigning exceptions in catch clauses.
     *
     * https://eslint.org/docs/rules/no-ex-assign
     */
    "no-ex-assign": 2,

    /**
     * Disallow unnecessary boolean casts. (fixable)
     *
     * https://eslint.org/docs/rules/no-extra-boolean-cast
     */
    "no-extra-boolean-cast": 2,

    /**
     * Disallow unnecessary parentheses. (fixable)
     *
     * https://eslint.org/docs/rules/no-extra-parens
     */
    "no-extra-parens": [2, "all", {
      "conditionalAssign": false,
      "returnAssign": false,
      "nestedBinaryExpressions": false,
      "ignoreJSX": "all",
      "enforceForArrowConditionals": false,
    }],

    /**
     * Disallow unnecessary semicolons. (fixable)
     *
     * https://eslint.org/docs/rules/no-extra-semi
     */
    "no-extra-semi": 2,

    /**
     * Disallow reassigning function declarations.
     *
     * https://eslint.org/docs/rules/no-func-assign
     */
    "no-func-assign": 2,

    /**
     * Disallow variable or function declarations in nested blocks. 
     *
     * https://eslint.org/docs/rules/no-inner-declarations
     */
    "no-inner-declarations": [2, "both"],

    /**
     * Disallow invalid regular expression strings in RegExp constructors.
     *
     * https://eslint.org/docs/rules/no-invalid-regexp
     */
    "no-invalid-regexp": [2, {
      "allowConstructorFlags": ["u", "y"],
    }],

    /**
     * Disallow irregular whitespace.
     *
     * https://eslint.org/docs/rules/no-irregular-whitespace
     */
    "no-irregular-whitespace": [2, {
      "skipStrings": false,
      "skipComments": false,
      "skipRegExps": false,
      "skipTemplates": false,
    }],

    /**
     * Disallow characters which are made with multiple code points in character class syntax.
     *
     * https://eslint.org/docs/rules/no-misleading-character-class
     */
    "no-misleading-character-class": 2,
   
    /**
     * Disallow calling global object properties as functions.
     *
     * https://eslint.org/docs/rules/no-obj-calls
     */
    "no-obj-calls": 2,

    /**
     * Disallow calling some Object.prototype methods directly on objects.
     *
     * https://eslint.org/docs/rules/no-prototype-builtins
     */
    "no-prototype-builtins": 2,
    
    /**
     * Disallow multiple spaces in regular expressions. (fixable)
     *
     * https://eslint.org/docs/rules/no-regex-spaces
     */
    "no-regex-spaces": 2,

    /**
     * Disallow sparse arrays.
     *
     * https://eslint.org/docs/rules/no-sparse-arrays
     */
    "no-sparse-arrays": 2,

    /**
     * Disallow template literal placeholder syntax in regular strings.
     *
     * https://eslint.org/docs/rules/no-template-curly-in-string
     */
    "no-template-curly-in-string": 2,

    /**
     * Disallow confusing multiline expressions.
     *
     * https://eslint.org/docs/rules/no-unexpected-multiline
     */
    "no-unexpected-multiline": 2,

    /**
     * Disallow unreachable code after return, throw, continue, and break statements.
     *
     * https://eslint.org/docs/rules/no-unreachable
     */
    "no-unreachable": 2,

    /**
     * Disallow control flow statements in finally blocks.
     *
     * https://eslint.org/docs/rules/no-unsafe-finally
     */
    "no-unsafe-finally": 2,
   
    /**
     * Disallow negating the left operand of relational operators. (fixable)
     *
     * https://eslint.org/docs/rules/no-unsafe-negation
     */
    "no-unsafe-negation": 2,

    /**
     * Disallow assignments that can lead to race conditions due to usage of await or yield.
     *
     * https://eslint.org/docs/rules/require-atomic-updates
     */
    "require-atomic-updates": 2,

    /**
     * Require calls to isNaN() when checking for NaN.
     *
     * https://eslint.org/docs/rules/use-isnan
     */
    "use-isnan": 2,

    /**
     * Enforce comparing typeof expressions against valid strings.
     *
     * https://eslint.org/docs/rules/valid-typeof
     */
    "valid-typeof": [2, {
      "requireStringLiterals": true,
    }],
  }
} 
