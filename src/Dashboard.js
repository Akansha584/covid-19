import React, { Component } from "react";
import Head from "./components/head";
import ButtonBar from "./components/buttonBar";
import classes from "./Dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Head />
        <div className={classes.flex}>
          <div>
            <BrowserRouter>
              <ButtonBar />
            </BrowserRouter>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
