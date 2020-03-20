import React, { Component } from "react";

import "../assets/Navbar/Navbar.css";
//content import
import Language from '../Landing/Lang/language'
// images
import mb from "../Images/mb.png";
import mbhigh from "../Images/mbhigh.png";
import logobstar from "../Images/l.png";
import logobstarhigh from "../Images/lhigh.png";
import cover from "../Images/c.png";
import coverhigh from "../Images/chigh.png";
import logobstarwhite from "../Images/logo.svg";
import logobstarhighwhite from "../Images/lwhigh.png";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      navbaState: false
    };
  }

  toggleNavBar() {
    var nextState = !this.state.navbaState;
    this.setState({
      navbaState: nextState
    });
  }

  render() {
    var content = Language.getcontent(this.props.language);

    return (


      <nav className="sd_navbar">
        {/* navbar toggle button */}
        <button
          className="sd_nav_tobbleButton"
          onClick={() => this.toggleNavBar()}
        >
          <i className="fas fa-bars"></i>
        </button>

        {/* navbar Logo */}
        <a className="sd_nav_logoLink" href="https://www.biostar.com.tw/app/en/">
          <img className="sd_nav_logo" src={logobstarwhite} alt="" />
        </a>

        <div
          className={
            this.state.navbaState
              ? "sd_nav_linkContainer show"
              : "sd_nav_linkContainer hide"
          }
        >


    {this.props.language === 'EN' ? (  <ul className="">
            <li className="">
              {/* <a className="" href="https://www.biostar.com.tw/app/tw/index.php"> */}
              <a className="" href="https://www.biostar.com.tw/app/en/">
              {content._nav_product}
              </a>
            </li>
            <li className="">
              {/* <a className="" href="https://www.biostar.com.tw/app/tw/index.php"> */}
              <a className="" href="https://www.biostar.com.tw/app/en/">
              {content._nav_support}
              </a>
            </li>
            <li className="">
              <a className="" href="https://www.biostar.com.tw/app/en/news/index.php">
              {content._nav_news}
              </a>
            </li>
            <li className="">
              {/* <a className="" href="https://www.biostar.com.tw/app/tw/award/index.php"> */}
              <a className="" href="https://www.biostar.com.tw/app/en/award/index.php">
              {content._nav_award}

              </a>
            </li>
            <li className="">
              {/* <a className="" href="https://www.biostar.com.tw/app/en/blog/index.php"> */}
              <a className="" href="https://biostarblog.wordpress.com/">
              {content._nav_blog}

              </a>
            </li>
            <li className="">
              {/* <a className="" href="https://www.biostar.com.tw/app/tw/wheretobuy/index.php"> */}
              <a className="" href="https://www.biostar.com.tw/app/en/wheretobuy/index.php">
              {content._nav_where_to_buy}
              </a>
            </li>

            <li className="">
              {/* <a className="" href="https://www.biostar.com.tw/app/tw/index.php"> */}
              <a className="" href="https://www.biostar.com.tw/app/en/">
              {content._nav_about}

              </a>
            </li>

            <li className="">
              <select className="_lang_toggle" defaultValue={this.props.language} onChange={(e) => { this.props.setLan(e.target.value)}}>
                <option value="EN">English</option>
                <option value="CN">正體中文</option>
              </select>
            </li>
            
          </ul>): 
          
          // change language ------------------------------------------------------------------------------------------
          
          (  <ul className="">
            <li className="">
              <a className="" href="https://www.biostar.com.tw/app/tw/index.php">
              {content._nav_product}
              </a>
            </li>
            <li className="">
              <a className="" href="https://www.biostar.com.tw/app/tw/index.php">
              {content._nav_support}
              </a>
            </li>
            <li className="">
              <a className="" href="https://www.biostar.com.tw/app/tw/news/index.php">
              {content._nav_news}
              </a>
            </li>
            <li className="">
              <a className="" href="https://www.biostar.com.tw/app/tw/award/index.php">
              {content._nav_award}

              </a>
            </li>
            <li className="">
              <a className="" href="https://biostarblog.wordpress.com/">
              {content._nav_blog}

              </a>
            </li>
            <li className="">
              <a className="" href="https://www.biostar.com.tw/app/tw/wheretobuy/index.php">
              {content._nav_where_to_buy}
              </a>
            </li>

            <li className="">
              <a className="" href="https://www.biostar.com.tw/app/tw/index.php">
              {content._nav_about}

              </a>
            </li>

            <li className="">
              <select className="_lang_toggle" defaultValue={this.props.language} onChange={(e) => { this.props.setLan(e.target.value)}}>
                <option value="EN">English</option>
                <option value="CN">正體中文</option>
              </select>
            </li>
            
          </ul>) }

          
        
        </div>
      </nav>
    );
  }
}

export default Navbar;
