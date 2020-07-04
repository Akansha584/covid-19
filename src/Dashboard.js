import React, { Component } from "react";
import Head from "./components/Head";
// import Updates from "./components/Updates";
import classes from "./Dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Dashboard extends Component {
  render() {
    return (
      <div className={classes.bg}>
        <Head />
        {/* <div className={classes.flex}>
          <div>
            <Updates />
          </div>
        </div> */}
      </div>
    );
  }
}

export default Dashboard;
