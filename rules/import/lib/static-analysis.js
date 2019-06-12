module.exports = {
  rules: {
    /**
     * Ensure imports point to a file/module that can be resolved.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
     */
    "import/no-unresolved": ["error", {
      commonjs: true,
      amd: false,
      //ignore: [],
      caseSensitive: true,
    }],

    /**
     * Ensure named imports correspond to a named export in the remote file.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md
     */
    "import/named": "error",

    /**
     * Ensure a default export is present, given a default import.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md
     */
    "import/default": "off",

    /**
     * Ensure imported namespaces contain dereferenced properties as they are dereferenced.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md
     */
    "import/namespace": ["off", {
      allowComputed: false,
    }],

    /**
     * Restrict which files can be imported in a given folder.
     *
     * NOTES:
     * - Since we split the frontend bundles into two (client, server) we could
     *   add zones to prevent importing server bundles from client.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-restricted-paths.md
     */
    "import/no-restricted-paths": ["off", {
      zones: []
    }],

    /**
     * Forbid import of modules using absolute paths.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
     */
    "import/no-absolute-path": ["error", {
      esmodule: true,
      commonjs: true,
      amd: true,
    }],

    /**
     * Forbid require() calls with expressions.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
     */
    "import/no-dynamic-require": "error",

    /**
     * Prevent importing the submodules of other modules.
     *
     * NOTES:
     * - We often import components from subdirectories, we disable this rule.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-internal-modules.md
     */
    "import/no-internal-modules": ["off", {
      allow: [],
    }],
    
    /**
     * Forbid webpack loader syntax in imports.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
     */
    "import/no-webpack-loader-syntax": "error",

    /**
     * Forbid a module from importing itself.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-self-import.md
     */
    "import/no-self-import": "error",

    /**
     * Forbid a module from importing a module with a dependency path back to
     * itself.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md
     */
    "import/no-cycle": ["error", {
      maxDepth: Infinity,
    }],

    /**
     * Prevent unnecessary path segments in import and require statements.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-useless-path-segments.md
     */
    "import/no-useless-path-segments": ["error", {
      noUselessIndex: true,
    }],

    /**
     * Forbid importing modules from parent directories.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-relative-parent-imports.md
     */
    "import/no-relative-parent-imports": "off",

    /**
     * Forbid modules without any export, and exports not imported by any
     * modules..
     *
     * NOTES:
     * - We have unused exports in webpack configs, we disable this rule.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unused-modules.md
     */
    "import/no-unused-modules": ["off", {
      unusedExports: true,
      missingExports: true,
      //src: [],
      //ignoreExports: [],
    }],
  }
}
