import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AppContainer from './containers/AppContainer';
import './scss/style.scss';
import store from './store';


class App extends Component {
  render() {
    return (
      <div>
        <AppContainer />
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store={createStore(store, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <App />
  </Provider>, document.querySelector('#root')
);