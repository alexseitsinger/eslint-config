module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: ".",
  },
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
  plugins: ["@typescript-eslint/eslint-plugin", "tsdoc"],
  extends: ["prettier/@typescript-eslint"],
}
