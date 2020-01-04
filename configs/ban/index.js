module.exports = {
  plugins: ["ban"],
  rules: {
    "ban/ban": [
      "error",
      {
        name: ["*", "push"],
        message: "Please use es6 spread instead."
      }
    ]
  }
}
