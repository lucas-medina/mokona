import React, { Component } from 'react'
import PresentationContainer from './PresentationContainer';
import { BrowserRouter, Route } from 'react-router-dom'

export default class AppContainer extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={PresentationContainer} />
        </div>
      </BrowserRouter>
    )
  }
}
