import React, { Component } from "react";

import Cookies from "js-cookie";
import Particals from "particlesjs";
// views
import SideBar from "../SideBar/SideBar.js";
import ListSubscribers from "./ListSubscribers.js";

// controllers
import Admin_Controller from "../../Controller/admin.js";

import "../assets/Admin/Admin.css";
import { Route } from "react-router-dom";

class Admin extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      loginError: "",
      cUser: ""
    };
  }
  handleKeyDown(e) {
    if (e.altKey && e.shiftKey && e.keyCode === 65) {
      this.props.history.push("/admin/listsubs");
    } else if (e.altKey && e.shiftKey && e.keyCode === 83) {
      this.props.history.push("/");
    }
  }

  async UNSAFE_componentWillMount() {
    window.addEventListener("keydown", event => this.handleKeyDown(event));
    const tokenAvailbility = await Cookies.get("at");
    if (tokenAvailbility !== undefined) {
      await this.setState({
        loggedIn: true
      });
    }
  }

  componentDidMount() {
    Particals.init({
      selector: ".particals",
      color: ["#DA0463", "#404B69"],
      connectParticles: true,
      maxParticles: 250,
      speed: 0.7
    });
  }

  async handleLogin(e) {
    e.preventDefault();

    const _uname = e.target.uname.value;
    const _pass = e.target.pass.value;

    if (await Admin_Controller.logIn(_uname, _pass)) {
      await this.setState({
        loggedIn: true,
        loginError: "",
        cUser: _uname
      });
      await this.props.history.push("/admin/listsubs");
    } else {
      await this.setState({
        loggedIn: false,
        loginError: "Invalid credentials.!"
      });
    }
  }

  render() {
    if (this.state.loggedIn) {
      return (
        <div className="admin_container">
          <SideBar />
          <h1 className="admin_title">Welcome to Biostar pre-sale page </h1>
          <Route exact path={`/admin/listsubs`} component={ListSubscribers} />
        </div>
      );
    }
    // login page
    else {
      return (
        <div className="admin_login_container">
          <canvas className="particals" />
          <div className="admin_login_form">
            <h1>Log in</h1>

            <form onSubmit={event => this.handleLogin(event)}>
              <label>{this.state.loginError}</label>
              <input
                required
                type="text"
                name="uname"
                placeholder="Enter your username"
              />
              <input
                required
                type="password"
                name="pass"
                placeholder="Enter your password"
              />

              <button>Login</button>
            </form>
          </div>
        </div>
      );
    }
  }
}

export default Admin;
