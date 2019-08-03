import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import color from "color"

import css from "./style.scss"

/**
  * @typedef {{
  *   className: *,
  *   backgroundStripesSize: number,
  *   backgroundStripesOpacity: number,
  *   backgroundColor: string,
  *   titleColor: string,
  *   borderWidth: number,
  *   borderTopRightRadius: number,
  *   title: string,
  *   titleUppercase: boolean
  * }} Props
  */

/**
  * @class
  * @extends {React.Component<Props>}
  */
export default class Panel extends React.Component {

  static propTypes = {
    className: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.arrayOf(PropTypes.object),
    ]),
    backgroundStripesSize: PropTypes.number,
    backgroundStripesOpacity: PropTypes.number,
    backgroundColor: PropTypes.string,
    titleColor: PropTypes.string,
    borderWidth: PropTypes.number,
    borderTopRightRadius: PropTypes.number,
    title: PropTypes.string,
    titleUppercase: PropTypes.bool,
  }

  static defaultProps ={
    backgroundStripesSize: 4,
    backgroundStripesOpacity: 0.02,
    backgroundColor: "rgb(23, 23, 23)",
    titleColor: "hsl(300, 100%, 50%)",
    borderWidth: 2,
    borderTopRightRadius: 30,
    title: "Title",
    titleUppercase: true,
  }

  render() {
    const textColor = color(this.props.titleColor).lighten(1.5)
    const nearGlowColor = color(this.props.titleColor).lighten(0.5)
    const farGlowColor = color(this.props.titleColor)
    const style = {
      backgroundColor: this.props.backgroundColor,
      backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent ${this.props.backgroundStripesSize / 2}px, rgba(255, 255, 255, ${this.props.backgroundStripesOpacity}) ${this.props.backgroundStripesSize / 2}px, rgba(255, 255, 255, ${this.props.backgroundStripesOpacity}) ${this.props.backgroundStripesSize}px)`,
      textShadow: `0 0 2px ${nearGlowColor}, 0 0 8px ${farGlowColor}`,
      color: textColor,
      border: `${this.props.borderWidth}px solid ${textColor}`,
      boxShadow: `0 0 3px ${farGlowColor}, 0 0 3px ${farGlowColor} inset`,
      borderTopRightRadius: `${this.props.borderTopRightRadius}px`,
    }
    const content = <span>{this.props.titleUppercase ? this.props.title.toUpperCase() : this.props.title}</span>
    return <div className={classnames(css.container, this.props.className)}>
      <div className={css.panel} style={style}>
        {content}
      </div>
    </div>
  }

}