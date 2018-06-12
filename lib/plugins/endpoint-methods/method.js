module.exports = apiMethod

const clone = require("lodash/clone")
const validate = require("./validate")
const defaultsDeep = require("lodash/defaultsDeep")

function apiMethod(ribose, endpointDefaults, endpointParams, options, callback) {
  options = clone(options) || {}
  const endpointOptions = defaultsDeep(options, endpointDefaults)

  const promise = Promise.resolve(endpointOptions).
    then(validate.bind(null, endpointParams)).
    then(ribose.request)

  if (callback) {
    promise.then(callback.bind(null, null), callback)
    return
  }

  return promise
}
