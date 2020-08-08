import React, { Component, Fragment } from "react";
import CovidCases from "./covidCases";
import { connect } from "react-redux";
import { thunk_action_India } from "../store/actions/fetch_covid_India";
import { thunk_action_World } from "../store/actions/fetch_covid_World";
import { thunk_action_Country } from "../store/actions/fetch_covid_Country";
import { thunk_action_indiaState } from "../store/actions/fetch_covid_India_States";
import classes from "./covidCases.css";

class ButtonBar extends Component {
  state = {
    flag: false,
    open: false,
  };

  componentDidMount() {
    this.indiaCases.click();
  }

  onIndia = () => {
    this.props.thunk_action_India();
    this.setState({
      flag: true,
      indiaGraph: true,
      dropdown: true,
      showCases: true,
      onClickWorld: false,
      onClickIndia: true,
      indiaStates: true,
      selectedState: "Select State",
    });
  };

  onWorld = () => {
    this.props.thunk_action_World();
    this.setState({
      flag: false,
      dropdown: true,
      showCases: true,
      onClickWorld: true,
      onClickIndia: false,
      indiaGraph: false,
      selectedCountry: "Select Country",
    });
  };

  onCountrySpecific = () => {
    this.props.thunk_action_Country();
    this.setState({
      flag: false,
      onClickWorld: false,
      dropdown: true,
    });
  };

  onStateSpecific = () => {
    this.props.thunk_action_indiaState();
    this.setState({
      flag: true,
      onClickIndia: false,
      dropdown: true,
      indiaStates: true,
    });
  };

  render() {
    return (
      <Fragment>
        <div className={classes.button}>
          <button
            onClick={this.onIndia}
            ref={(indiaBtn) => {
              this.indiaCases = indiaBtn;
            }}
          >
            India
          </button>
          <button onClick={this.onWorld}>World</button>
        </div>
        {this.state.dropdown && this.state.flag ? (
          <CovidCases
            showCases={this.state.showCases}
            dropdown={this.state.dropdown}
            selectedState={this.state.selectedState}
            onClickIndia={this.state.onClickIndia}
            indiaStates={this.state.indiaStates}
            onStateSpecific={this.onStateSpecific}
            indiaGraph={this.state.indiaGraph}
          />
        ) : null}
        {this.state.dropdown && !this.state.flag ? (
          <CovidCases
            showCases={this.state.showCases}
            dropdown={this.state.dropdown}
            selectedCountry={this.state.selectedCountry}
            onClickWorld={this.state.onClickWorld}
            onCountrySpecific={this.onCountrySpecific}
            indiaGraph={this.state.indiaGraph}
          />
        ) : null}
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  thunk_action_World: () => dispatch(thunk_action_World()),
  thunk_action_India: () => dispatch(thunk_action_India()),
  thunk_action_Country: () => dispatch(thunk_action_Country()),
  thunk_action_indiaState: () => dispatch(thunk_action_indiaState()),
});

export default connect(null, mapDispatchToProps)(ButtonBar);
