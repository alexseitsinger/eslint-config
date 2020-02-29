module.exports = {
  parser: "@typescript-eslint/parser",
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolvers": {
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
