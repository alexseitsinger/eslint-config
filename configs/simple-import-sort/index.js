module.exports = {
  plugins: [
    "simple-import-sort",
  ],
  rules: {
    "simple-import-sort/sort": "error",
    // Force certain rules from other plugins off.
    "sort-imports": "off",
    "import/order": "off",
  },
}
