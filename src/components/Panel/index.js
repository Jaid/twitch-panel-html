import React from "react"
import classnames from "classnames"
import color from "color"
import Title from "components/Title"
import propTypes from "lib/propTypes"

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
  *   titleUppercase: boolean,
  *   titleSize: number,
  *   titlePadding: number,
  *   hasLink: boolean
  * }} Props
  */

/**
  * @class
  * @extends {React.Component<Props>}
  */
export default class Panel extends React.Component {

  static propTypes = propTypes

  static defaultProps = {
    backgroundStripesSize: 4,
    backgroundStripesOpacity: 0.02,
    backgroundColor: "rgb(23, 23, 23)",
    titleColor: "hsl(0, 100%, 50%)",
    borderWidth: 2,
    borderTopRightRadius: 30,
    title: "Panel",
    titleUppercase: true,
    titleSize: 36,
    titlePadding: 12,
  }

  render() {
    const borderColor = color(this.props.titleColor).lighten(0.6)
    const boxShadowColor = color(this.props.titleColor)
    const panelStyle = {
      border: `${this.props.borderWidth}px solid ${borderColor}`,
      borderTopRightRadius: `${this.props.borderTopRightRadius}px`,
      boxShadow: `0 0 3px ${boxShadowColor}`,
    }
    return <div className={classnames(css.container, this.props.className)}>
      <div className={css.panel} style={panelStyle}>
        <Title {...this.props}/>
      </div>
    </div>
  }

}