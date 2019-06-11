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
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
     */
    "import/no-extraneous-dependencies": ["error", {
      devDependencies: false,
      optionalDependencies: false,
      peerDependencies: false,
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
