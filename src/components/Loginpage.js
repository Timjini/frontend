import React, { Component } from "react";
import Login from "../auth/Login";
import { Link } from "react-router-dom";

export default class Loginpage extends Component {
  constructor(props) {
    super(props);
    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
  }

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push("/dashboard");
  }

  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <h1>Status: {this.props.loggedInStatus}</h1>
        <Login
          handleSuccessfulAuth={this.handleSuccessfulAuth}
        />
      </div>
    );
  }
}