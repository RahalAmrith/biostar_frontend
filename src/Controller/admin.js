import Axios from "axios";
import Cookies from "js-cookie";

import Config from "./Config.js";

// crypto
import CryptoJs from "crypto-js";

class Admin_Controller {
  constructor() {
    // this.uNamelist = ["admin", "Rahal", "Hirusha", "Padula", "Kavindu"];
    // this.passlist = [
    //   "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918",
    //   "240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9",
    //   "240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9",
    //   "240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9",
    //   "d51eb5150a4424ccfe9573b9b62489475f2943bb9962fc0df13c88da4d62aa6d"
    // ];

    this.apis = {
      login: "/api/subs/login"
    };
  }

  async logIn(uName, pass) {
    var status = false;
    const userData = {
      uName: uName,
      pass: CryptoJs.SHA256(pass).toString()
    };

    await Axios.post(`${Config.host}${Config.port}${this.apis.login}`, userData)
      .then(async Response => {
        await Cookies.set('at', Response.data.token)
        status = true;
      })
      .catch(err => {
        console.log(err);
      });

    return status;
  }
}

const obj = new Admin_Controller();

export default obj;
