import React, { Component, Fragment } from "react";
import classes from "./covidCases.css";
import Alert from "react-bootstrap/Alert";
import { connect } from "react-redux";
import { Dropdown } from "react-bootstrap";
import { thunk_action_Country } from "../store/actions/fetch_covid_Country";
import { thunk_action_indiaState } from "../store/actions/fetch_covid_India_States";
import { thunk_action_graphData } from "../store/actions/fetch_India_Graph";
import IndiaCasesGraph from "./indiaCasesGraph";

class CovidIndia extends Component {
  state = {
    selectedCountry: this.props.selectedCountry,
    selectedState: this.props.selectedState,
    showCases: this.props.showCases,
  };

  componentDidMount() {
    this.props.thunk_action_graphData();
  }

  onTargetValue = (key) => {
    this.props.indiaStates
      ? this.props.thunk_action_indiaState(key)
      : this.props.thunk_action_Country(key);
    this.setState({
      dropdownTitle: key,
      selectedState: key,
      selectedCountry: key,
      showCases: true,
    });
  };

  render() {
    const {
      total_cases,
      active_cases,
      tested,
      recovered,
      deaths,
    } = this.props.covidData;

    const dropdownClick = this.props.onClickIndia
      ? this.props.onStateSpecific
      : this.props.onCountrySpecific;

    const dropdownItems = this.props.indiaStates
      ? this.props.stateData
      : this.props.countryData;

    const dropdownTitle = this.props.indiaStates
      ? this.props.onClickIndia
        ? this.props.selectedState
        : this.state.selectedState
      : this.props.onClickWorld
      ? this.props.selectedCountry
      : this.state.selectedCountry;

    return (
      <Fragment>
        {this.props.dropdown ? (
          <div className={classes.flexbox}>
            <div>
              <Dropdown onClick={dropdownClick}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {dropdownTitle}
                </Dropdown.Toggle>
                <Dropdown.Menu
                  style={{
                    overflowY: "scroll",
                    maxHeight: "200px",
                  }}
                >
                  {dropdownItems.map((key, index) => (
                    <Dropdown.Item
                      key={index}
                      onSelect={() => this.onTargetValue(key)}
                    >
                      {key}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        ) : null}
        {this.props.isFetching ? (
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : null}
        {this.state.showCases && !this.props.isFetching ? (
          <div className={classes.flexbox}>
            <Alert variant="success">Total cases : {total_cases}</Alert>
            <Alert variant="warning">Active cases : {active_cases}</Alert>
            <Alert variant="primary">Recovered : {recovered}</Alert>
            <Alert variant="info">Tested : {tested}</Alert>
            <Alert variant="danger">Deaths : {deaths}</Alert>
            {this.props.indiaGraph ? (
              <div>
                <p className={classes.graphHeading}>Last week status (India)</p>
                <IndiaCasesGraph
                  indiaGraph_dates={this.props.indiaGraph_dates}
                  indiaGraph_cases={this.props.indiaGraph_cases}
                />
              </div>
            ) : null}
          </div>
        ) : null}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    covidData: state.dataReducer.covidData,
    stateData: state.dataReducer.stateData,
    countryData: state.dataReducer.countryData,
    isFetching: state.dataReducer.isFetching,
    indiaGraph_dates: state.dataReducer.indiaGraph_dates,
    indiaGraph_cases: state.dataReducer.indiaGraph_cases,
  };
};

const mapDispatchToProps = (dispatch) => ({
  thunk_action_Country: (key) => dispatch(thunk_action_Country(key)),
  thunk_action_indiaState: (key) => dispatch(thunk_action_indiaState(key)),
  thunk_action_graphData: () => dispatch(thunk_action_graphData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CovidIndia);
