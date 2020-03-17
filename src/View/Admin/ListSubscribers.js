import React, { Component } from "react";

import "../assets/Admin/ListSubscribers.css";

// Controllers
import Subscribers from "../../Controller/Subscribers.js";

class ListSubscribers extends Component {
  constructor() {
    super();
    this.state = {
      subscribersList: null,
      updater: 0
    };
  }

  async UNSAFE_componentWillMount() {
    const sublist = await Subscribers.listSubscribers("", "");
    this.setState({
      subscribersList: sublist
    });
  }

  async handleSearch(e) {
    e.preventDefault();

    const _sDate = e.target.sdate.value;
    const _eDate = e.target.edate.value;

    const sublist = await Subscribers.listSubscribers(_sDate, _eDate);
    this.setState({
      subscribersList: sublist
    });
  }

  async deleteItem(id, index) {
    var con = window.confirm("Are you sure do you want to delete the item");
    if (con) {
      await Subscribers.deleteSubscriber(id);
      this.state.subscribersList.splice(index, 1);
      this.setState({
        updater: this.state.updater++
      });
    }
  }

  downloadJSOn() {
    var file = new Blob([JSON.stringify(this.state.subscribersList)], {
      type: "text/plain"
    });

    var jsonFile = window.URL.createObjectURL(file);

    var dFile = document.createElement("a");
    dFile.href = jsonFile;
    dFile.download = "List.json";
    dFile.click();
  }

  async downloadCSV() {
    var csvData =
      "#,Name,Email,Gender,Channel Type, Preferwd from Facror, Channel URL,date\n";

    await this.state.subscribersList.map((data, i) => {
      csvData += `${i},${data.fullname},${data.email},${data.gender},${
        data.channeltype
      },${Subscribers.getProcessorName(data.preferfromfactor)},${
        data.channellink
      },${data.created_on.split("T")[0]}\n`;
    });
    var file = new Blob([csvData], {
      type: "text/csv"
    });

    var csvFile = window.URL.createObjectURL(file);

    var dFile = document.createElement("a");
    dFile.href = csvFile;
    dFile.download = "List.csv";
    dFile.click();
  }

  render() {
    var dataList;

    if (this.state.subscribersList !== null) {
      if (this.state.subscribersList.length > 0) {
        dataList = this.state.subscribersList.map((data, i) => {
          return (
            <tr key={i}>
              <th scope="row">{i + 1}</th>
              <td>{data.fullname}</td>
              <td>{data.email}</td>
              <td>{data.gender}</td>
              <td>{data.channeltype}</td>
              <td>{Subscribers.getProcessorName(data.preferfromfactor)}</td>
              <td>
                {data.channellink !== null && data.channellink !== undefined && data.channellink !== "" ? (
                  <a target="blank" href={data.channellink}>
                    {data.channeltype} Link{" "}
                  </a>
                ) : (
                  "N/A"
                )}
              </td>
              <td>{data.created_on.split("T")[0]}</td>
              <td align="center">
                <button
                  className="ls_delBtn"
                  onClick={() => this.deleteItem(data.rid, i)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        });
      } else {
        dataList = (
          <tr>
            <td align="center" colSpan="9">
              {" "}
              No Subscribers found for selected date range
            </td>
          </tr>
        );
      }
    } else {
      dataList = (
        <tr>
          <td align="center" colSpan="9">
            {" "}
            Please search to list subscribers
          </td>
        </tr>
      );
    }

    return (
      <div>
        <h1 className="ls_headding">List Subscribers</h1>
        <form className="ls_form" onSubmit={event => this.handleSearch(event)}>
          <label>Enter Start Date</label>
          <input type="date" name="sdate" placeholder="Enter start date" />
          <label>Enter End Date</label>
          <input type="date" name="edate" placeholder="Enter end date" />
          <button>Search</button>
        </form>

        <hr />

        <button className="ls_downloadBtn" onClick={() => this.downloadJSOn()}>
          Download JSON
        </button>

        <button className="ls_downloadBtn" onClick={() => this.downloadCSV()}>
          Download CSV
        </button>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Gender</th>
              <th scope="col">channel Type</th>
              <th scope="col">Prefered from factor</th>
              <th scope="col">Youtube Channel URL</th>
              <th colSpan="2" scope="col">
                Subscribed date
              </th>
            </tr>
          </thead>
          <tbody>{dataList}</tbody>
        </table>
      </div>
    );
  }
}

export default ListSubscribers;
