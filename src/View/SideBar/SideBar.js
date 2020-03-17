import React, { Component } from "react";

import "../assets/Sidebar/Sidebar.css";

// images
import Logo from "../Images/Logo.png";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="SideBar_main">
        <img className="sb_logo" alt="" src={Logo} />

        <ul className="sb_links">
          <li>Subscribers</li>
          <li>
            <ul className="sb_sublist">
              <li>
                <Link to="/admin/listsubs">List Subscribers</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
