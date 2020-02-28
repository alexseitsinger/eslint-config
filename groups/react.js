module.exports = {
  ecmaFeatures: {
    jsx: true,
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
  plugins: ["react", "react-hooks"],
  extending: ["prettier/react"],
}
