import React from "react"
import classnames from "classnames"
import propTypes, {defaultProps} from "lib/propTypes"
import color from "color"
import reactStringReplace from "react-string-replace"
import Chat from "components/Chat"
import Center from "components/Center"

import css from "./style.scss"

/**
  * @class
  * @extends {React.Component<import("../../lib/propTypes").Props>}
  */
export default class RichText extends React.Component {

  static propTypes = propTypes

  static defaultProps = defaultProps

  render() {
    const processedRichText = reactStringReplace(this.props.content, new RegExp("{(.+?)}", "gs"), token => {
      const typeMatch = new RegExp("(?<type>[a-z]+):(?<name>.+)", "gs").exec(token)
      if (typeMatch.groups.type === "bold") {
        return <b>{typeMatch.groups.name}</b>
      }
      if (typeMatch.groups.type === "colored") {
        const style = {
          color: color(this.props.themeColor).mix(color("white"), 0.4),
        }
        return <span style={style}>{typeMatch.groups.name}</span>
      }
      if (typeMatch.groups.type === "colorbold") {
        const style = {
          color: color(this.props.themeColor).mix(color("white"), 0.4),
        }
        return <b style={style}>{typeMatch.groups.name}</b>
      }
      if (typeMatch.groups.type === "br") {
        const style = {
          height: `${typeMatch.groups.name}px`,
        }
        return <div style={style}/>
      }
      if (typeMatch.groups.type === "chat") {
        return <Chat {...this.props}>{typeMatch.groups.name}</Chat>
      }
      if (typeMatch.groups.type === "center") {
        return <Center {...this.props}>{typeMatch.groups.name}</Center>
      }
      if (typeMatch.groups.type === "iconcenter") {
        const {icon, text} = /(?<icon>.+?)\/(?<text>.+)/.exec(typeMatch.groups.name).groups
        return <Center {...this.props} icon={icon}>{text}</Center>
      }
    })
    let i
    const formattedText = reactStringReplace(processedRichText, "\n", () => {
      return <br key={i++}/>
    })
    const borderColor = color(this.props.themeColor).lighten(0.6)
    const boxShadowColor = color(this.props.themeColor)
    const topColor = color(this.props.themeColor).mix(color("black"), 0.95)
    const style = {
      color: "white",
      fontSize: `${this.props.contentFontSize}px`,
      fontFamily: this.props.contentFont,
      fontWeight: this.props.contentFontWeight,
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