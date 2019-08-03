import path from "path"

import configure from "webpack-config-jaid"

export default configure({
  publishimo: {fetchGithub: true},
  robots: true,
  appDescription: "Renders TwitchTV panels.",
  icon: path.join(__dirname, "icon.png"),
  createCssFile: false,
  inlineSource: true,
  extraProduction: {
    devtool: "eval-source-map", // inlines SourceMap per module
  },
})