module.exports = {
  rules: {
    /**
     * Report any invalid exports, i.e. re-export of the same name.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
     */
    "import/export": "error",

    /**
     * Report use of exported name as identifier of default export.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
     */
    "import/no-named-as-default": "error",

    /**
     * Report use of exported name as property of default export.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md
     */
    "import/no-named-as-default-member": "error",

    /**
     * Report imported names marked with @deprecated documentation tag.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
     */
    "import/no-deprecated": "error",

    /**
     * Forbid the use of extraneous packages.
     *
     * NOTES:
     * - Since we use devDependencies in tests & webpack, we use the glob 
     *   patterns to exclude checking modules in those files.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
     */
    "import/no-extraneous-dependencies": ["error", {
      devDependencies: [
        /**
         * Jest
         */
        "tests/**",
        "**/tests/**",
        "__tests__/**",
        "**/__tests__/**",
        "jest.*.js",
        "**/jest.*.js",
        "jest/*.js",
        "**/jest/*.js",
        /**
         * Webpack
         */
        "webpack.config.js",
        "**/webpack.config.js",
        "webpack-config.*.*.js",
        "**/webpack-config.*.*.js",
        "webpack.config.*.js",
        "**/webpack.config.*.js",
        "webpack/**",
        "**/webpack/**",
        "webpack/*.js",
        "**/webpack/*.js",
        "webpack/client/*.js",
        "**/webpack/client/*.js",
        "webpack/server/*.js",
        "**/webpack/server/*.js",
      ],
      peerDependencies: false,
      optionalDependencies: false,
      //packageDir: ""
    }],

    /**
     * Forbid the use of mutable exports with var or let.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
     */
    "import/no-mutable-exports": "error",

    /**
     * Report modules without exports, or exports without matching import in
     * another module.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unused-modules.md
     */
    "import/no-unused-modules": ["error", {
      unusedExports: true,
      missingExports: true,
      //src: [],
      //ignoreExports: [],
    }],
  }
}
