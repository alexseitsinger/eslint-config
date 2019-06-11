module.exports = {
  rules: {
    /**
     * Require braces around arrow function bodies. (fixable)
     *
     * https://eslint.org/docs/rules/arrow-body-style
     */
    "arrow-body-style": [2, "as-needed"],

    /**
     * Require parentheses around arrow function arguments. (fixable)
     *
     * https://eslint.org/docs/rules/arrow-parens
     */
    "arrow-parens": [2, "as-needed", {
      "requireForBlockBody": false,
    }],

    /**
     * Enforce consistent spacing before and after the arrow in arrow functions.
     * (fixable)
     *
     * https://eslint.org/docs/rules/arrow-spacing
     */
    "arrow-spacing": [2, {
      "before": true,
      "after": true,
    }],

    /**
     * Require super() calls in constructors.
     *
     * https://eslint.org/docs/rules/constructor-super
     */
    "constructor-super": 2,

    /**
     * Enforce consistent spacing around * operators in generator functions.
     * (fixable)
     *
     * https://eslint.org/docs/rules/generator-star-spacing
     */
    "generator-star-spacing": [2, {
      "before": false,
      "after": true,
    }],

    /**
     * Disallow reassigning class members.
     *
     * https://eslint.org/docs/rules/no-class-assign
     */
    "no-class-assign": 2,

    /**
     * Disallow arrow functions where they could be confused with comparisons.
     * (fixable)
     *
     * https://eslint.org/docs/rules/no-confusing-arrow
     */
    "no-confusing-arrow": [2, {
      "allowParens": true,
    }],

    /**
     * Disallow reassigning const variables.
     *
     * https://eslint.org/docs/rules/no-const-assign
     */
    "no-const-assign": 2,

    /**
     * Disallow duplicate class members.
     *
     * https://eslint.org/docs/rules/no-dupe-class-members
     */
    "no-dupe-class-members": 2,

    /**
     * Disallow duplicate module imports.
     *
     * https://eslint.org/docs/rules/no-duplicate-imports
     */
    "no-duplicate-imports": [2, {
      "includeExports": false,
    }],

    /**
     * Disallow new operators with the Symbol object.
     *
     * https://eslint.org/docs/rules/no-new-symbol
     */
    "no-new-symbol": 2,

    /**
     * Disallow specified modules when loaded by import.
     *
     * https://eslint.org/docs/rules/no-restricted-imports
     */
    "no-restricted-imports": [2, {
      "paths": [],
      "patterns": [],
    }],
    
    /**
     * Disallow this/super before calling super() in constructors.
     *
     * https://eslint.org/docs/rules/no-this-before-super
     */
    "no-this-before-super": 2,

    /**
     * Disallow unnecessary computed property keys in object literals. (fixable)
     *
     * https://eslint.org/docs/rules/no-useless-computed-key
     */
    "no-useless-computed-key": 2,

    /**
     * Disallow unnecessary constructors.
     *
     * https://eslint.org/docs/rules/no-useless-constructor
     */
    "no-useless-constructor": 2,

    /**
     * Disallow renaming import, export, and destructured assignments to the
     * same name. (fixable)
     *
     * https://eslint.org/docs/rules/no-useless-rename
     */
    "no-useless-rename": [2, {
      "ignoreImport": false,
      "ignoreExport": false,
      "ignoreDestructuring": false,
    }],

    /**
     * Require let or const instead of var.
     *
     * https://eslint.org/docs/rules/no-var
     */
    "no-var": 0,

    /**
     * Require or disallow method and property shorthand syntax for object
     * literals. (fixable)
     *
     * https://eslint.org/docs/rules/object-shorthand
     */
    "object-shorthand": [0, "consistent-as-need"],

    /**
     * Require using arrow functions for callbacks.
     *
     * https://eslint.org/docs/rules/prefer-arrow-callback
     */
    "prefer-arrow-callback": [2, {
      "allowNamedFunctions": false,
      "allowUnboundThis": false,  
    }],

    /**
     * Require const declarations for variables that are never reassigned after
     * declared. (fixable)
     *
     * https://eslint.org/docs/rules/prefer-const
     */
    "prefer-const": [2, {
      "destructuring": "any",
      "ignoreReadBeforeAssign": true,
    }],

    /**
     * Require destructuring from arrays and/or objects.
     *
     * https://eslint.org/docs/rules/prefer-destructuring
     */
    "prefer-destructuring": [2, {
      "array": true,
      "object": true,
    }, {
      "enforceForRenamedProperties": false,
    }],

    /**
     * Disallow parseInt() and Number.parseInt() in favor of binary, octal, and
     * hexadecimal literals. (fixable)
     *
     * https://eslint.org/docs/rules/prefer-numeric-literals
     */
    "prefer-numeric-literals": 2,

    /**
     * Require rest parameters instead of arguments.
     *
     * https://eslint.org/docs/rules/prefer-rest-params
     */
    "prefer-rest-params": 2,
    
    /**
     * Require spread operators instead of .apply().
     *
     * https://eslint.org/docs/rules/prefer-spread
     */
    "prefer-spread": 2,

    /**
     * Require template literals instead of string concatenation. (fixable)
     *
     * https://eslint.org/docs/rules/prefer-template
     */
    "prefer-template": 2,
   
    /**
     * Require generator functions to contain yield.
     *
     * https://eslint.org/docs/rules/require-yield
     */
    "require-yield": 2,

    /**
     * Enforce spacing between rest and spread operators and their expressions.
     * (fixable)
     *
     * https://eslint.org/docs/rules/rest-spread-spacing
     */
    "rest-spread-spacing": [2, "never"],
   
    /**
     * Enforce sorted import declarations within modules. (fixable)
     *
     * https://eslint.org/docs/rules/sort-imports
     */
    "sort-imports": [0, {
      "ignoreCase": false,
      "ignoreDeclarationSort": true,
      "ignoreMemberSort": true,
      "memberSyntaxSortOrder": ["none", "all", "multiple", "single"]    
    }],

    /**
     * Require symbol descriptions.
     *
     * https://eslint.org/docs/rules/symbol-description
     */
    "symbol-description": 2,
    
    /**
     * Require or disallow spacing around embedded expressions of template
     * strings. (fixable)
     *
     * https://eslint.org/docs/rules/template-curly-spacing
     */
    "template-curly-spacing": [2, "never"],

    /**
     * Require or disallow spacing around the * in yield* expressions. (fixable)
     *
     * https://eslint.org/docs/rules/yield-star-spacing
     */
    "yield-star-spacing": [2, {
      "after": true
    }],
  }
}
