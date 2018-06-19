"use strict"

module.exports = apiPlugin

const pick = require("lodash/pick")

const method = require("./method")
const ENDPOINT_DEFAULTS = require("../../routes.json")

function apiPlugin (ribose) {
  Object.keys(ENDPOINT_DEFAULTS).forEach(resource => {
    ribose[resource] = {}

    Object.keys(ENDPOINT_DEFAULTS[resource]).forEach(apiName => {
      let apiOptions = ENDPOINT_DEFAULTS[resource][apiName]

      const endpointDefaults = pick(
        apiOptions, ["method", "url", "headers", "request"]
      )

      ribose[resource][apiName] = method.bind(
        null, ribose, endpointDefaults, apiOptions.params
      )
    })
  })
}
