import React, { Component , Fragment } from "react";
import classes from "./covidIndia.css";
import Alert from "react-bootstrap/Alert";
import { connect } from "react-redux";
import { thunk_action_India } from "../store/actions/fetch_covid_India";
// import { thunk_action_World } from "../store/actions/fetch_covid_World";

class Covid_India extends Component {

  componentDidMount() {
    this.props.thunk_action_India();
  }

  render() {
    const { total , active , tested , recovered , deaths} = this.props.covidData;
    return (
      <Fragment>
        <div className={classes.flexbox}>
           <div> <Alert variant="success"> <p>Total cases : {total}</p></Alert></div>
              <div> <Alert variant="warning"> <p>Active cases : {active}</p></Alert></div>
              <div> <Alert variant="info"> <p>Tested : {tested}</p></Alert></div>
              <div> <Alert variant="primary"> <p>Recovered : {recovered}</p></Alert></div>
              <div> <Alert variant="danger"> <p>Deaths : {deaths}</p></Alert></div> 
        </div>
      </Fragment>
  )}
}

const mapStateToProps = (state) => {
  return {
    covidData: state.dataReducer.covidData,
  };
};

const mapDispatchToProps = (dispatch) => ({
  thunk_action_India: () => dispatch(thunk_action_India()),
  // thunk_action_World: () => dispatch(thunk_action_World())
});

export default connect(mapStateToProps , mapDispatchToProps)(Covid_India);
