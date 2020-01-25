module.exports = {
  parserOptions: {
    ecmaVersion: 9,
    sourceType: "module"
  },
  plugins: ["node", "markdown"],
  extends: [
    require.resolve("./eslint"),
    require.resolve("./node"),
    require.resolve("./markdown"),
    "prettier"
  ]
};
