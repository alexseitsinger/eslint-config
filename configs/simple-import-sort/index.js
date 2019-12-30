module.exports = {
  plugins: [
    "simple-import-sort",
  ],
  rules: {
    // Force certain rules from other plugins off.
    "sort-imports": "off",
    "import/order": "off",
    "simple-import-sort/sort": "error",
  },
}
