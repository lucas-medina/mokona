import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeListItem(props) {
  return (
    <Link className="homelist-item" to={props.to}>
      <i className={`homelist-item__icon fa fa-${props.icon}`}></i>
      <span className="homelist-item__title">{props.title}</span>
    </Link>
  )
}
