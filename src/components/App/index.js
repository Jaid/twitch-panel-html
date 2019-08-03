import React from "react"
import DocumentTitle from "react-document-title"
import query from "src/query"
import Panel from "components/Panel"
import classnames from "classnames"

import "modern-normalize"
import css from "./style.scss"

export default class App extends React.Component {

  render() {
    const panel = <Panel {...query}/>
    return <DocumentTitle title={_PKG_TITLE}>
      <div className={classnames(css.container, css[`${query.mode}Mode`])}>
        {panel}
      </div>
    </DocumentTitle>
  }

}