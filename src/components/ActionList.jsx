import React, { Component } from 'react'
import '../scss/components/_homelist.scss'

export default class HomeList extends Component {
  render() {
    return (
      <div className="homelist">
        {this.props.children}
      </div>
    )
  }
}
