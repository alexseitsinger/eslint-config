module.exports = {
  plugins: [
    "import",
  ],
  settings: {
    "import/extensions": [
      ".js",
      ".jsx",
    ],
    "import/ignore": [],
    "import/core-modules": [],
    "import/external-module-folders": [
      "node_modules",
    ],
    "import/parsers": {},
    "import/resolver": {
      // Need to add the resolver on the site config.
    },
    "import/cache": {},
  },
  extends: [
    "./lib/helpful-warnings",
    "./lib/module-systems",
    "./lib/static-analysis",
    "./lib/style-guide",
  ].map(require.resolve)
}
