module.exports = {
  plugins: [
    "filenames",
    "package-json",
    "import",
    "node",
    "package-json",
    "ban",
    "simple-import-sort",
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
      "simple-import-sort",
    ].map(name => {
      return require.resolve(`./configs/${name}`)
    })
  ],
}
