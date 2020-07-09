import React, { Component } from "react";
import Head from "./components/head";
import Updates from "./components/updatedIndia";
import classes from "./Dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

class Dashboard extends Component {
  render() {
    return (
      <div className={classes.bg}>
        <Head />
        <div className={classes.flex}>
          <div>
            <BrowserRouter>
              <Updates />
            </BrowserRouter>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
