import React from "react"
import classnames from "classnames"
import propTypes, {defaultProps} from "lib/propTypes"
import color from "color"
import PropTypes from "prop-types"

import css from "./style.scss"

/**
  * @typedef {{
  *   className: *,
  *   children: *,
  *   icon: string,
  * } & import("../../lib/propTypes").Props} Props
  */

/**
  * @class
  * @extends {React.Component<Props>}
  */
export default class Center extends React.Component {

  static propTypes = {
    ...propTypes,
    icon: PropTypes.string,
  }

  static defaultProps = defaultProps

  render() {
    const backgroundColor = color(this.props.themeColor).lightness(60).alpha(0.2)
    const style = {
      background: `linear-gradient(to right, transparent, ${backgroundColor} 20%, ${backgroundColor} 80%, transparent 100%)`,
    }
    return <div className={classnames(css.container, this.props.className)} style={style}>
      {this.props.icon && <i className={classnames("fa", `fa-${this.props.icon}`, css.icon)}/>}
      <span className={css.text}>{this.props.children}</span>
    </div>
  }

}