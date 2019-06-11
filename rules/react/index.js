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
