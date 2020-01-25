module.exports = {
  parserOptions: {
    ecmaVersion: 9,
    sourceType: "module"
  },
  plugins: ["package-json"],
  extends: [require.resolve("./eslint"), require.resolve("./package-json")]
};
