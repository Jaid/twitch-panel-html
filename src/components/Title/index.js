import React from "react"
import classnames from "classnames"
import propTypes from "lib/propTypes"
import color from "color"

import css from "./style.scss"

/**
  * @class
  * @extends {React.Component<import("../../lib/propTypes").Props>}
  */
export default class Title extends React.Component {

   static propTypes = propTypes

   render() {
     const textColor = color(this.props.themeColor).lighten(1)
     const nearGlowColor = color(this.props.themeColor).lighten(0.5)
     const farGlowColor = color(this.props.themeColor)
     const backgroundStripesColor = this.props.backgroundStripesColor || color(this.props.themeColor).lighten(0.25).alpha(0.1)
     const wrapperStyle = {
       backgroundColor: this.props.backgroundColor,
       backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent ${this.props.backgroundStripesSize / 2}px, ${backgroundStripesColor} ${this.props.backgroundStripesSize / 2}px, ${backgroundStripesColor} ${this.props.backgroundStripesSize}px)`,
       textShadow: `0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 5px ${nearGlowColor}, 0 0 8px ${farGlowColor}`,
       color: textColor,
       fontSize: `${this.props.titleSize}px`,
       padding: `${this.props.titlePadding}px`,
       borderTopRightRadius: `${this.props.borderTopRightRadius}px`,
       boxShadow: "0 0 3px black inset",
     }
     if (this.props.titleUppercase) {
       wrapperStyle.textTransform = "uppercase"
     }
     const content = this.props.title
     return <div className={classnames(css.container, this.props.className)} style={wrapperStyle}>
       {this.props.icon && <i className={classnames("fa", `fa-${this.props.icon}`, css.titleIcon)}/>}
       {content}
       {this.props.hasLink && <i className={classnames("fa", "fa-link", css.linkIcon)}/>}
     </div>
   }

}