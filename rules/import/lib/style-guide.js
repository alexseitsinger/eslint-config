module.exports = {
  rules: {
    /**
     * Ensure all imports appear before other statements.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md
     */
    "import/first": "error",

    /**
     * Ensure all exports appear after other statements,
     *
     * NOTES:
     * - With React, we sometimes export stateless functional components, then 
     *   define its propType below, so disable this rule.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/exports-last.md
     */
    "import/exports-last": "off",

    /**
     * Report repeated import of the same module in multiple places.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
     */
    "import/no-duplicates": "error",

    /**
     * Report namespace imports.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-namespace.md
     */
    "import/no-namespace": "off",

    /**
     * Ensure consistent use of file extension within the import path.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
     */
    "import/extensions": ["error", {
      js: "never",
      jsx: "never",
      json: "always",
      css: "always",
      ico: "always",
      svg: "always",
      png: "always",
      jpg: "always",
      gif: "always",
      ttf: "always",
      otf: "always",
    }],

    /**
     * Enforce a convention in module import order.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
     */
    "import/order": ["error", {
      groups: [
        ["builtin", "external"],
        ["internal", "parent", "sibling", "index"]
      ],
      "newlines-between": "always",
    }],

    /**
     * Enforce a newline after import statements.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
     */
    "import/newline-after-import": ["error", {
      count: 1,
    }],

    /**
     * Prefer a default export if module exports a single name.
     *
     * NOTES:
     * - Using named exports in packages allows for more flexibility when the
     *   package grows and functionality is added later on. As a result, disable
     *   this rule.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
     */
    "import/prefer-default-export": "off",

    /**
     * Limit the maximum number of dependencies a module can have.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/max-dependencies.md
     */
    "import/max-dependencies": ["error", {
      max: 20,
    }],

    /**
     * Forbid unassigned imports.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unassigned-import.md
     */
    "import/no-unassigned-import": ["error", {
      allow: [],
    }],

    /**
     * Forbid named default exports.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md
     */
    "import/no-named-default": "off",

    /**
     * Forbid default exports.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-default-export.md
     */
    "import/no-default-export": "off",

    /**
     * Forbid named exports.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-export.md
     */
    "import/no-named-export": "off",

    /**
     * Forbid anonymous values as default exports,
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-anonymous-default-export.md
     */
    "import/no-anonymous-default-export": ["off", {
      allowArray: false,
      allowArrowFunction: false,
      allowAnonymousClass: false,
      allowAnonymousFunction: false,
      allowLiteral: false,
      allowObject: false,
    }],

    /**
     * Prefer named exports to be grouped together in a single export
     * declaration.
     *
     * NOTES:
     * - Since we sometimes export functions as we define them throughout a
     *   module, its probably better to disable this rule.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/group-exports.md
     */
    "import/group-exports": "off",

    /**
     * Enforce a leading comment with the webpackChunkName for dynamic imports.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/dynamic-import-chunkname.md
     */
    "import/dynamic-import-chunkname": ["error", {
      importFunctions: [],
      webpackChunknameFormat: "[a-zA-Z0-9-/_.]",
    }],
  }
}
