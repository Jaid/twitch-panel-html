import React from "react"
import classnames from "classnames"
import color from "color"
import Title from "components/Title"
import propTypes, {defaultProps} from "lib/propTypes"
import RichText from "components/RichText"

import css from "./style.scss"

/**
  * @class
  * @extends {React.Component<import("../../lib/propTypes").Props>}
  */
export default class Panel extends React.Component {

  static propTypes = propTypes

  static defaultProps = defaultProps

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
        {this.props.content && <RichText/>}
      </div>
    </div>
  }

}