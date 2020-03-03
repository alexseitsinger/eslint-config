module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
    linkComponents: [
      { name: "Link", linkAttribute: "to" },
      { name: "Anchor", linkAttribute: "href" },
    ],
  },
}
