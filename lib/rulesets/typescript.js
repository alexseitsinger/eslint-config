const typescriptRules = require("../rules/typescript")
const tsdocRules = require("../rules/tsdoc")

module.exports = {
  ...typescriptRules,
  ...tsdocRules,
}
