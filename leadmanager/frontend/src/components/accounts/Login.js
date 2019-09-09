import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Register extends Component {
  state = {
    email: '',
    password: ''
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(56, 'submit');
  };
  render() {
    const { username, password } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label for="name">UserName</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
            onChange={this.onChange}
            name="name"
            value={username}
          />
        </div>
        <div className="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter password"
            name="password"
            onChange={this.onChange}
            value={password}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    );
  }
}

export default Register;
