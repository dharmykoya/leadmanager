import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider as AlertProvider, positions } from 'react-alert';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import AlertTemplate from 'react-alert-template-basic';
import Header from './layout/Header';
import Dashboard from './leads/Dashboard';
import Alert from '../components/layout/Alert';
import Login from '../components/accounts/Login';
import Register from '../components/accounts/Register';
import PrivateRoute from '../components/common/PrivateRoute';
import { Provider } from 'react-redux';
import store from '../store';
import {loadUser} from '../actions/auth'

// Alert Options
const alertOptions = {
  timeout: 3000,
  position: positions.TOP_CENTER
};
class App extends Component {
  componentDidMount(){
    store.dispatch(loadUser())
  }
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Header />
              <Alert />
              <div className="container">
                <h1>React App with django by Damilola Adekoya</h1>
                <PrivateRoute exact path="/" component={Dashboard} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
              </div>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
