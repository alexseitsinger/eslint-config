module.exports = {
  plugins: [
    "import",
  ],
  settings: {
    "import/extensions": [
      ".js",
      ".jsx",
    ],
    "import/ignore": [
      "node_modules",
      "\\.(scss|css|less|svg|json)$",
    ],
    "import/core-modules": [],
    "import/external-module-folders": [
      "node_modules",
    ],
    "import/parsers": {},
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".json"],
      },
      // Need to add the resolver on the site config.
    },
    "import/cache": {},
  },
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
        ["builtin", "externa"],
        ["internal"],
        ["parent", "sibling", "index", "unknown"],
      ],
      "newlines-between": "always-and-inside-groups",
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
     * NOTES:
     * - Some modules use a lot of dependencies, so either increase this to a
     *   larger number, or disable it completely.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/max-dependencies.md
     */
    "import/max-dependencies": ["error", {
      max: 40,
    }],

    /**
     * Forbid unassigned imports.
     *
     * NOTES:
     * - We might need to disable this rule completely, if we find that we
     *   continue to use a larger number of unassigned modules.
     * - Sometimes, we import CSS as modules without assigning them a name. So,
     *   disable this rule completely.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unassigned-import.md
     */
    "import/no-unassigned-import": ["off", {
      allow: [
        "core-js/stable",
        "url-search-params-polyfill",
      ],
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
     * NOTES:
     * - We use dynamic requires for packages, so disable this rule.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
     */
    "import/no-dynamic-require": "off",

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
     * modules.
     *
     * NOTES:
     * - We always have unused exports in project and package entry points, as
     *   well as javascript config files. So, we add them to the ignoredExports
     *   list.
     * - missingExports doesnt count module.exports so disable that part of the
     *   rule.
     * - Each eslint config should define this rule seperately, with ignored files.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unused-modules.md
     */
    "import/no-unused-modules": ["off", {
      //src: [],
      missingExports: false,
      unusedExports: true,
      //ignoreExports: [],
    }],


    /**
     * Report potentially ambiguous parse goal (script vs. module).
     *
     * NOTES:
     * - This gets thrown from our webpack configs, so disable it.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/unambiguous.md
     */
    "import/unambiguous": "off",

    /**
     * Report CommonJS require calls and module.exports or exports.*.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md
     */
    "import/no-commonjs": ["off", {
      allowRequire: true,
      allowPrimitiveModules: true,
    }],

    /**
     * Report AMD require and define calls.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md
     */
    "import/no-amd": "error",

    /**
     * No Node.js builtin modules.
     *
     * NOTES:
     * - We might need to disable this rule completely, if we find that we
     *   continue to use a larger number of builtin modules.
     *
     * https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md
     */
    "import/no-nodejs-modules": ["error", {
      allow: ["fs", "path", "child_process"],
    }],


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
        "babel.config.js",
        ".babelrc",
        ".stylelintrc",
        ".eslintrc.js",
        "jest.*.js",
        "*.test.js",
        "**/tests/**",
        "webpack.config.js",
        "webpack.config.*.js",
        "**/webpack/**",
      ],
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
    "import/no-unused-modules": ["warn", {
      unusedExports: true,
      missingExports: false,
      //src: [],
      ignoreExports: [
        "webpack.config.js",
        "jest.config.js",
        "jest.setup.js",
        "jest.assetTransformer.js",
        "babel.config.js",
      ],
    }],

  },
}
