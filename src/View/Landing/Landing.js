import React, { Component } from "react";
import { confirmAlert } from "react-confirm-alert"; // Import

//content import
import Language from '../Landing/Lang/language'

import "../assets/Landing/Landing.css";

import HeaderImg from "../Images/header.png";

// components
import Navbar from "../navbar/Navbar.js";

// images
import HeaderImage from "../Images/landing.svg";
import cover from "../Images/c.png";

// video
import Vid from "../Images/video.mp4";

// Controllers
import Subscribers from "../../Controller/Subscribers.js";

class Landing extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleKeyDown(e) {
    if (e.altKey && e.shiftKey && e.keyCode === 65) {
      this.props.history.push("/admin/listsubs");
    } else if (e.altKey && e.shiftKey && e.keyCode === 83) {
      this.props.history.push("/");
    }
  }

  UNSAFE_componentWillMount() {
    window.addEventListener("keydown", event => this.handleKeyDown(event));
  }

  async handleSubmit(e) {
    e.preventDefault();
    e.persist();

    e.target.submitBtn.disabled = true;
    var subData = {
      name: e.target.name.value,
      email: e.target.email.value,
      gender: e.target.gender.value,
      country: e.target.country.value,
      pfactor: e.target.pfactor.value,
      ctype: e.target.ctype.value,
      clink: e.target.clink.value
    };

    var _ststus = await Subscribers.addSubscription(subData);

    if (_ststus) {
      confirmAlert({
        title: "Successfully Registerd!",
        message: "",
        buttons: [{
          label: 'OK',
          // onClick: () => alert('Click Yes')
        }]
      });
    } else {
    }

    e.target.submitBtn.disabled = false;
    e.target.reset();
  }

  render() {
    var content = Language.getcontent(this.props.language);
    return (
      <div className="Landing_main">
        <div className="container-fluid bg-light land_top_banner">
          <h1>{content.home_main_title}</h1>

        </div>
        <Navbar language={this.props.language} setLan={this.props.setLan} />

        <div className="land_headerImage">
          <img alt="" src={HeaderImage}></img>
        </div>

        <div className="container land_form_container">
          <h1>
            {content.home_title}
          </h1>
          {/* Form */}
          <form onSubmit={event => this.handleSubmit(event)}>
            <div className="container row land_form">
              {/* Column 01 */}
              <div className="col-md-6">
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label for="inputEmail4">{content._form_Full_Name}*</label>
                    <input
                      required
                      type="text"
                      name="name"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <label for="inputPassword4">{content._form_Email}*</label>
                    <input
                      required
                      type="email"
                      name="email"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <label for="inputPassword4">{content._form_Gender}*</label>
                    <select required className="form-control" name="gender">
                      <option></option>
                      <option value="male">{content._male}</option>
                      <option value="female">{content._female}</option>
                      <option value="other">{content._other}</option>
                    </select>
                  </div>
                  <div className="form-group col-md-12">
                    <label for="inputPassword4">{content._form_Country}*</label>
                    <input
                      required
                      type="text"
                      name="country"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <label for="exampleFormControlSelect2">
                      {content._form_Preferred_Formfactor}*
                    </label>
                    <select required className="form-control" name="pfactor">
                      <option></option>
                      <option value="atx">{content._atx}</option>
                      <option value="micratx">{content._matx}</option>
                      <option value="mitx">{content._miniitx}</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* column 2 */}
              <div className="col-md-6">
                <div className="form-group col-md-12">
                  <center>
                    <h3>{content._form_subtitle}</h3>
                    <hr />

                    <p>
                      {content._form_let_us_know}
                    </p>
                  </center>
                </div>
                <div className="form-group col-md-12">
                  <label for="inputPassword4"> {content._form_Platform}</label>
                  <select className="form-control" name="ctype">
                    <option></option>
                    <option value="website">{content._website}</option>
                    <option value="youtube">{content._yt}</option>
                    <option value="facebook">{content._fb}</option>
                    <option value="insta">{content._insta}</option>
                    <option value="twitter">{content._tw}</option>
                    {/* <option value="instagram">{content._miniitx}</option> */}
                    <option value="other">{content._other}</option>
                  </select>
                </div>
                <div className="form-group col-md-12">
                  <label for="inputPassword4"> {content._form_Link}</label>
                  <input type="url" name="clink" className="form-control" />
                </div>
                <div className="form-group col-md-12">
                  <button name="submitBtn" type="submit" className="btn btn-primary">
                    {content._form_bnt_submit}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="container land_cover">
          {/* <img alt="" src={cover} /> */}
          <video width="100%" autoPlay="true" muted={true} controls loop="true" preload="metadata">
            <source src={Vid} type="video/mp4" />
            {content._videonotload}
          </video>
        </div>

        {/* footer */}
        {/* footer Chines */}
        {this.props.language === 'EN' ? (<div className="container row land_footer">
          <div className="col-md-12">
            <hr />
          </div>

          <div className="col-md-3">
            <h4> {content._footer_About}</h4>
            <ul>
              <li> <a href="https://www.biostar.com.tw/app/en/about/history.php">{content._footer_History} </a> </li>
              <li> <a href="https://www.biostar.com.tw/app/en/about/vision.php">{content._footer_Vision} </a> </li>
              <li> <a href="https://www.biostar.com.tw/app/en/about/contact.php">{content._footer_Contact_Us}  </a> </li>
              <li> <a href="https://www.biostar.com.tw/app/en/about/Privacy_Policy.php">{content._footer_privacy} </a> </li>
              <li> <a href="https://www.biostar.com.tw/app/en/about/investor.php">投資人專區 </a> </li>
              <li> <a href="https://www.biostar.com.tw/app/en/about/stakeholder.php">利害關係人專區 </a> </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>{content._footer_Products}</h4>
            <ul>
              <li> <a href="https://www.biostar.com.tw/app/en/mb/index.php">{content._footer_Motherbaords} </a> </li>
              <li> <a href="https://www.biostar.com.tw/app/en/ssd/index.php">{content._footer_SSD} </a> </li>
              <li> <a href="https://www.biostar.com.tw/app/en/minipc/index.php">{content._footer_Mini_PC} </a> </li>
              <li> <a href="https://www.biostar.com.tw/app/en/peripheral/index.php">{content._footer_Key_Board} </a> </li>
              <li> <a href="https://www.biostar.com.tw/app/en/soc/index.php">{content._footer_SOC} </a> </li>
              <li> <a href="https://www.biostar.com.tw/app/en/accessory/index.php">{content._footer_Accessories} </a> </li>
              <li> <a href="https://www.biostar.com.tw/app/en/vga/index.php">{content._footer_VGA} </a> </li>
              <li> <a href="https://www.biostar.com.tw/embedded/index.php">{content._footer_IPC} </a> </li>
              <li> <a href="https://www.biostar.com.tw/app/en/mining/index.php">{content._footer_Mining_Motherboard} </a> </li>
              <li> <a href="https://www.biostar.com.tw/app/en/event/crypto_mining/index.htm">{content._footer_Crypto_Mining_Solutions}</a> </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>{content._footer_Support}</h4>
            <ul>
              <li> <a href="https://www.biostar.com.tw/app/en/support/e-catalouge.php">{content._footer_E_catalogue}</a> </li>
              <li> <a href="https://www.biostar.com.tw/app/en/support/faq.php">{content._footer_FAQ} </a> </li>
              <li> <a href="https://www.biostar.com.tw/app/en/support/cpu_support.php">{content._footer_CPU_Support_List} </a> </li>
              <li> <a href="https://www.biostar.com.tw/app/en/support/e-support.php">{content._footer_E_Support} </a> </li>
              <li> <a href="https://www.biostar.com.tw/app/en/support/download.php">{content._footer_Download} </a> </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4><a href="https://www.biostar.com.tw/app/en/news/index.php" style={{ color: 'white' }}>{content._footer_News}</a></h4>
            <h4><a href="https://www.biostar.com.tw/app/en/award/index.php" style={{ color: 'white' }}>{content._footer_Award}</a></h4>
            <h4><a href="https://www.biostar.com.tw/app/en/blog/index.php" style={{ color: 'white' }}>{content._footer_Blog}</a></h4>
            <h4><a href="https://www.biostar.com.tw/app/en/wheretobuy/index.php" style={{ color: 'white' }}>{content._footer_Where_to_Buy}</a></h4>

            <h4>
              <a href="https://biostarblog.wordpress.com/" >
                <i className="fab fa-blogger"></i>
              </a>
              <a href="https://www.facebook.com/BiostarHQ" >
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/biostarofficial/" >
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com/BIOSTAR_Global" >
                <i className="fab fa-twitter"></i>
              </a>
            </h4>
          </div>
        </div>) :
        // change the footer---------------------------------------------------
        
        (<div className="container row land_footer _chinese_footer_class">
          <div className="col-md-12">
            <hr />
          </div>

          <div className="col-md-3">
            <h4>關於</h4>
            <ul>
              <li> <a href="https://www.biostar.com.tw/app/tw/about/history.php">歷史</a> </li>
              <li> <a href="https://www.biostar.com.tw/app/tw/about/vision.php">遠景</a> </li>
              <li> <a href="https://www.biostar.com.tw/app/tw/about/contact.php">聯絡我們</a> </li>
              {/* <li> <a href="https://www.biostar.com.tw/app/en/about/Privacy_Policy.php">{content._footer_privacy} </a> </li> */}
              <li> <a href="https://www.biostar.com.tw/app/tw/about/investor.php">投資人專區 </a> </li>
              <li> <a href="https://www.biostar.com.tw/app/tw/about/stakeholder.php">利害關係人專區 </a> </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>產品</h4>
            <ul>
              <li> <a href="https://www.biostar.com.tw/app/tw/mb/index.php">主機板</a> </li>
              {/* <li> <a href="https://www.biostar.com.tw/app/en/ssd/index.php">{content._footer_SSD} </a> </li>
              <li> <a href="https://www.biostar.com.tw/app/en/minipc/index.php">{content._footer_Mini_PC} </a> </li>
              <li> <a href="https://www.biostar.com.tw/app/en/peripheral/index.php">{content._footer_Key_Board} </a> </li>
              <li> <a href="https://www.biostar.com.tw/app/en/soc/index.php">{content._footer_SOC} </a> </li> */}
              <li> <a href="https://www.biostar.com.tw/app/tw/accessory/index.php">配件</a> </li>
              <li> <a href="https://www.biostar.com.tw/app/tw/vga/index.php">顯示卡</a> </li>
              <li> <a href="https://www.biostar.com.tw/app/tw/ipc/index.php">工控產品</a> </li>
              {/* <li> <a href="https://www.biostar.com.tw/app/en/mining/index.php">{content._footer_Mining_Motherboard} </a> </li>
              <li> <a href="https://www.biostar.com.tw/app/en/event/crypto_mining/index.htm">{content._footer_Crypto_Mining_Solutions}</a> </li> */}
            </ul>
          </div>
          <div className="col-md-3">
            <h4>技術支援</h4>
            <ul>
              {/* <li> <a href="https://www.biostar.com.tw/app/en/support/e-catalouge.php">{content._footer_E_catalogue}</a> </li> */}
              <li> <a href="https://www.biostar.com.tw/app/tw/support/faq.php">常見問題 </a> </li>
              <li> <a href="https://www.biostar.com.tw/app/tw/support/cpu_support.php"> 支援列表</a> </li>
              <li> <a href="https://www.biostar.com.tw/app/tw/support/e-support.php">支援表單 </a> </li>
              <li> <a href="https://www.biostar.com.tw/app/tw/support/download.php">下載</a> </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4><a href="https://www.biostar.com.tw/app/tw/news/index.php" style={{ color: 'white' }}>新聞</a></h4>
            <h4><a href="https://www.biostar.com.tw/app/tw/award/index.php" style={{ color: 'white' }}>得獎</a></h4>
            {/* <h4><a href="https://www.biostar.com.tw/app/en/blog/index.php" style={{ color: 'white' }}>{content._footer_Blog}</a></h4> */}
            <h4><a href=" https://www.biostar.com.tw/app/tw/wheretobuy/index.php" style={{ color: 'white' }}>經銷據點 </a></h4>

            <h4>
              <a href="https://biostarblog.wordpress.com/" >
                <i className="fab fa-blogger"></i>
              </a>
              <a href="https://www.facebook.com/BiostarHQ" >
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/biostarofficial/" >
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com/BIOSTAR_Global" >
                <i className="fab fa-twitter"></i>
              </a>
            </h4>
          </div>
        </div>)}

      </div>
    );
  }
}

export default Landing;
