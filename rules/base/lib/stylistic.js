module.exports = {
  rules: {
    /**
     * Enforce linebreaks after opening and before closing array brackets.
     * 
     * (fixable)
     *
     * https://eslint.org/docs/rules/array-bracket-newline
     */
    "array-bracket-newline": ["error", "consistent"],

    /**
     * Enforce consistent spacing inside array brackets. 
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/array-bracket-spacing
     */
    "array-bracket-spacing": ["error", "never", {
      "singleValue": false,
      "objectsInArrays": false,
      "arraysInArrays": false,
    }],

    /**
     * Enforce line breaks after each array element. 
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/array-element-newline
     */
    "array-element-newline": ["error", "consistent"],

    /**
     * Disallow or enforce spaces inside of blocks after opening block and
     * before closing block. 
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/block-spacing
     */
    "block-spacing": ["error", "always"],

    /**
     * Enforce consistent brace style for blocks. 
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/brace-style
     */
    "brace-style": ["error", "stroustrup", {
      "allowSingleLine": false
    }],

    /**
     * Enforce camelcase naming convention.
     *
     * https://eslint.org/docs/rules/camelcase
     */
    "camelcase": ["error", {
      "properties": "never",
      "ignoreDestructuring": true, // might want to be true
      "allow": [],
    }],

    /**
     * Enforce or disallow capitalization of the first letter of a comment.
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/capitalized-comments
     */
    "capitalized-comments": ["off", "always", {
      "ignorePattern": "",
      "ignoreInlineComments": false,
      "ignoreConsecutiveComments": false,
    }],
    
    /**
     * Require or disallow trailing commas. 
     *
     * (fixable)
     *
     * NOTES:
     * - With function calls, we must pass a composed component tree as an
     *   argument. When we do this, we dont wnat to have to also pass a comma
     *   after the closing tag. So, ignore this rule for functions.
     *
     * https://eslint.org/docs/rules/comma-dangle
     */
    "comma-dangle": ["error", {
      arrays: "always-multiline",
      objects: "always-multiline",
      imports: "always-multiline",
      exports: "always-multiline",
      functions: "ignore",
    }],

    /**
     * Enforce consistent spacing before and after commas. 
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/comma-spacing
     */
    "comma-spacing": ["error", {
      "before": false,
      "after": true,
    }],

    /**
     * Enforce consistent comma style. 
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/comma-style
     */
    "comma-style": ["error", "last", {
      "exceptions": {
        "ArrayExpression": false,
        "ArrayPattern": false,
        "ArrowFunctionExpression": false,
        "CallExpression": false,
        "FunctionDeclaration": false,
        "FunctionExpression": false,
        "ImportDeclaration": false,
        "ObjectExpression": false,
        "ObjectPattern": false,
        "VariableDeclaration": false,
        "NewExpression": false,
      }
    }],

    /**
     * Enforce consistent spacing inside computed property brackets. 
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/computed-property-spacing
     */
    "computed-property-spacing": ["error", "never"],

    /**
     * Enforce consistent naming when capturing the current execution context.
     *
     * https://eslint.org/docs/rules/consistent-this
     */
    "consistent-this": ["error", "that", "self"],

    /**
     * Require or disallow newline at the end of files. 
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/eol-last
     */
    "eol-last": ["error", "always"],

    /**
     * Require or disallow spacing between function identifiers and their
     * invocations. 
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/func-call-spacing
     */
    "func-call-spacing": ["error", "never"],

    /**
     * Require function names to match the name of the variable or property to
     * which they are assigned.
     *
     * https://eslint.org/docs/rules/func-name-matching
     */
    "func-name-matching": ["error", "always", {
      "considerPropertyDescriptor": true,
      "includeCommonJSModuleExports": false, 
    }],

    /**
     * Require or disallow named function expressions.
     *
     * https://eslint.org/docs/rules/func-names
     */
    "func-names": ["error", "always", {
      "generators": "always",
    }],

    /**
     * Enforce the consistent use of either function declarations or
     * expressions.
     *
     * https://eslint.org/docs/rules/func-style
     */
    "func-style": ["error", "declaration", {
      "allowArrowFunctions": true,
    }],

    /**
     * Enforce consistent line breaks inside function parentheses. 
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/function-paren-newline
     */
    "function-paren-newline": ["error", "consistent"],

    /**
     * Disallow specified identifiers.
     *
     * https://eslint.org/docs/rules/id-blacklist
     */
    "id-blacklist": ["error"], // add strings in here..

    /**
     * Enforce minimum and maximum identifier lengths.
     *
     * https://eslint.org/docs/rules/id-length
     */
    "id-length": ["error", {
      "min": 1,
      "max": 48,
      "properties": "always",
      "exceptions": [],
    }],

    /**
     * Require identifiers to match a specified regular expression.
     *
     * https://eslint.org/docs/rules/id-match
     */
    "id-match": ["error", "^.+", {
      "properties": true,
      "onlyDeclarations": false,
      "ignoreDestructuring": false // might want it true
    }],  
    
    /**
     * Enforce the location of arrow function bodies. 
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/implicit-arrow-linebreak
     */
    "implicit-arrow-linebreak": ["error", "beside"],

    /**
     * Enforce consistent indentation. 
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/indent
     */
    "indent": ["error", 2, {
      "SwitchCase": 1,
      "VariableDeclarator": "first",
      "outerIIFEBody": 1,
      "MemberExpression": 1,
      "FunctionDeclaration": {
        "parameters": "first",
        "body": 1,
      },
      "FunctionExpression": {
        "parameters": "first",
        "body": 1,
      },
      "CallExpression": {
        "arguments": "first",
      },
      "ArrayExpression": 1,
      "ObjectExpression": 1,
      "ImportDeclaration": 1,
      "flatTernaryExpressions": true,
      "ignoredNodes": [],
      "ignoreComments": false,
    }],

    /**
     * Enforce the consistent use of either double or single quotes in JSX
     * attributes. 
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/jsx-quotes
     */
    "jsx-quotes": ["error", "prefer-double"],

    /**
     * Enforce consistent spacing between keys and values in object literal
     * properties.
     *
     * https://eslint.org/docs/rules/key-spacing
     */
    "key-spacing": ["error", { 
      beforeColon: false,
      afterColon: true
    }],

    /**
     * Enforce consistent spacing before and after keywords.
     *
     * https://eslint.org/docs/rules/keyword-spacing
     */
    "keyword-spacing": ["error", {
      "before": true,
      "after": true, 
      "overrides": {}
    }],

    /**
     * Enforce position of line comments.
     *
     * https://eslint.org/docs/rules/line-comment-position
     */
    "line-comment-position": ["error", "above"],

    /**
     * Enforce consistent linebreak style. 
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/linebreak-style
     */
    "linebreak-style": ["error", "unix"],

    /**
     * Require empty lines around comments. 
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/lines-around-comment
     */
    "lines-around-comment": ["error", {
      "beforeBlockComment": false,
      "afterBlockComment": false,
      "beforeLineComment": false,
      "afterLineComment": false,
      "allowBlockStart": false,
      "allowBlockEnd": false,
      "allowObjectStart": false,
      "allowObjectEnd": false,
      "allowArrayStart": false,
      "allowArrayEnd": false,
      "allowClassStart": false,
      "allowClassEnd": false,
      "applyDefaultIgnorePatterns": false,
      "ignorePattern": "",
    }],

    /**
     * Require or disallow an empty line between class members. 
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/lines-between-class-members
     */
    "lines-between-class-members": ["error", "never", {
      "exceptAfterSingleLine": false,
    }],

    /**
     * Enforce a maximum depth that blocks can be nested.
     *
     * https://eslint.org/docs/rules/max-depth
     */
    "max-depth": ["error", {
      "max": 4,
    }],

    /**
     * Enforce a maximum line length.
     *
     * https://eslint.org/docs/rules/max-len
     */
    "max-len": ["error", {
      "code": 80,
      "tabWidth": 2,
      "comments": 80,
      "ignorePattern": "",
      "ignoreTrailingComments": false,
      "ignoreUrls": true,
      "ignoreStrings": true,
      "ignoreTemplateLiterals": true,
      "ignoreRegExpLiterals": true,
    }],

    /**
     * Enforce a maximum number of lines per file.
     *
     * https://eslint.org/docs/rules/max-lines
     */
    "max-lines": ["error", {
      "max": 300,
      "skipBlankLines": true,
      "skipComments": true,
    }],

    /**
     * Enforce a maximum number of line of code in a function.
     *
     * https://eslint.org/docs/rules/max-lines-per-function
     */
    "max-lines-per-function": ["error", {
      "max": 150,
      "skipBlankLines": true,
      "skipComments": true,
      "IIFEs": true,
    }],

    /**
     * Enforce a maximum depth that callbacks can be nested,
     *
     * https://eslint.org/docs/rules/max-nested-callbacks
     */
    "max-nested-callbacks": ["error", {
      "max": 3,
    }],

    /**
     * Enforce a maximum number of parameters in function definitions.
     *
     * https://eslint.org/docs/rules/max-params
     */
    "max-params": ["error", {
      "max": 5
    }],

    /**
     * Enforce a maximum number of statements allowed in function blocks.
     *
     * https://eslint.org/docs/rules/max-statements
     */
    "max-statements": ["error", {
      "max": 17,
    }],

    /**
     * Enforce a maximum number of statements allowed per line.
     *
     * https://eslint.org/docs/rules/max-statements-per-line
     */
    "max-statements-per-line": ["error", {
      "max": 1
    }],

    /**
     * Enforce a particular style for multiline comments. 
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/multiline-comment-style
     */
    "multiline-comment-style": ["error", "starred-block"],

    /**
     * Enforce newlines between operands of ternary expressions.
     *
     * https://eslint.org/docs/rules/multiline-ternary
     */
    "multiline-ternary": ["error", "always-multiline"],

    /**
     * Require constructor names to begin with a capital letter.
     *
     * https://eslint.org/docs/rules/new-cap
     */
    "new-cap": ["error", {
      "newIsCap": true,
      "newIsCapExceptions": [],
      "newIsCapExceptionPattern": "",
      "capIsNew": true,
      "capIsNewExceptions": [],
      "capIsNewExceptionPattern": "",
      "properties": true,
    }],

    /**
     * Enforce or disallow parentheses when invoking a constructor with no
     * arguments. 
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/new-parens
     */
    "new-parens": "error",

    /**
     * Require a newline after each call in a method chain.
     *
     * https://eslint.org/docs/rules/newline-per-chained-call
     */
    "newline-per-chained-call": ["error", {
      "ignoreChainWithDepth": 2,
    }],

    /**
     * Disallow Array constructors.
     *
     * https://eslint.org/docs/rules/no-array-constructor
     */
    "no-array-constructor": "error",

    /**
     * Disallow bitwise operators.
     *
     * https://eslint.org/docs/rules/no-bitwise
     */
    "no-bitwise": ["error", {
      "allow": [],
      "int32Hint": false,
    }],

    /**
     * Disallow continue statements.
     *
     * https://eslint.org/docs/rules/no-continue
     */
    "no-continue": "error",

    /**
     * Disallow inline comments after code.
     *
     * https://eslint.org/docs/rules/no-inline-comments
     */
    "no-inline-comments": "error",

    /**
     * Disallow if statements as the only statement in else blocks. 
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/no-lonely-if
     */
    "no-lonely-if": "error",

    /**
     * Disallow mixed binary operators.
     *
     * NOTES:
     * - Added options according to AirBNB's config.
     *
     * https://eslint.org/docs/rules/no-mixed-operators
     */
    "no-mixed-operators": ["error", {
      // Arithmetic groups disallowed from mixing with other groups.
      groups: [
        ["%", "**"],
        ["%", "+"],
        ["%", "-"],
        ["%", "*"],
        ["%", "/"],
        ["**", "+"],
        ["**", "-"],
        ["**", "/"],
        ["&", "|", "^", "~", "<<", ">>", ">>>"],
        ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
        ["&&", "||"],
        ["in", "instanceof"],
      ],
      allowSamePrecedence: false,
    }],

    /**
     * Disallow mixed spaces and tabs for indentation.
     *
     * https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
     */
    "no-mixed-spaces-and-tabs": "error",

    /**
     * Disallow use of chained assignment expressions.
     *
     * https://eslint.org/docs/rules/no-multi-assign
     */
    "no-multi-assign": "error",

    /**
     * Disallow multiple empty lines. 
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/no-multiple-empty-lines
     */
    "no-multiple-empty-lines": ["error", {
      "max": 2,
      "maxEOF": 1,
      "maxBOF": 0,
    }],

    /**
     * Disallow negated conditions.
     *
     * https://eslint.org/docs/rules/no-negated-condition
     */
    "no-negated-condition": "error", // might wnat to disable this rule.

    /**
     * Disallow nested ternary expressions.
     *
     * https://eslint.org/docs/rules/no-nested-ternary
     */
    "no-nested-ternary": "error",

    /**
     * Disallow Object constructors.
     *
     * https://eslint.org/docs/rules/no-new-object
     */
    "no-new-object": "error",

    /**
     * Disallow the unary operators ++ and --.
     *
     * https://eslint.org/docs/rules/no-plusplus
     */
    "no-plusplus": ["error", {
      "allowForLoopAfterthoughts": true,
    }],

    /**
     * Disallow specified syntax.
     *
     * NOTES:
     * - Extended this setting using the AirBNB eslint.
     *
     * https://eslint.org/docs/rules/no-restricted-syntax
     */
    "no-restricted-syntax": ["error", {
      selector: "FunctionExpression",
      message: "Function expressions are not allowed. Use a function declaration or an arrow function instead."
    }, {
      selector: "CallExpresion[callee.name='setTimeout'][arguments.length!=2]",
      message: "setTimeout must always be invoked with two arguments."
    }, {
      selector: "WithStatement",
      message: "With statements are not allowed.",
    }, {
      selector: 'ForInStatement',
      message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
    }, {
      selector: 'ForOfStatement',
      message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
    }, {
      selector: 'LabeledStatement',
      message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
    }],
    
    /**
     * Looks for tabs anywhere inside a file: code, comments or anything else.
     *
     * https://eslint.org/docs/rules/no-tabs
     */
    "no-tabs": ["error", {
      /**
       * If this is set to true, then the rule will not report tabs used for
       * indentation.
       */
      "allowIndentationTabs": false,
    }],
    
    /**
     * Disallow ternary operators.
     *
     * https://eslint.org/docs/rules/no-ternary
     */
    "no-ternary": "off",

    /**
     * Disallow trailing whitespace at the end of lines. 
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/no-trailing-spaces
     */
    "no-trailing-spaces": ["error", {
      "skipBlankLines": false,
      "ignoreComments": false,
    }],
    
    /**
     * Disallow dangling underscores in identifiers.
     *
     * https://eslint.org/docs/rules/no-underscore-dangle
     */
    "no-underscore-dangle": ["error", {
      "allow": [],
      "allowAfterThis": false,
      "allowAfterSuper": false,
      "enforceInMethodNames": true,
    }],

    /**
     * Disallow ternary operators when simpler alternatives exist. 
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/no-unneeded-ternary
     */
    "no-unneeded-ternary": ["error", {
      "defaultAssignment": false,
    }],
    
    /**
     * Disallow whitespace before properties. 
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/no-whitespace-before-property<Paste>
     */
    "no-whitespace-before-property": "error",
   
    /**
     * Enforce the location of single-line statements. 
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/nonblock-statement-body-position
     */
    "nonblock-statement-body-position": ["error", "below", {
      "overrides": {},
    }],
    
    /**
     * Enforce consistent line breaks inside braces. 
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/object-curly-newline
     */
    "object-curly-newline": ["error", {
      "ObjectExpression": {
        "multiline": true,
        "consistent": true,
      },
      "ObjectPattern": {
        "multiline": true,
        "consistent": true,
      },
      "ImportDeclaration": {
        "multiline": true,
        "consistent": true,
      },
      "ExportDeclaration": {
        "multiline": true,
        "consistent": true,
      }
    }],

    /**
     * Enforce consistent spacing inside braces. 
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/object-curly-spacing
     */
    "object-curly-spacing": ["error", "always", {
      "arraysInObjects": true,
      "objectsInObjects": true,
    }],
    
    /**
     * Enforce placing object properties on separate lines. 
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/object-property-newline
     */
    "object-property-newline": ["error", {
      "allowAllPropertiesOnSameLine": true,
    }],

    /**
     * Enforce variables to be declared either together or separately in
     * functions. 
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/one-var
     */
    "one-var": ["error", "never"],

    /**
     * Require or disallow newlines around variable declarations. 
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/one-var-declaration-per-line
     */
    "one-var-declaration-per-line": ["error", "always"],

    /**
     * Require or disallow assignment operator shorthand where possible.
     * 
     * (fixable)
     *
     * https://eslint.org/docs/rules/operator-assignment
     */
    "operator-assignment": ["error", "always"],

    /**
     * Enforce consistent linebreak style for operators. 
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/operator-linebreak
     */
    "operator-linebreak": ["error", "none"],

    /**
     * Require or disallow padding within blocks. 
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/padded-blocks
     */
    "padded-blocks": ["error", "never", {
      "allowSingleLineBlocks": false,
    }],

    /**
     * Requires or disallows blank lines between the given 2 kinds of
     * statements. 
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/padding-line-between-statements
     */
    "padding-line-between-statements": ["error", {
      "blankLine": "always", 
      "prev": "var", 
      "next":"return"
    }],
    
    /**
     * Disallow using Object.assign with an object literal as the first argument
     * and prefer the use of object spread instead. 
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/prefer-object-spread
     */
    "prefer-object-spread": "error",
    
    /**
     * Require quotes around object literal property names.
     *
     * https://eslint.org/docs/rules/quote-props
     */
    "quote-props": ["error", "consistent", {
      "keywords": false,
      "unnecessary": true,
      "numbers": false,
    }],
    
    /**
     * Enforces the consistent use of either backticks, double, or single
     * quotes. 
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/quotes
     */
    "quotes": ["error", "double", {
      "avoidEscape": true,
      "allowTemplateLiterals": true,
    }],
    
    /**
     * Require or disallow semicolons instead of ASI. 
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/semi
     */
    "semi": ["error", "never", {
      "beforeStatementContinuationChars": "never",
    }],
    
    /**
     * Enforce spacing around a semicolon. 
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/semi-spacing
     */
    "semi-spacing": ["error", {
      "before": false,
      "after": true,
    }],
    
    /**
     * Enforce location of semicolons. 
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/semi-style
     */
    "semi-style": ["error", "last"],
    
    /**
     * Require object keys to be sorted.
     *
     * https://eslint.org/docs/rules/sort-keys
     */
    "sort-keys": ["off", "asc", {
      "caseSensitive": true,
      "natural": false,
    }],
   
    /**
     * Require variables within the same declaration block to be sorted.
     * (fixable)
     *
     * https://eslint.org/docs/rules/sort-vars
     */
    "sort-vars": ["off", {
      // ignores the case-sensitivity of the variables order
      "ignoreCase": false,
    }],
    
    /**
     * Enforce consistent spacing before blocks. 
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/space-before-blocks
     */
    "space-before-blocks": ["error", {
      functions: "always",
      keywords: "always",
      classes: "always",
    }],

    /**
     * Enforce consistent spacing before function definition opening
     * parenthesis. 
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/space-before-function-paren
     */
    "space-before-function-paren": ["error", "never"],

    /**
     * Enforce consistent spacing inside parentheses. 
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/space-in-parens
     */
    "space-in-parens": ["error", "never"],

    /**
     * Require spacing around infix operators. 
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/space-infix-ops
     */
    "space-infix-ops": ["error", {
      "int32Hint": false,
    }],

    /**
     * Enforce consistent spacing before or after unary operators. 
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/space-unary-ops
     */
    "space-unary-ops": ["error", {
      words: true,
      nonwords: false,
      overrides: {
        //... 
      }
    }],

    /**
     * Enforce consistent spacing after the // or /* in a comment. 
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/spaced-comment
     */
    "spaced-comment": ["off", "always", {
      "exceptions": [],
      "markers": [],
    }],

    /**
     * Enforce spacing around colons of switch statements. 
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/switch-colon-spacing
     */
    "switch-colon-spacing": ["error", {
      "after": true,
      "before": false,
    }],

    /**
     * Require or disallow spacing between template tags and their literals.
     * 
     * (fixable)
     *
     * https://eslint.org/docs/rules/template-tag-spacing
     */
    "template-tag-spacing": ["error", "never"],

    /**
     * Require or disallow Unicode byte order mark (BOM). 
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/unicode-bom
     */
    "unicode-bom": ["error", "never"],

    /**
     * Require parenthesis around regex literals. 
     *
     * (fixable)
     *
     * https://eslint.org/docs/rules/wrap-regex
     */
    "wrap-regex": "off",
  }
}
