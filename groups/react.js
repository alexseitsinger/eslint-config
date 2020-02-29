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
    "import/resolver": {
      jest: {
        jestConfigFile: "./jest.config.js",
      },
      webpack: {
        config: "./webpack.config.development.js",
      },
    },
  },
  plugins: [
    "react",
    "react-hooks",
    "better-styled-components",
    "jest",
    "jest-formatting",
  ],
  extending: ["prettier/react"],
}
