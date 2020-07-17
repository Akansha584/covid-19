import React, { Component, Fragment } from "react";
import India from "./covidIndia";
import { connect } from "react-redux";
import { thunk_action_India } from "../store/actions/fetch_covid_India";
import { thunk_action_World } from "../store/actions/fetch_covid_World";
import { thunk_action_Country } from "../store/actions/fetch_covid_Country";
import classes from "./covidIndia.css";

class ButtonBar extends Component {
  state = {
    flag: false,
    open : false
  };

  onIndia = () => {
    this.props.thunk_action_India();
    this.setState({
      flag: true,
      countryDropdown : false,
      showCases : true
    });
  };

  onWorld = () => {
    this.props.thunk_action_World();
    this.setState({
      flag: true,
      countryDropdown : false,
      showCases : true
    });
  };

  onCountrySpecific = () => {
    this.props.thunk_action_Country();
    this.setState({
      flag: false,
      countryDropdown: true,
      showCases : false
    });
  };

  render() {
    return (
      <Fragment>
        <div className={classes.button}>
          <button onClick={this.onIndia}>India</button>
          <button onClick={this.onWorld}>World</button>
          <button onClick={this.onCountrySpecific}>Country Specific</button>
        </div>
        {this.state.flag ? <India  showCases={this.state.showCases}/> : null}
        {this.state.countryDropdown ? <India countryDropdown={this.state.countryDropdown} showCases={this.state.showCases}/> : null}
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  thunk_action_World: () => dispatch(thunk_action_World()),
  thunk_action_India: () => dispatch(thunk_action_India()),
  thunk_action_Country: () => dispatch(thunk_action_Country()),
});

export default connect(null, mapDispatchToProps)(ButtonBar);
