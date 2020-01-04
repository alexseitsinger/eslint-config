module.exports = {
  parserOptions: {
    ecmaVersion: 9,
    sourceType: "module"
  },
  plugins: [
    "filenames",
    "package-json",
    "import",
    "node",
    "package-json",
    "ban",
    "simple-import-sort"
  ],
  extends: [
    ...[
      "core",
      "filenames",
      "package-json",
      "import",
      "node",
      "package-json",
      "ban",
      "simple-import-sort"
    ].map(name => {
      return require.resolve(`./configs/${name}`);
    })
  ]
};
