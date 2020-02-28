module.exports = {
  settings: {
    "import/resolver": {
      jest: {
        jestConfigFile: "./jest.config.js",
      },
      webpack: {
        config: "./webpack.config.development.js",
      },
    },
  },
  plugins: ["jsdoc"],
}
