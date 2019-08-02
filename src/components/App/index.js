import React from "react"
import DocumentTitle from "react-document-title"

import "modern-normalize"
import css from "./style.scss"

export default class App extends React.Component {

  render() {
    return <DocumentTitle title={_PKG_TITLE}>
      <div className={css.container}>
        a
      </div>
    </DocumentTitle>
  }

}