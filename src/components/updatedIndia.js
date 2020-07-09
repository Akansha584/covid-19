import React, { Component, Fragment } from "react";
// import classes from "./Updates.css";
import India from "./covidIndia";
import World from "./covidWorld";
import { Route, NavLink, Switch } from "react-router-dom";

import classes from "./covidIndia.css";

class Updates extends Component {
  render() {
    return (
      <Fragment>
        <div className={classes.button}>
          <button><NavLink to="/India">India</NavLink></button>
          <button> <NavLink to="/World">World</NavLink></button>
        </div>
        <Switch>
          <Route path="/India" component={India} />
          <Route path="/World" component={World} />
        </Switch>

        {/* <Cases content={this.props.indiaData} updateIndia={this.updateIndia} /> */}
      </Fragment>
    );
  }
}

export default Updates;
