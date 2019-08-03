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
     const textColor = color(this.props.titleColor).lighten(1)
     const nearGlowColor = color(this.props.titleColor).lighten(0.5)
     const farGlowColor = color(this.props.titleColor)
     const wrapperStyle = {
       backgroundColor: this.props.backgroundColor,
       backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent ${this.props.backgroundStripesSize / 2}px, rgba(255, 255, 255, ${this.props.backgroundStripesOpacity}) ${this.props.backgroundStripesSize / 2}px, rgba(255, 255, 255, ${this.props.backgroundStripesOpacity}) ${this.props.backgroundStripesSize}px)`,
       textShadow: `0 0 2px rgba(0, 0, 0, 0.5), 0 0 5px ${nearGlowColor}, 0 0 8px ${farGlowColor}`,
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
       {content}
     </div>
   }

}