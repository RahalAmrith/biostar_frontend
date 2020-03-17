import Axios from "axios";
import Cookies from "js-cookie";

// config
import Config from "./Config.js";

class Subscribers {
  constructor() {
    this.api = {
      listSubscribers: "/api/subs/s/bdr",
      deleteSubscriber: "/api/subs/delete",
      addSubscriber: "/api/subs/add"
    };
  }

  async listSubscribers(sdate, edate) {
    const requestData = {
      sdate: sdate,
      edate: edate,
      token: Cookies.get("at")
    };

    console.log(requestData);

    var results = [];

    await Axios.post(
      `${Config.host}${Config.port}${this.api.listSubscribers}`,
      requestData
    )
      .then(async Response => {
        console.log(Response);
        results = Response.data.data;
      })
      .catch(async error => {
        console.error(error);
      });

    return results;
  }

  async addSubscription(data) {
    var success = false;
    var _subData = {
      name: data.name || "",
      email: data.email || "",
      gender: data.gender || "",
      country: data.country || "",
      pfactor: data.pfactor || "",
      ctype: data.ctype || "",
      clink: data.clink || "",
      token: Cookies.get("at")
    };
    await Axios.post(
      `${Config.host}${Config.port}${this.api.addSubscriber}`,
      _subData
    )
      .then(async Response => {
        console.log(Response);
        success = true;
      })
      .catch(async error => {
        console.error(error);
      });

    return success;
  }

  async deleteSubscriber(rid) {
    const requestData = {
      rid: rid,
      token: Cookies.get("at")
    };

    await Axios.post(
      `${Config.host}${Config.port}${this.api.deleteSubscriber}`,
      requestData
    )
      .then(async Response => {
        console.log(Response);
      })
      .catch(async error => {
        console.error(error);
      });
  }

  getProcessorName(name) {

    var _name;
    if (name !== null) {
      _name = name
        .replace("micratx", "Micro-ATX")
        .replace("mitx", "Mini-ITX")
        .replace("atx", "ATX");

    } else {
      _name = ""
    }

    return _name;
  }
}

const obj = new Subscribers();

export default obj;
