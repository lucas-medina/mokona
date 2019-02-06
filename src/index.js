import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Presentation from './components/Presentation';
import store from './store';

import './scss/style.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Presentation />
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store={createStore(store)}>
    <App />
  </Provider>, document.querySelector('#root')
);