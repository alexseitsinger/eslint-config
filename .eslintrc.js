module.exports = {
  parserOptions: {
    ecmaVersion: 9,
    sourceType: "module"
  },
  extends: ["eslint", "node", "package-json"].map(n => {
    return require.resolve(`./${n}`);
  })
};
