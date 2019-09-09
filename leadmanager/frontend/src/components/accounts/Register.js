import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Register extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    password2: ''
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(56, 'submit');
  };
  render() {
    const { username, email, password, password2 } = this.state;
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
          <label for="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name="email"
            onChange={this.onChange}
            value={email}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
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
        <div className="form-group">
          <label for="confirm_password">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirm_password"
            placeholder="Re-enter password"
            name="password2"
            onChange={this.onChange}
            value={password2}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    );
  }
}

export default Register;
