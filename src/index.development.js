import React from "react"
import ReactDom from "react-dom"

import HotApp from "components/HotApp"

const rootNode = document.createElement("div")
document.body.append(rootNode)

ReactDom.render(<HotApp/>, rootNode)