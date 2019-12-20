module.exports = {
  parserOptions: {
    ecmaVersion: 9,
    sourceType: "module",
  },
  extends: [
    "core",
    "import",
    "node",
    "package-json",
    "ban",

    /**
     * React & Redux
     */
    "react",
    "react-hooks",
    "react-redux",
    "redux-saga",

    /**
     * Jest
     */
    "jest",
    "jest-formatting",

    /**
     * Misc.
     */
    "markdown",
    "simple-import-sort",
    "sort-exports",
    "filenames",
    //"align-assignments",
  ].map(name => {
    if (name === "core") {
      return require.resolve(`./configs/core`)
    }
    try {
      require(`eslint-plugin-${name}`)
      return require.resolve(`./configs/${name}`)
    }
    catch (e) {
      //...
    }
  })
}
