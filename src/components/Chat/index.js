import classnames from "classnames"
import color from "color"
import React from "react"

import propTypes, {defaultProps} from "lib/propTypes"

import broadcasterBadge from "./broadcasterBadge.png"
import primeBadge from "./primeBadge.png"
import css from "./style.scss"

/**
  * @typedef {{
  *   className: *,
  *   children: *,
  * }} Props
  */

/**
  * @class
  * @extends {React.Component<import("../../lib/propTypes").Props>}
  */
export default class Chat extends React.Component {

  static propTypes = propTypes

  static defaultProps = defaultProps

  render() {
    const nicknameStyle = {
      color: color(this.props.themeColor).lightness(75),
    }
    const content = String(this.props.children).split("\n").map((line, index) => <div key={index} className={css.line}>
      <img className={css.badge} src={broadcasterBadge}/>
      <img className={css.badge} src={primeBadge}/>
      <span className={css.name} style={nicknameStyle}>Jaidchen</span>
      <span className={css.colon}>:</span>
      <span className={css.message}>{line}</span>
    </div>)
    return <div className={classnames(css.container, this.props.className)}>
      <div className={css.header}>
        <svg className={classnames(css.icon, css.leftIcon)} version="1.1"><path d="M9.2 4.528a.933.933 0 0 1-.2-.573C9 3.427 9.448 3 10 3h8c.217 0 .427.066.6.19a.926.926 0 0 1 .2 1.337l-4 5.09a1.03 1.03 0 0 1-1.6 0l-4-5.09zM2 15h11a1 1 0 1 1 0 2H2a1.001 1.001 0 0 1 0-2zm0-5h7a1 1 0 1 1 0 2H2a1.001 1.001 0 0 1 0-2zm0-5h3a1 1 0 1 1 0 2H2a1.001 1.001 0 0 1 0-2z" fillRule="evenodd"/></svg>
        Stream Chat
        <svg className={classnames(css.icon, css.rightIcon)} version="1.1"><path d="M5 5c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm8-2c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zM8.685 13.632a.572.572 0 0 1 .315.51v2.287a.57.57 0 0 1-.571.57H1.572A.572.572 0 0 1 1 16.43v-2.286c0-.216.123-.414.316-.511C1.368 13.607 2.606 13 5 13s3.633.607 3.685.632zm9.841-1.685a.86.86 0 0 1 .474.767v3.428a.858.858 0 0 1-.858.858H10.93c.042-.185.07-.374.07-.572v-2.286c0-.98-.545-1.86-1.422-2.299a5.904 5.904 0 0 0-.85-.33C9.647 11.263 11.062 11 13 11c3.59 0 5.45.91 5.526.947z" fillRule="evenodd"/></svg>
      </div>
      <div className={css.chat}>
        <div className={css.welcome}>Welcome to the chat room!</div>
        {content}
      </div>
    </div>
  }

}