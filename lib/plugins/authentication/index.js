module.exports = authenticationPlugin
const authenticate = require("./authenticate")

function authenticationPlugin (ribose) {
  const state = { auth: false }
  ribose.authenticate = authenticate.bind(null, state)
}
