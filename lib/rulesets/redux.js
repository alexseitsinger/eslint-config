const reactReduxRules = require("../rules/react-redux")
const reduxSagaRules = require("../rules/redux-saga")

module.exports = { ...reactReduxRules, ...reduxSagaRules }
