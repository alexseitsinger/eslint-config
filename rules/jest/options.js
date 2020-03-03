module.exports = {
  env: {
    jest: true,
  },
  globals: {
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
