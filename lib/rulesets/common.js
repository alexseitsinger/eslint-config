const importRules = require("../rules/import")
const simpleImportSortRules = require("../rules/simple-import-sort")
const jestRules = require("../rules/jest")
const jestFormattingRules = require("../rules/jest-formatting")
const sortDestructureKeysRules = require("../rules/sort-destructure-keys")
const properTernaryRules = require("../rules/proper-ternary")
const prettierRules = require("../rules/prettier")
const betterStyledComponentsRules = require("../rules/better-styled-components")

module.exports = {
  ...importRules,
  ...simpleImportSortRules,
  ...jestRules,
  ...jestFormattingRules,
  ...sortDestructureKeysRules,
  ...properTernaryRules,
  ...betterStyledComponentsRules,
  ...prettierRules,
}
