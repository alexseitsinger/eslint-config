module.exports = {
  "import/parsers": {
    "@typescript-eslint/parser": [".ts", ".tsx"],
  },
  "import/resolver": {
    jest: {
      jestConfigFile: "./jest.config.js",
    },
    typescript: {
      alwaysTryTypes: true,
    },
    webpack: {
      config: "./webpack.config.dev.js",
    },
  },
}
