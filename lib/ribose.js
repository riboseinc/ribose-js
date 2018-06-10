module.exports = RiboseApi

const PLUGINS = [
  require("../lib/plugins/authentication"),
  require("../lib/plugins/endpoint-methods")
]

function RiboseApi (options) {
  const api = {
    plugin: (pluginFunction) => pluginFunction(api)
  }

  PLUGINS.forEach(api.plugin)
  console.log(api);
  return api
}
