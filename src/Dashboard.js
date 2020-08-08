import React, { Component } from "react";
import Head from "./components/Head";
import ButtonBar from "./components/buttonBar";
import classes from "./Dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Head />
        <div className={classes.flex}>
          <div>
            <ButtonBar />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
