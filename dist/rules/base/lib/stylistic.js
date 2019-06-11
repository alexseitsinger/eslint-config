module.exports = {
  rules: {
    /**
     * Enforce linebreaks after opening and before closing array brackets.
     * (fixable)
     *
     * https://eslint.org/docs/rules/array-bracket-newline
     */
    "array-bracket-newline": [2, {
      "multiline": true,
      "minItems": 2,
    }],

    /**
     * Enforce consistent spacing inside array brackets. (fixable)
     *
     * https://eslint.org/docs/rules/array-bracket-spacing
     */
    "array-bracket-spacing": [2, "never", {
      "singleValue": false,
      "objectsInArrays": false,
      "arraysInArrays": false,
    }],

    /**
     * Enforce line breaks after each array element. (fixable)
     *
     * https://eslint.org/docs/rules/array-element-newline
     */
    "array-element-newline": [2, "consistent"],

    /**
     * Disallow or enforce spaces inside of blocks after opening block and
     * before closing block. (fixable)
     *
     * https://eslint.org/docs/rules/block-spacing
     */
    "block-spacing": [2, "always"],

    /**
     * Enforce consistent brace style for blocks. (fixable)
     *
     * https://eslint.org/docs/rules/brace-style
     */
    "brace-style": [2, "stroustrup", {
      "allowSingleLine": false
    }],

    /**
     * Enforce camelcase naming convention.
     *
     * https://eslint.org/docs/rules/camelcase
     */
    "camelcase": [2, {
      "properties": "never",
      "ignoreDestructuring": true, // might want to be true
      "allow": [],
    }],

    /**
     * Enforce or disallow capitalization of the first letter of a comment.
     * (fixable)
     *
     * https://eslint.org/docs/rules/capitalized-comments
     */
    "capitalized-comments": [0, "always", {
      "ignorePattern": "",
      "ignoreInlineComments": false,
      "ignoreConsecutiveComments": false,
    }],
    
    /**
     * Require or disallow trailing commas. (fixable)
     *
     * https://eslint.org/docs/rules/comma-dangle
     */
    "comma-dangle": [2, "never"],

    /**
     * Enforce consistent spacing before and after commas. (fixable)
     *
     * https://eslint.org/docs/rules/comma-spacing
     */
    "comma-spacing": [2, {
      "before": false,
      "after": true,
    }],

    /**
     * Enforce consistent comma style. (fixable)
     *
     * https://eslint.org/docs/rules/comma-style
     */
    "comma-style": [2, "last", {
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
     * Enforce consistent spacing inside computed property brackets. (fixable)
     *
     * https://eslint.org/docs/rules/computed-property-spacing
     */
    "computed-property-spacing": [2, "always"],

    /**
     * Enforce consistent naming when capturing the current execution context.
     *
     * https://eslint.org/docs/rules/consistent-this
     */
    "consistent-this": [2, "that", "self"],

    /**
     * Require or disallow newline at the end of files. (fixable)
     *
     * https://eslint.org/docs/rules/eol-last
     */
    "eol-last": [2, "always"],

    /**
     * Require or disallow spacing between function identifiers and their
     * invocations. (fixable)
     *
     * https://eslint.org/docs/rules/func-call-spacing
     */
    "func-call-spacing": [2, "never"],

    /**
     * Require function names to match the name of the variable or property to
     * which they are assigned.
     *
     * https://eslint.org/docs/rules/func-name-matching
     */
    "func-name-matching": [2, "always", {
      "considerPropertyDescriptor": true,
      "includeCommonJSModuleExports": false, 
    }],

    /**
     * Require or disallow named function expressions.
     *
     * https://eslint.org/docs/rules/func-names
     */
    "func-names": [2, "always", {
      "generators": "always",
    }],

    /**
     * Enforce the consistent use of either function declarations or
     * expressions.
     *
     * https://eslint.org/docs/rules/func-style
     */
    "func-style": [2, "declaration", {
      "allowArrowFunctions": true,
    }],

    /**
     * Enforce consistent line breaks inside function parentheses. (fixable)
     *
     * https://eslint.org/docs/rules/function-paren-newline
     */
    "function-paren-newline": [2, "multiline"],

    /**
     * Disallow specified identifiers.
     *
     * https://eslint.org/docs/rules/id-blacklist
     */
    "id-blacklist": [2], // add strings in here..

    /**
     * Enforce minimum and maximum identifier lengths.
     *
     * https://eslint.org/docs/rules/id-length
     */
    "id-length": [2, {
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
    "id-match": [2, "^.+", {
      "properties": true,
      "onlyDeclarations": false,
      "ignoreDestructuring": false // might want it true
    }],  
    
    /**
     * Enforce the location of arrow function bodies. (fixable)
     *
     * https://eslint.org/docs/rules/implicit-arrow-linebreak
     */
    "implicit-arrow-linebreak": [2, "beside"],

    /**
     * Enforce consistent indentation. (fixable)
     *
     * https://eslint.org/docs/rules/indent
     */
    "indent": [2, 2, {
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
     * attributes. (fixable)
     *
     * https://eslint.org/docs/rules/jsx-quotes
     */
    "jsx-quotes": [2, "prefer-double"],

    /**
     * Enforce consistent spacing between keys and values in object literal
     * properties.
     *
     * https://eslint.org/docs/rules/key-spacing
     */
    "key-spacing": [2, { // might need to change.
      "beforeColon": false,
      "afterColon": true,
      "mode": "strict",
      "align": "colon",
    }],

    /**
     * Enforce consistent spacing before and after keywords.
     *
     * https://eslint.org/docs/rules/keyword-spacing
     */
    "keyword-spacing": [2, {
      "before": true,
      "after": true, 
      "overrides": {}
    }],

    /**
     * Enforce position of line comments.
     *
     * https://eslint.org/docs/rules/line-comment-position
     */
    "line-comment-position": [2, "above"],

    /**
     * Enforce consistent linebreak style. (fixable)
     *
     * https://eslint.org/docs/rules/linebreak-style
     */
    "linebreak-style": [2, "unix"],

    /**
     * Require empty lines around comments. (fixable)
     *
     * https://eslint.org/docs/rules/lines-around-comment
     */
    "lines-around-comment": [2, {
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
     * Require or disallow an empty line between class members. (fixable)
     *
     * https://eslint.org/docs/rules/lines-between-class-members
     */
    "lines-between-class-members": [2, "never", {
      "exceptAfterSingleLine": false,
    }],

    /**
     * Enforce a maximum depth that blocks can be nested.
     *
     * https://eslint.org/docs/rules/max-depth
     */
    "max-depth": [2, {
      "max": 4,
    }],

    /**
     * Enforce a maximum line length.
     *
     * https://eslint.org/docs/rules/max-len
     */
    "max-len": [2, {
      "code": 80,
      "tabWidth": 2,
      "comments": 80,
      "ignorePattern": "^//",
      "ignoreTrailingComments": true,
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
    "max-lines": [2, {
      "max": 300,
      "skipBlankLines": false,
      "skipComments": false,
    }],

    /**
     * Enforce a maximum number of line of code in a function.
     *
     * https://eslint.org/docs/rules/max-lines-per-function
     */
    "max-lines-per-function": [2, {
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
    "max-nested-callbacks": [2, {
      "max": 3,
    }],

    /**
     * Enforce a maximum number of parameters in function definitions.
     *
     * https://eslint.org/docs/rules/max-params
     */
    "max-params": [2, {
      "max": 5
    }],

    /**
     * Enforce a maximum number of statements allowed in function blocks.
     *
     * https://eslint.org/docs/rules/max-statements
     */
    "max-statements": [2, {
      "max": 17,
    }],

    /**
     * Enforce a maximum number of statements allowed per line.
     *
     * https://eslint.org/docs/rules/max-statements-per-line
     */
    "max-statements-per-line": [2, {
      "max": 1
    }],

    /**
     * Enforce a particular style for multiline comments. (fixable)
     *
     * https://eslint.org/docs/rules/multiline-comment-style
     */
    "multiline-comment-style": [2, "starred-block"],

    /**
     * Enforce newlines between operands of ternary expressions.
     *
     * https://eslint.org/docs/rules/multiline-ternary
     */
    "multiline-ternary": [2, "always-multiline"],

    /**
     * Require constructor names to begin with a capital letter.
     *
     * https://eslint.org/docs/rules/new-cap
     */
    "new-cap": [2, {
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
     * arguments. (fixable)
     *
     * https://eslint.org/docs/rules/new-parens
     */
    "new-parens": 2,

    /**
     * Require a newline after each call in a method chain.
     *
     * https://eslint.org/docs/rules/newline-per-chained-call
     */
    "newline-per-chained-call": [2, {
      "ignoreChainWithDepth": 2,
    }],

    /**
     * Disallow Array constructors.
     *
     * https://eslint.org/docs/rules/no-array-constructor
     */
    "no-array-constructor": 2,

    /**
     * Disallow bitwise operators.
     *
     * https://eslint.org/docs/rules/no-bitwise
     */
    "no-bitwise": [2, {
      "allow": [],
      "int32Hint": false,
    }],

    /**
     * Disallow continue statements.
     *
     * https://eslint.org/docs/rules/no-continue
     */
    "no-continue": 2,

    /**
     * Disallow inline comments after code.
     *
     * https://eslint.org/docs/rules/no-inline-comments
     */
    "no-inline-comments": 2,

    /**
     * Disallow if statements as the only statement in else blocks. (fixable)
     *
     * https://eslint.org/docs/rules/no-lonely-if
     */
    "no-lonely-if": 2,

    /**
     * Disallow mixed binary operators.
     *
     * https://eslint.org/docs/rules/no-mixed-operators
     */
    "no-mixed-operators": 2,

    /**
     * Disallow mixed spaces and tabs for indentation.
     *
     * https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
     */
    "no-mixed-spaces-and-tabs": 2,

    /**
     * Disallow use of chained assignment expressions.
     *
     * https://eslint.org/docs/rules/no-multi-assign
     */
    "no-multi-assign": 2,

    /**
     * Disallow multiple empty lines. (fixable)
     *
     * https://eslint.org/docs/rules/no-multiple-empty-lines
     */
    "no-multiple-empty-lines": [2, {
      "max": 2,
      "maxEOF": 1,
      "maxBOF": 0,
    }],

    /**
     * Disallow negated conditions.
     *
     * https://eslint.org/docs/rules/no-negated-condition
     */
    "no-negated-condition": 2,

    /**
     * Disallow nested ternary expressions.
     *
     * https://eslint.org/docs/rules/no-nested-ternary
     */
    "no-nested-ternary": 2,

    /**
     * Disallow Object constructors.
     *
     * https://eslint.org/docs/rules/no-new-object
     */
    "no-new-object": 2,

    /**
     * Disallow the unary operators ++ and --.
     *
     * https://eslint.org/docs/rules/no-plusplus
     */
    "no-plusplus": [2, {
      "allowForLoopAfterthoughts": true,
    }],

    /**
     * Disallow specified syntax.
     *
     * https://eslint.org/docs/rules/no-restricted-syntax
     */
    "no-restricted-syntax": [2, {
      "selector": "FunctionExpression",
      "message": "Function expressions are not allowed."
    }, {
      "selector": "CallExpresion[callee.name='setTimeout'][arguments.length!=2]",
      "message": "setTimeout must always be invoked with two arguments."
    }, {
      "selector": "WithStatement",
      "message": "With statements are not allowed.",
    }],
    
    /**
     * Looks for tabs anywhere inside a file: code, comments or anything else.
     *
     * https://eslint.org/docs/rules/no-tabs
     */
    "no-tabs": [2, {
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
    "no-ternary": 0,

    /**
     * Disallow trailing whitespace at the end of lines. (fixable)
     *
     * https://eslint.org/docs/rules/no-trailing-spaces
     */
    "no-trailing-spaces": [0, {
      "skipBlankLines": true,
      "ignoreComments": true,
    }],
    
    /**
     * Disallow dangling underscores in identifiers.
     *
     * https://eslint.org/docs/rules/no-underscore-dangle
     */
    "no-underscore-dangle": [2, {
      "allow": [],
      "allowAfterThis": false,
      "allowAfterSuper": false,
      "enforceInMethodNames": true,
    }],

    /**
     * Disallow ternary operators when simpler alternatives exist. (fixable)
     *
     * https://eslint.org/docs/rules/no-unneeded-ternary
     */
    "no-unneeded-ternary": [2, {
      "defaultAssignment": true,
    }],
    
    /**
     * Disallow whitespace before properties. (fixable)
     *
     * https://eslint.org/docs/rules/no-whitespace-before-property<Paste>
     */
    "no-whitespace-before-property": 2,
   
    /**
     * Enforce the location of single-line statements. (fixable)
     *
     * https://eslint.org/docs/rules/nonblock-statement-body-position
     */
    "nonblock-statement-body-position": [2, "below", {
      "overrides": {},
    }],
    
    /**
     * Enforce consistent line breaks inside braces. (fixable)
     *
     * https://eslint.org/docs/rules/object-curly-newline
     */
    "object-curly-newline": [2, {
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
     * Enforce consistent spacing inside braces. (fixable)
     *
     * https://eslint.org/docs/rules/object-curly-spacing
     */
    "object-curly-spacing": [2, "always", {
      "arraysInObjects": true,
      "objectsInObjects": true,
    }],
    
    /**
     * Enforce placing object properties on separate lines. (fixable)
     *
     * https://eslint.org/docs/rules/object-property-newline
     */
    "object-property-newline": [2, {
      "allowAllPropertiesOnSameLine": true,
    }],

    /**
     * Enforce variables to be declared either together or separately in
     * functions. (fixable)
     *
     * https://eslint.org/docs/rules/one-var
     */
    "one-var": [2, "never"],

    /**
     * Require or disallow newlines around variable declarations. (fixable)
     *
     * https://eslint.org/docs/rules/one-var-declaration-per-line
     */
    "one-var-declaration-per-line": [2, "always"],

    /**
     * Require or disallow assignment operator shorthand where possible.
     * (fixable)
     *
     * https://eslint.org/docs/rules/operator-assignment
     */
    "operator-assignment": [2, "always"],

    /**
     * Enforce consistent linebreak style for operators. (fixable)
     *
     * https://eslint.org/docs/rules/operator-linebreak
     */
    "operator-linebreak": [2, "none"],

    /**
     * Require or disallow padding within blocks. (fixable)
     *
     * https://eslint.org/docs/rules/padded-blocks
     */
    "padded-blocks": [2, "never", {
      "allowSingleLineBlocks": false,
    }],

    /**
     * Requires or disallows blank lines between the given 2 kinds of
     * statements. (fixable)
     *
     * https://eslint.org/docs/rules/padding-line-between-statements
     */
    "padding-line-between-statements": [2, {
      "blankLine": "always", 
      "prev": "var", 
      "next":"return"
    }],
    
    /**
     * Disallow using Object.assign with an object literal as the first argument
     * and prefer the use of object spread instead. (fixable)
     *
     * https://eslint.org/docs/rules/prefer-object-spread
     */
    "prefer-object-spread": 2,
    
    /**
     * Require quotes around object literal property names.
     *
     * https://eslint.org/docs/rules/quote-props
     */
    "quote-props": [2, "consistent", {
      "keywords": true,
      "unnecessary": false,
      "numbers": true,
    }],
    
    /**
     * Enforces the consistent use of either backticks, double, or single
     * quotes. (fixable)
     *
     * https://eslint.org/docs/rules/quotes
     */
    "quotes": [2, "double", {
      "avoidEscape": true,
      "allowTemplateLiterals": true,
    }],
    
    /**
     * Require or disallow semicolons instead of ASI. (fixable)
     *
     * https://eslint.org/docs/rules/semi
     */
    "semi": [2, "never", {
      "beforeStatementContinuationChars": "never",
    }],
    
    /**
     * Enforce spacing around a semicolon. (fixable)
     *
     * https://eslint.org/docs/rules/semi-spacing
     */
    "semi-spacing": [2, {
      "before": false,
      "after": true,
    }],
    
    /**
     * Enforce location of semicolons. (fixable)
     *
     * https://eslint.org/docs/rules/semi-style
     */
    "semi-style": [2, "last"],
    
    /**
     * Require object keys to be sorted.
     *
     * https://eslint.org/docs/rules/sort-keys
     */
    "sort-keys": [0, "asc", {
      "caseSensitive": true,
      "natural": false,
    }],
   
    /**
     * Require variables within the same declaration block to be sorted.
     * (fixable)
     *
     * https://eslint.org/docs/rules/sort-vars
     */
    "sort-vars": [0, {
      // ignores the case-sensitivity of the variables order
      "ignoreCase": false,
    }],
    
    /**
     * Enforce consistent spacing before blocks. (fixable)
     *
     * https://eslint.org/docs/rules/space-before-blocks
     */
    "space-before-blocks": [2, "never"],

    /**
     * Enforce consistent spacing before function definition opening
     * parenthesis. (fixable)
     *
     * https://eslint.org/docs/rules/space-before-function-paren
     */
    "space-before-function-paren": [2, "never"],

    /**
     * Enforce consistent spacing inside parentheses. (fixable)
     *
     * https://eslint.org/docs/rules/space-in-parens
     */
    "space-in-parens": [2, "never"],

    /**
     * Require spacing around infix operators. (fixable)
     *
     * https://eslint.org/docs/rules/space-infix-ops
     */
    "space-infix-ops": [2, {
      "int32Hint": false,
    }],

    /**
     * Enforce consistent spacing before or after unary operators. (fixable)
     *
     * https://eslint.org/docs/rules/space-unary-ops
     */
    "space-unary-ops": [2, {
      "words": true,
      "nonwords": true,
    }],

    /**
     * Enforce consistent spacing after the // or /* in a comment. (fixable)
     *
     * https://eslint.org/docs/rules/spaced-comment
     */
    "spaced-comment": [0, "always", {
      "exceptions": [],
      "markers": [],
    }],

    /**
     * Enforce spacing around colons of switch statements. (fixable)
     *
     * https://eslint.org/docs/rules/switch-colon-spacing
     */
    "switch-colon-spacing": [2, {
      "after": true,
      "before": false,
    }],

    /**
     * Require or disallow spacing between template tags and their literals.
     * (fixable)
     *
     * https://eslint.org/docs/rules/template-tag-spacing
     */
    "template-tag-spacing": [2, "never"],

    /**
     * Require or disallow Unicode byte order mark (BOM). (fixable)
     *
     * https://eslint.org/docs/rules/unicode-bom
     */
    "unicode-bom": [2, "never"],

    /**
     * Require parenthesis around regex literals. (fixable)
     *
     * https://eslint.org/docs/rules/wrap-regex
     */
    "wrap-regex": 2,
  }
}
