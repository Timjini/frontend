
import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Loginpage from "./components/Loginpage";
import axios from "axios";
import Registration from "./auth/Registration";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Requests from "./components/Requests";
import Requestadd from "./components/Requestadd";
import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
  }

  checkLoginStatus() {
    axios
      .get("http://localhost:3001/logged_in", { withCredentials: true })
      .then(response => {
        if (
          response.data.logged_in &&
          this.state.loggedInStatus === "NOT_LOGGED_IN"
        ) {
          this.setState({
            loggedInStatus: "LOGGED_IN"
          });
        } else if (
          !response.data.logged_in &&
          this.state.loggedInStatus === "LOGGED_IN"
        ) {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN"
          });
        }
      })
      .catch(error => {
        console.log("login error", error);
      });
  }

  handleSuccessfulAuth(data) {
    this.handleLogin(data);
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    });
  }

  handleLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    });
  }

  render() {
    return (
      <div className="app">
        <Navbar />
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path={"/login"}
              render={props => (
                <Loginpage
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                  handleLogin={this.handleLogin}
                  handleLogout={this.handleLogout}
                />
              )}
            />
            <Route
              exact
              path={"/"}
              render={props => (
                <Home
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
            <Route
              exact
              path={"/dashboard"}
              render={props => (
                <Dashboard
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
            <Route
              exact
              path={"/requestadd"}
              render={props => (
                <Requestadd
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
             <Route
              exact
              path={"/requests"}
              render={props => (
                <Requests
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
            <Route
              exact
              path={"/registration"}
              render={props => (
                <Registration
                  handleSuccessfulAuth={this.handleSuccessfulAuth}
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}