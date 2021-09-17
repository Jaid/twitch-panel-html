import path from "path"

import configure from "webpack-config-jaid"

export default configure({
  robots: true,
  appDescription: "Renders TwitchTV panels.",
  icon: path.join(__dirname, "icon.png"),
  createCssFile: false,
  inlineSource: true,
})