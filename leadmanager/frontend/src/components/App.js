import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Header from './layout/Header';
import Dashboard from './leads/Dashboard';

import { Provider } from 'react-redux';
import store from '../store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Header />
          <div className="container">
            <h1>React App with django by Damilola Adekoya</h1>
            <Dashboard />
          </div>
        </Fragment>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
