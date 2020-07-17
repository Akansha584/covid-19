import React, { Component, Fragment } from "react";
import classes from "./covidIndia.css";
import Alert from "react-bootstrap/Alert";
import { connect } from "react-redux";
import { Dropdown } from "react-bootstrap";
import { thunk_action_Country } from "../store/actions/fetch_covid_Country";
import IndiaCasesGraph from './indiaCasesGraph'

class CovidIndia extends Component {
  state = {
    selectedCountry: "Select Country",
    showCases : this.props.showCases
  };

  onTargetValue = (key) => {
    this.props.thunk_action_Country(key);
    this.setState({
      selectedCountry: key,
      showCases : true
    });
  };

  render() {
    const {total_cases,active_cases,tested,recovered,deaths} = this.props.covidData;
    return (
      <Fragment>
        {this.props.countryDropdown ? (
          <div className={classes.flexbox}>
            <div>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {this.state.selectedCountry}
                </Dropdown.Toggle>
                <Dropdown.Menu
                  style={{
                    overflowY: "scroll",
                    maxHeight: "200px",
                  }}
                >
                  {this.props.countryData.map((key, index) => (
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
        {this.props.isFetching ? 
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      : null }
        {this.state.showCases && !this.props.isFetching ? 
         <div className={classes.flexbox}>
              <Alert variant="success">Total cases : {total_cases}</Alert>
              <Alert variant="warning">Active cases : {active_cases}</Alert>
              <Alert variant="primary">Recovered : {recovered}</Alert>
              <Alert variant="info">Tested : {tested}</Alert>            
              <Alert variant="danger">Deaths : {deaths}</Alert>  
         </div> : null}
         <IndiaCasesGraph indiaData = {this.props.covidData}/>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    covidData: state.dataReducer.covidData,
    countryData: state.dataReducer.countryData,
    isFetching: state.dataReducer.isFetching,
  };
};

const mapDispatchToProps = (dispatch) => ({
  thunk_action_Country: (key) => dispatch(thunk_action_Country(key)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CovidIndia);
