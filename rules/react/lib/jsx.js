module.exports = {
  rules: {
    /**
     * Enforce boolean attributes notation in JSX. (fixable)
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
     */
    "react/jsx-boolean-value": "off",

    /**
     * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md
     */
    "react/jsx-child-element-spacing": "off",

    /**
     * Validate closing bracket location in JSX. (fixable)
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
     */
    "react/jsx-closing-bracket-location": ["error", {
      "nonEmpty": "after-props",
      "selfClosing": "tag-aligned",
    }],

    /**
     * Validate closing tag location in JSX. (fixable)
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
     */
    "react/jsx-closing-tag-location": "error",

    /**
     * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions. (fixable)
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
     */
    "react/jsx-curly-spacing": ["error", { // might want to change this
      "when": "never",
      "allowMultiline": true,
    }],

    /**
     * Enforce or disallow spaces around equal signs in JSX attributes. (fixable)
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
     */
    "react/jsx-equals-spacing": ["error", "never"],

    /**
     * Restrict file extensions that may contain JSX.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
     */
    "react/jsx-filename-extension": ["warn", {
      "extensions": [".js", ".jsx"]
    }],

    /**
     * Enforce position of the first prop in JSX. (fixable)
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
     */
    "react/jsx-first-prop-new-line": ["error", "multiline"],

    /**
     * Enforce event handler naming conventions in JSX.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
     */
    "react/jsx-handler-names": ["error", {
      "eventHandlerPrefix": "handle",
      "eventHandlerPropPrefix": "on",
    }],

    /**
     * Validate JSX indentation. (fixable)
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
     */
    "react/jsx-indent": ["error", 2, {
      "checkAttributes": true,
      "indentLogicalExpressions": true,
    }],

    /**
     * Validate props indentation in JSX. (fixable)
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
     */
    "react/jsx-indent-props": ["error", "first"],

    /**
     * Validate JSX has key prop when in array or iterator.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
     */
    "react/jsx-key": "error",

    /**
     * Validate JSX maximum depth.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md
     */
    "react/jsx-max-depth": ["error", {
      "max": 10,
    }],

    /**
     * Limit maximum of props on a single line in JSX. (fixable)
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
     */
    "react/jsx-max-props-per-line": ["error", {
      //maxmimum: 1,
      when: "multiline"
    }],

    /**
     * Prevent usage of .bind() and arrow functions in JSX props.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
     */
    "react/jsx-no-bind": ["error", {
      "ignoreDOMComponents": false,
      "ignoreRefs": false,
      "allowArrowFunctions": true,
      "allowFunctions": false,
      "allowBind": false,
    }],

    /**
     * Prevent comments from being inserted as text nodes.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
     */
    "react/jsx-no-comment-textnodes": "error",

    /**
     * Prevent duplicate props in JSX.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
     */
    "react/jsx-no-duplicate-props": ["error", {
      "ignoreCase": true,
    }],

    /**
     * Prevent usage of unwrapped JSX strings.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
     */
    "react/jsx-no-literals": ["off", {
      "noStrings": false,
    }],

    /**
     * Prevent usage of unsafe target='_blank'.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
     */
    "react/jsx-no-target-blank": ["error", {
      "enforceDynamicLinks": "always",
    }],

    /**
     * Disallow undeclared variables in JSX.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
     */
    "react/jsx-no-undef": ["error", {
      "allowGlobals": false, // might want to change this.
    }],

    /**
     * Limit to one expression per line in JSX.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
     */
    "react/jsx-one-expression-per-line": ["error", {
      "allow": "single-child",
    }],

    /**
     * Enforce curly braces or disallow unnecessary curly braces in JSX.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
     */
    "react/jsx-curly-brace-presence": ["error", {
      "props": "always",
      "children": "never", // might want to change this.
    }],

    /**
     * Enforce shorthand or standard form for React fragments.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
     */
    "react/jsx-fragments": ["error", "element"], // might want ot change.

    /**
     * Enforce PascalCase for user-defined JSX components.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
     */
    "react/jsx-pascal-case": ["error", {
      "allowAllCaps": false,
      "ignore": [],
    }],

    /**
     * Disallow multiple spaces between inline JSX props. (fixable)
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md
     */
    "react/jsx-props-no-multi-spaces": "error",

    /**
     * Disallow JSX props spreading.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
     */
    "react/jsx-props-no-spreading": "off",

    /**
     * Enforce default props alphabetical sorting.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-default-props.md
     */
    "react/jsx-sort-default-props": ["off", {
      "ignoreCase": true,
    }],

    /**
     * Enforce props alphabetical sorting. (fixable)
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
     */
    "react/jsx-sort-props": ["off", {
      "callbacksLast": true,
      "shorthandFirst": true,
      "shorthandLast": false,
      "ignoreCase": true,
      "noSortAlphabetically": true,
      "reservedFirst": true,
    }],

    /**
     * Validate whitespace in and around the JSX opening and closing brackets.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
     */
    "react/jsx-tag-spacing": ["error", {
      "closingSlash": "never",
      "beforeSelfClosing": "always",
      "afterOpening": "never",
      "beforeClosing": "never",
    }],

    /**
     * Prevent React to be incorrectly marked as unused.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
     */
    "react/jsx-uses-react": "error",

    /**
     * Prevent variables used in JSX to be incorrectly marked as unused.
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
     */
    "react/jsx-uses-vars": "error",

    /**
     * Prevent missing parentheses around multilines JSX. (fixable)
     *
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
     */
    "react/jsx-wrap-multilines": ["error", {
      "declaration": "parens-new-line",
      "assignment": "parens-new-line",
      "return": "parens-new-line",
      "arrow": "parens-new-line",
      "condition": "parens-new-line",
      "logical": "parens-new-line",
      "prop": "parens-new-line",
    }],
  }
};
