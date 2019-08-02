import React from "react"
import ReactDom from "react-dom"
import App from "components/App"

const rootNode = document.createElement("div")
document.body.append(rootNode)

ReactDom.render(<App/>, rootNode)