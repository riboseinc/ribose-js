module.exports = authenticate

function authenticate(state, options) {
  if(!options) {
    state.auth = false
    return
  }

  state.auth = options
}
