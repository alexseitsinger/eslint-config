module.exports = {
  plugins: ["sort-exports"],
  rules: {
    "sort-exports/sort-exports": [
      "error",
      {
        // May be either asc(default) or desc.
        sortDir: "desc",
        ignoreCase: false
      }
    ]
  }
}
