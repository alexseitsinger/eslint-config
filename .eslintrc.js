module.exports = {
  parserOptions: {
    ecmaVersion: 9,
    sourceType: "module"
  },
  extends: [
    require.resolve("./eslint"),
    require.resolve("./node"),
    require.resolve("./package-json"),
    "prettier"
  ]
};
