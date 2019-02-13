import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../scss/components/_actionlist.scss'

export default class ActionList extends Component {
  render() {
    return (
      <div className="actionlist">
        <Link className="actionlist__item" to="/todo">
          <i className="fa fa-list"></i>
          <span className="actionlist__itemtitle">To-do</span>
        </Link>
        <Link className="actionlist__item" to="/annotations">
          <i className="fa fa-pencil"></i>
          <span className="actionlist__itemtitle">Annotations</span>
        </Link>
      </div>
    )
  }
}
