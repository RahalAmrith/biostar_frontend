import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// alert Styles
import "./View/assets/common/alert.css";

// views
import Landing from "./View/Landing/Landing.js";
import Admin from "./View/Admin/Admin.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "EN"
    };
  }

  UNSAFE_componentWillMount() {
    var _lan = window.localStorage.getItem("lang");
    if (_lan !== null) {
      this.setLan(_lan);
    }
  }

  setLan(lan) {
    window.localStorage.setItem("lang", lan);
    this.setState({
      language: lan
    });
  }
  render() {
    return (
      <div className="App">
        <Router basename={"/new_product"}>
          <Switch>
            <Route
              path="/"
              exact
              strict
              render={props => (
                <Landing
                  {...props}
                  language={this.state.language}
                  setLan={this.setLan.bind(this)}
                />
              )}
            />
            <Route
              path="/admin"
              strict
              render={props => <Admin {...props} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
