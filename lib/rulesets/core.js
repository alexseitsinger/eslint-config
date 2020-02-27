const eslintRules = require("../rules/eslint")
const nodeRules = require("../rules/node")

module.exports = { ...eslintRules, ...nodeRules }
