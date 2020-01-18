import classnames from "classnames"
import color from "color"
import React from "react"

import propTypes, {defaultProps} from "lib/propTypes"
import RichText from "components/RichText"
import Title from "components/Title"

import css from "./style.scss"

/**
  * @class
  * @extends {React.Component<import("../../lib/propTypes").Props>}
  */
export default class Panel extends React.Component {

  static propTypes = propTypes

  static defaultProps = defaultProps

  render() {
    const borderColor = color(this.props.themeColor).lighten(0.6)
    const boxShadowColor = color(this.props.themeColor)
    const panelStyle = {
      border: `${this.props.borderWidth}px solid ${borderColor}`,
      borderTopRightRadius: `${this.props.borderTopRightRadius}px`,
      boxShadow: `0 0 3px ${boxShadowColor}`,
    }
    return <div className={classnames(css.container, this.props.className)}>
      <div className={css.panel} style={panelStyle}>
        <Title {...this.props}/>
        {this.props.content && <RichText {...this.props}/>}
      </div>
    </div>
  }

}