import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import classes from "./Head.css";

class Head extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand style={{ width: "100%" }}>
          <div className={classes.center}>
            <b>
              Coronavirus disease (COVID-19) pandemic <br />
              (LIVE UPDATE)
            </b>
          </div>
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default Head;
