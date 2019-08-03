import React from "react"
import classnames from "classnames"
import propTypes, {defaultProps} from "lib/propTypes"
import color from "color"

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
    const borderColor = color(this.props.titleColor).lighten(0.6)
    const boxShadowColor = color(this.props.titleColor)
    const style = {
      color: "white",
      fontSize: "18px",
      fontFamily: "Ubuntu",
      fontWeight: 400,
      boxShadow: `0 0 5px ${boxShadowColor} inset`,
      borderTop: `2px solid ${borderColor}`,
    }
    const content = <span>{this.props.content}</span>
    return <div className={classnames(css.container, this.props.className)} style={style}>
      {content}
    </div>
  }

}