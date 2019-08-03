import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import propTypes, {defaultProps} from "lib/propTypes"

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
    const style = {
      color: "white",
      fontSize: "18px",
      fontFamily: "Ubuntu",
      fontWeight: 400,
    }
    const content = <span>Component RichText</span>
    return <div className={classnames(css.container, this.props.className)} style={style}>
      {content}
    </div>
  }

}