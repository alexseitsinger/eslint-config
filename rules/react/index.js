/**
 * @description ESLint rules for react.
 * @return {Object} The eslint config object for react rules.
 */
module.exports = {
  plugins: [
    "react",
  ],
  settings: {
    linkComponents: [
      {name: "Link", linkAttribute: "to"}
    ]
  },
  extends: [
    "./lib/general",
    "./lib/jsx",
  ].map(require.resolve)
}
