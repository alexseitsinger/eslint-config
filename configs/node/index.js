module.exports = {
  plugins: [
    "node",
  ],
  rules: {
    /**
     * ensure Node.js-style error-first callback pattern is followed
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-callback-literal.md
     */
    "node/no-callback-literal": "error",

    /**
     * disallow the assignment to exports
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-exports-assign.md
     */
    "node/no-exports-assign": "error",

    /**
     * disallow import declarations which import extraneous modules
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-extraneous-import.md
     *
     * disallow require() expressions which import extraneous modules
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-extraneous-require.md
     */
    "node/no-extraneous-import": ["error", {
      allowModules: [],
      resolvePaths: [],
      tryExtensions: [".js", ".jsx", ".json"],
    }],
    "node/no-extraneous-require": ["error", {
      allowModules: [],
      resolvePaths: [],
      tryExtensions: [".js", ".jsx", ".json"],
    }],

    /**
     * disallow import declarations which import non-existence modules
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-import.md
     *
     * disallow require() expressions which import non-existence modules
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-require.md
     */
    "node/no-missing-import": ["error", {
      allowModules: [],
      resolvePaths: [],
      tryExtensions: [".js", ".jsx", ".json"],
    }],
    "node/no-missing-require": ["error", {
      allowModules: [],
      resolvePaths: [],
      tryExtensions: [".js", ".jsx", ".json"],
    }]

    /**
     * disallow bin files that npm ignores
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-bin.md
     *
     * disallow import declarations which import private modules
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-import.md
     *
     * disallow require() expressions which import private modules
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unpublished-require.md
     */
    "node/no-unpublished-bin": ["error", {
      allowModules: [],
      convertPaths: null,
      tryExtensions: [".js", ".jsx", ".json"],
    }],
    "node/no-unpublished-import": ["error", {
      allowModules: [],
      convertPaths: null,
      tryExtensions: [".js", ".jsx", ".json"],
    }],
    "node/no-unpublished-require": ["error", {
      allowModules: [],
      convertPath: null,
      tryExtensions: [".js", ".jsx", ".json"],
    }],

    /**
     * disallow unsupported ECMAScript built-ins on the specified version
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/es-builtins.md
     *
     * disallow unsupported ECMAScript syntax on the specified version.
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/es-syntax.md
     *
     * disallow unsupported Node.js built-in APIs on the specified version
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/node-builtins.md
     */
    "node/no-unsupported-features/es-builtins": ["error", {
      // This option is read from the package.json, but can be overwritten here.
      //version: ">=8.0.0",
      // List of items to omit from this rule. This rule only accepts an array
      // of specific strings. See URL for that list.
      ignores: [],
    }],
    "node/no-unsupported-features/es-syntax": ["error", {
      // This option is read from the package.json, but can be overwritten here.
      //version: ">=8.0.0",
      // List of items to omit from this rule. This rule only accepts an array
      // of specific strings. See URL for that list.
      ignores: [],
    }],
    "node/no-unsupported-features/node-builtins": ["error", {
      // This option is read from the package.json, but can be overwritten here.
      //version: ">=8.0.0",
      // List of items to omit from this rule. This rule only accepts an array
      // of specific strings. See URL for that list.
      ignores: [],
    }],

    /**
     * make process.exit() expressions the same code path as throw
     *
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/process-exit-as-throw.md
     */
    "node/process-exit-as-throw": "error",

    /**
     * suggest correct usage of shebang
     *
     * (Fixable)
     *
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/shebang.md
     */
    "node/shebang": ["error", {
      // Perhaps, the file path to source is never handled as a bin file. This
      // option tells the rule it needs to convert these file paths.
      convertPath: {},
    }],

    /**
     * Disallow the use of deprecated node APIs
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-deprecated-api.md
     */
    "node/no-deprecated-api": ["error", {
      // This rule reads from the 'engines' field in package.json, but can be overridden here.
      //version: ">=8.0.0",
      // Items that should be omitted from this rule.
      ignoreModuleItems: [],
      ignoreGlobalItems: [],
    }],

    /**
     * This rule enforces the export style.
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/exports-style.md
     */
    "node/exports-style": ["error", "module.exports", {
      // If true, allows module.exports = exports = obj
      allowBatchAssign: false,
    }],

    /**
     * Enforce the style of file extensions in import declarations
     */
    "node/file-extension-in-import": ["error", "never", {
      tryExtensions: [".js", ".jsx", ".json"],
      // ".<ext>": "always" or "never" to override for specific extensions.
    }],

    /**
     * Perfer either the global or required version of modules.
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/buffer.md
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/console.md
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/process.md
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/text-decoder.md
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/text-encoder.md
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/url-search-params.md
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-global/url.md
     */
    "node/prefer-global/buffer": ["error", "always"],
    "node/prefer-global/console": ["error", "always"],
    "node/prefer-global/process": ["error", "always"],
    "node/prefer-global/text-decoder": ["error", "always"],
    "node/prefer-global/text-encoder": ["error", "always"],
    // We usually use a polyfill (via require) for this, so we might want to use
    // either 'never' or 'off' for this rule.
    "node/prefer-global/url-search-params": ["error", "always"],
    "node/prefer-global/url": ["error", "always"],

    /**
     * Disallows callback API in favor of promise API.
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-promises/dns.md
     * https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/prefer-promises/fs.md
     */
    "node/prefer-promises/dns": "error",
    "node/prefer-promises/fs": "error",
  },
}
