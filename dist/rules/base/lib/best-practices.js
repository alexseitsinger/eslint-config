module.exports = {
  rules: {
    /**
     * Enforce getter and setter pairs in objects.
     *
     * https://eslint.org/docs/rules/accessor-pairs
     */
    "accessor-pairs": [2, {
      "setWithoutGet": true,
      "getWithoutSet": true,
    }],

    /**
     * Enforce return statements in callbacks of array methods.
     *
     * https://eslint.org/docs/rules/array-callback-return
     */
    "array-callback-return": [2, {
      "allowImplicit": true,
    }],

    /**
     * Enforce the use of variables within the scope they are defined.
     *
     * https://eslint.org/docs/rules/block-scoped-var
     */
    "block-scoped-var": 2,

    /**
     * Enforce that class methods utilize this.
     *
     * https://eslint.org/docs/rules/class-methods-use-this
     */
    "class-methods-use-this": [2, {
      "exceptMethods": [],
    }],

    /**
     * Enforce a maximum cyclomatic complexity allowed in a program.
     *
     * https://eslint.org/docs/rules/complexity
     */
    "complexity": [2, {
      "max": 30,
    }],

    /**
     * Require return statements to either always or never specify values.
     *
     * https://eslint.org/docs/rules/consistent-return
     */
    "consistent-return": [2, {
      "treatUndefinedAsUnspecified": false,
    }],
   
    /**
     * Enforce consistent brace style for all control statements. 
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/curly
     */
    "curly": [2, "all"],

    /**
     * Require default cases in switch statements.
     *
     * https://eslint.org/docs/rules/default-case
     */
    "default-case": [2, {
      "commentPattern": "^no\\sdefault$",
    }],

    /**
     * Enforce consistent newlines before and after dots. 
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/dot-location
     */
    "dot-location": [2, "property"],

    /**
     * Enforce dot notation whenever possible. 
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/dot-notation
     */
    "dot-notation": [2, {
      "allowKeywords": true,
      "allowPattern": "",
    }],

    /**
     * Require the use of === and !==.
     *
     * https://eslint.org/docs/rules/eqeqeq
     */
    "eqeqeq": [2, "always"],

    /**
     * Require for-in loops to include an if statement.
     *
     * https://eslint.org/docs/rules/guard-for-in
     */
    "guard-for-in": 2,

    /**
     * Enforce a maximum number of classes per file.
     *
     * https://eslint.org/docs/rules/max-classes-per-file
     */
    "max-classes-per-file": [2, 1],
    
    /**
     * Disallow the use of alert, confirm, and prompt.
     *
     * https://eslint.org/docs/rules/no-alert
     */
    "no-alert": 2,

    /**
     * Disallow the use of arguments.caller or arguments.callee.
     *
     * https://eslint.org/docs/rules/no-caller
     */
    "no-caller": 2,

    /**
     * Disallow lexical declarations in case clauses,
     *
     * https://eslint.org/docs/rules/no-case-declarations
     */
    "no-case-declarations": 2,

    /**
     * Disallow division operators explicitly at the beginning of regular
     * expressions. 
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/no-div-regex
     */
    "no-div-regex": 2,

    /**
     * Disallow else blocks after return statements in if statements. 
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/no-else-return
     */
    "no-else-return": [2, {
      "allowElseIf": false,
    }],

    /**
     * Disallow empty functions.
     *
     * https://eslint.org/docs/rules/no-empty-function
     */
    "no-empty-function": [2, {
      "allow": [
        //"functions",
        //"arrowFunctions",
        //"generatorFunctions",
        //"methods",
        //"generatorMethods",
        //"getters",
        //"setters",
        //"constructors",
      ]
    }],
    
    /**
     * Disallow empty destructuring patterns. 
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/no-empty-pattern
     */
    "no-empty-pattern": 2,

    /**
     * Disallow null comparisons without type-checking operators.
     *
     * https://eslint.org/docs/rules/no-eq-null
     */
    "no-eq-null": 2,

    /**
     * Disallow the use of eval().
     *
     * https://eslint.org/docs/rules/no-eval
     */
    "no-eval": [2, {
      "allowIndirect": false,
    }],

    /**
     * Disallow extending native types.
     *
     * https://eslint.org/docs/rules/no-extend-native
     */
    "no-extend-native": [2, {
      "exceptions": [],
    }],
    
    /**
     * Disallow unnecessary calls to .bind(). 
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/no-extra-bind
     */
    "no-extra-bind": 2,

    /**
     * Disallow unnecessary labels.
     *
     * https://eslint.org/docs/rules/no-extra-label
     */
    "no-extra-label": 2,

    /**
     * Disallow fallthrough of case statements.
     *
     * https://eslint.org/docs/rules/no-fallthrough
     */
    "no-fallthrough": [2, {
      "commentPattern": "fallthrough",
    }],

    /**
     * Disallow leading or trailing decimal points in numeric literals.
     * 
     * (fixable)
     *
     * https://eslint.org/docs/rules/no-floating-decimal
     */
    "no-floating-decimal": 2,

    /**
     * Disallow assignments to native objects or read-only global variables.
     *
     * https://eslint.org/docs/rules/no-global-assign
     */
    "no-global-assign": [2, {
      "exceptions": [],
    }],

    /**
     * Disallow shorthand type conversions. 
     * 
     * (fixable)
     *
     * https://eslint.org/docs/rules/no-implicit-coercion
     */
    "no-implicit-coercion": [2, {
      "boolean": true,
      "number": true,
      "string": true,
      "allow": [
        //"~",
        //"!!",
        //"+",
        //"*",
      ]
    }],

    /**
     * Disallow variable and function declarations in the global scope.
     *
     * https://eslint.org/docs/rules/no-implicit-globals
     */
    "no-implicit-globals": 2,

    /**
     * Disallow the use of eval()-like methods.
     *
     * https://eslint.org/docs/rules/no-implied-eval
     */
    "no-implied-eval": 2,

    /**
     * Disallow this keywords outside of classes or class-like objects.
     *
     * https://eslint.org/docs/rules/no-invalid-this
     */
    "no-invalid-this": 2,

    /**
     * Disallow the use of the __iterator__ property.
     *
     * https://eslint.org/docs/rules/no-iterator
     */
    "no-iterator": 2,

    /**
     * Disallow labeled statements.
     *
     * https://eslint.org/docs/rules/no-labels
     */
    "no-labels": [2, {
      "allowLoop": false,
      "allowSwitch": false,
    }],

    /**
     * Disallow unnecessary nested blocks.
     *
     * https://eslint.org/docs/rules/no-lone-blocks
     */
    "no-lone-blocks": 2,

    /**
     * Disallow function declarations that contain unsafe references inside loop
     * statements.
     *
     * https://eslint.org/docs/rules/no-loop-func
     */
    "no-loop-func": 2,

    /**
     * Disallow magic numbers.
     *
     * https://eslint.org/docs/rules/no-magic-numbers
     */
    "no-magic-numbers": [2, {
      "ignore": [],
      "ignoreArrayIndexes": true,
      "enforceConst": true,
      "detectObjects": true,
    }],

    /**
     * Disallow multiple spaces.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/no-multi-spaces
     */
    "no-multi-spaces": [2, {
      "ignoreEOLComments": false,
      "exceptions": {
        "Property": false, // default is True
      }
    }],

    /**
     * Disallow multiline strings.
     *
     * https://eslint.org/docs/rules/no-multi-str
     */
    "no-multi-str": 2,
    
    /**
     * Disallow new operators outside of assignments or comparisons.
     *
     * https://eslint.org/docs/rules/no-new
     */
    // Since webpack uses plugins with new, we might need to set this to warn only
    "no-new": 1,

    /**
     * Disallow new operators with the Function object.
     *
     * https://eslint.org/docs/rules/no-new-func
     */
    "no-new-func": 2 ,

    /**
     * Disallow new operators with the String, Number, and Boolean objects.
     *
     * https://eslint.org/docs/rules/no-new-wrappers
     */
    "no-new-wrappers": 2,

    /**
     * Disallow octal literals.
     *
     * https://eslint.org/docs/rules/no-octal
     */
    "no-octal": 2,

    /**
     * Disallow octal escape sequences in string literals.
     *
     * https://eslint.org/docs/rules/no-octal-escape
     */
    "no-octal-escape": 2,

    /**
     * Disallow reassigning function parameters.
     *
     * https://eslint.org/docs/rules/no-param-reassign
     */
    "no-param-reassign": [2, {
      "props": true, // Default: false
      "ignorePropertyModificationsFor": [],
    }],

    /**
     * Disallow the use of the __proto__ property.
     *
     * https://eslint.org/docs/rules/no-proto
     */
    "no-proto": 2,

    /**
     * Disallow variable redeclaration.
     *
     * https://eslint.org/docs/rules/no-redeclare
     */
    "no-redeclare": [2, {
      "builtinGlobals": true,
    }],

    /**
     * Disallow certain properties on certain objects.
     *
     * https://eslint.org/docs/rules/no-restricted-properties
     */
    "no-restricted-properties": [2, {
      "object": "",
      "property": "",
      "message": "",
    }],

    /**
     * Disallow assignment operators in return statements.
     *
     * https://eslint.org/docs/rules/no-return-assign<Paste>
     */
    "no-return-assign": [2, "always"],
   
    /**
     * Disallow unnecessary return await.
     *
     * https://eslint.org/docs/rules/no-return-await
     */
    "no-return-await": 2,

    /**
     * Disallow javascript: urls.
     *
     * https://eslint.org/docs/rules/no-script-url
     */
    "no-script-url": 2,

    /**
     * Disallow assignments where both sides are exactly the same.
     *
     * https://eslint.org/docs/rules/no-self-assign
     */
    "no-self-assign": [2, {
      "props": true,
    }],

    /**
     * Disallow comparisons where both sides are exactly the same.
     *
     * https://eslint.org/docs/rules/no-self-compare
     */
    "no-self-compare": 2,

    /**
     * Disallow comma operators.
     *
     * https://eslint.org/docs/rules/no-sequences
     */
    "no-sequences": 2,

    /**
     * Disallow throwing literals as exceptions.
     *
     * https://eslint.org/docs/rules/no-throw-literal
     */
    "no-throw-literal": 2,

    /**
     * Disallow unmodified loop conditions.
     *
     * https://eslint.org/docs/rules/no-unmodified-loop-condition
     */
    "no-unmodified-loop-condition": 2,

    /**
     * Disallow unused expressions.
     *
     * https://eslint.org/docs/rules/no-unused-expressions
     */
    "no-unused-expressions": [2, {
      "allowShortCircuit": true,
      "allowTernary": true,
      "allowTaggedTemplates": false
    }],

    /**
     * Disallow unused labels.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/no-unused-labels
     */
    "no-unused-labels": 2,

    /**
     * Disallow unnecessary calls to .call() and .apply().
     *
     * https://eslint.org/docs/rules/no-useless-call
     */
    "no-useless-call": 2,

    /**
     * Disallow unnecessary catch clauses,
     *
     * https://eslint.org/docs/rules/no-useless-catch
     */
    "no-useless-catch": 2,

    /**
     * Disallow unnecessary concatenation of literals or template literals.
     *
     * https://eslint.org/docs/rules/no-useless-concat
     */
    "no-useless-concat": 2,

    /**
     * Disallow unnecessary escape characters.
     *
     * https://eslint.org/docs/rules/no-useless-escape
     */
    "no-useless-escape": 2,

    /**
     * Disallow redundant return statements.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/no-useless-return<Paste>
     */
    "no-useless-return": 2,
   
    /**
     * Disallow void operators,
     *
     * https://eslint.org/docs/rules/no-void
     */
    "no-void": 2,

    /**
     * Disallow specified warning terms in comments.
     *
     * https://eslint.org/docs/rules/no-warning-comments
     */
    "no-warning-comments": [2, {
      "terms": ["todo", "fix",],
      "location": "start",
    }],

    /**
     * Disallow with statements.
     *
     * https://eslint.org/docs/rules/no-with
     */
    "no-with": 2,

    /**
     * Enforce using named capture group in regular expression.
     *
     * https://eslint.org/docs/rules/prefer-named-capture-group<Paste>
     */
    "prefer-named-capture-group": 1, // only available in newer envs.
    
    /**
     * Require using Error objects as Promise rejection reasons.
     * 
     * https://eslint.org/docs/rules/prefer-promise-reject-errors
     */
    "prefer-promise-reject-errors": 2,

    /**
     * Enforce the consistent use of the radix argument when using parseInt().
     *
     * https://eslint.org/docs/rules/radix
     */
    "radix": [2, "as-needed"],

    /**
     * Disallow async functions which have no await expression.
     *
     * https://eslint.org/docs/rules/require-await
     */
    "require-await": 2,

    /**
     * Enforce the use of u flag on RegExp.
     *
     * https://eslint.org/docs/rules/require-unicode-regexp<Paste>
     */
    "require-unicode-regexp": 1,
   
    /**
     * Require var declarations be placed at the top of their containing scope.
     *
     * https://eslint.org/docs/rules/vars-on-top
     */
    "vars-on-top": 2,

    /**
     * Require parentheses around immediate function invocations.
     *
     * https://eslint.org/docs/rules/wrap-iife
     */
    "wrap-iife": [2, "outside", {
      "functionPrototypeMethods": false
    }],

    /**
     * Require or disallow “Yoda” conditions.
     *
     * https://eslint.org/docs/rules/yoda
     */
    "yoda": [2, "never", {
      "exceptRange": true,
      "onlyEquality": false,
    }],
  }
}
