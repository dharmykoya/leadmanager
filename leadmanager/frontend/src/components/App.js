import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider as AlertProvider, positions } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import Header from './layout/Header';
import Dashboard from './leads/Dashboard';
import Alert from '../components/layout/Alert';

import { Provider } from 'react-redux';
import store from '../store';

// Alert Options
const alertOptions = {
  timeout: 3000,
  position: positions.TOP_CENTER
};
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Fragment>
            <Header />
            <Alert />
            <div className="container">
              <h1>React App with django by Damilola Adekoya</h1>
              <Dashboard />
            </div>
          </Fragment>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
