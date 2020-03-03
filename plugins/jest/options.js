module.exports = {
  env: {
    "jest": true,
    "jest/globals": true,
  },
  settings: {
    "import/resolver": {
      jest: {
        jestConfigFile: "./jest.config.js",
      },
    },
  },
}
