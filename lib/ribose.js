module.exports = RiboseApi

const Hook = require("before-after-hook")
const defaultsDeep = require("lodash/defaultsDeep")
const parseClientOptions = require("./ribose/parse-client-options")

const PLUGINS = [
  require("../lib/plugins/authentication"),
  require("../lib/plugins/endpoint-methods")
]

function RiboseApi (options) {
  const hook = new Hook()
  const defaults = defaultsDeep(parseClientOptions(options), ENDPOINT_DEFAULTS)

  const api = {
    hook,
    plugin: (pluginFunction) => pluginFunction(api),

    request: (options) => api.hook(
      "request", defaultsDeep(options, defaults), request
    )
  }

  PLUGINS.forEach(api.plugin)
  console.log(api);
  return api
}
