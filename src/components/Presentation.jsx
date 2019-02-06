import React, { Component } from 'react';
import { getTextFragments } from '../utils/stringLib';

import '../scss/components/_presentation.scss';


export default class Presentation extends Component {

  renderSeparateText(arr) {
    return arr.map((text, index) => <span className="presentation__titlestring" key={`${text}${index}`}>{text}</span>)
  }

  render() {
    const title = this.renderSeparateText(getTextFragments('Mokona'));
    return (
      <div className="presentation">
        <h1 className="presentation__title">{title}</h1>
        <h2 className="presentation__subtitle">Making stuff happen...</h2>
      </div>
    )
  }
}
