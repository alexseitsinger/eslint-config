module.exports = {
  settings: {
    "import/core-modules": ["fs", "path", "child_process"],
    "import/ignore": ["node_modules", ".yalc"],
    "import/external-module-folders": ["node_modules", ".yalc"],
  },
  plugins: [
    "import",
    "simple-import-sort",
    "jest",
    "jest-formatting",
    "sort-destructure-keys",
    "better-styled-components",
    "prettier",
  ],
}
