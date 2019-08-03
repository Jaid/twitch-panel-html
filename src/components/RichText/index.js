import React from "react"
import classnames from "classnames"
import propTypes, {defaultProps} from "lib/propTypes"
import color from "color"
import reactStringReplace from "react-string-replace"
import Chat from "components/Chat"

import css from "./style.scss"

/**
  * @typedef {{
  *   className: *,
  * }} Props
  */

/**
  * @class
  * @extends {React.Component<import("../../lib/propTypes").Props>}
  */
export default class RichText extends React.Component {

  static propTypes = propTypes

  static defaultProps = defaultProps

  render() {
    // const processedRichText = reactStringReplace(this.props.content, /{(.+?)}/g, token => {
    const processedRichText = reactStringReplace("Lorem {bold:ipsum} {colored:dolor} {colorbold:sit} {chat:!hi}, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", /{(.+?)}/g, token => {
      const typeMatch = /^(?<type>[a-z]+):(?<name>.+)/.exec(token)
      if (typeMatch.groups.type === "bold") {
        return <b>{typeMatch.groups.name}</b>
      }
      if (typeMatch.groups.type === "colored") {
        const style = {
          color: color(this.props.titleColor).mix(color("white"), 0.4),
        }
        return <span style={style}>{typeMatch.groups.name}</span>
      }
      if (typeMatch.groups.type === "colorbold") {
        const style = {
          color: color(this.props.titleColor).mix(color("white"), 0.4),
        }
        return <b style={style}>{typeMatch.groups.name}</b>
      }
      if (typeMatch.groups.type === "chat") {
        return <Chat>{typeMatch.groups.name}</Chat>
      }
    })
    let i
    const formattedText = reactStringReplace(processedRichText, "\n", () => {
      return <br key={i++}/>
    })
    const borderColor = color(this.props.titleColor).lighten(0.6)
    const boxShadowColor = color(this.props.titleColor)
    const topColor = color(this.props.titleColor).mix(color("black"), 0.95)
    const style = {
      color: "white",
      fontSize: "18px",
      fontFamily: "Ubuntu",
      fontWeight: 400,
      boxShadow: `0 0 5px ${boxShadowColor} inset`,
      borderTop: `2px solid ${borderColor}`,
      padding: `${this.props.contentPadding}px`,
      background: `linear-gradient(to top, black, ${topColor})`,
    }
    const content = <span>{formattedText}</span>
    return <div className={classnames(css.container, this.props.className)} style={style}>
      {content}
    </div>
  }

}