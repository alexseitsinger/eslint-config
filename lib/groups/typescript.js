module.exports = {
  parser: "@typescript-eslint/parser",
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      jest: {
        jestConfigFile: "./jest.config.js",
      },
      webpack: {
        config: "./webpack.config.development.js",
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: ".",
  },
  plugins: ["@typescript-eslint", "tsdoc"],
  extending: ["prettier/@typescript-eslint"],
}
