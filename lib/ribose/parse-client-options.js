module.exports = parseOptions

const defaults = require("lodash/defaults")
const pick = require("lodash/pick")

const getRequestAgent = require("./get-request-agent")
const DEFAULTS = require('./defaults')

const OPTION_NAMES = [
  "timeout",
  "baseUrl",
  "agent",
  "headers"
]

function parseOptions (userOptions) {
  if (!userOptions) {
    userOptions = {}
  }

  const options = defaults(pick(userOptions, OPTION_NAMES), DEFAULTS)

  const clientDefaults = {
    baseUrl: options.baseUrl,
    headers: options.headers,
    request: {
      timeout: options.timeout
    }
  }
  if (userOptions.protocol) {
    clientDefaults.baseUrl = `${userOptions.protocol}://${userOptions.host}`

    /* istanbul ignore else */
    if (userOptions.port) {
      clientDefaults.baseUrl += `:${userOptions.port}`
    }

    // Check if a prefix is passed in the options and strip any leading or trailing slashes from it.
    /* istanbul ignore else */
    if (userOptions.pathPrefix) {
      clientDefaults.baseUrl += '/' + userOptions.pathPrefix.replace(/(^[/]+|[/]+$)/g, '')
    }
  }
  /* istanbul ignore else */

  if (!process.browser) {
    clientDefaults.request.agent = getRequestAgent(clientDefaults.baseUrl, userOptions)
  }

  return clientDefaults
}
