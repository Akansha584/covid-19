import React, { Component, Fragment } from "react";
import classes from "./covidWorld.css";
import Alert from "react-bootstrap/Alert";
import { connect } from "react-redux";
import { thunk_action_World } from "../store/actions/fetch_covid_World";
import { thunk_action_Country } from "../store/actions/fetch_covid_Country";
import { Dropdown } from "react-bootstrap";
import DropValue from './dropValue'

class Covid_World extends Component {

  componentDidMount() {
    this.props.thunk_action_World();
    this.props.thunk_action_Country();   
  }

  state = {
    show : false,
    target : {}
  };

  onTargetValue = (key) => {
    this.props.thunk_action_Country(key); 
    this.setState ({
      show : true,
      target : key
    });
  }
  
  render() {
    const { total, active_w, tested, recovered, deaths } = this.props.covidData;
    return (
      <Fragment>
        <div className={classes.align}>
          <div className={classes.acrossWorld}>
            <div className={classes.flexbox}>
              <p align="center">ACROSS GLOBE</p>
              <div> <Alert variant="success"> <p>Total cases : {total}</p></Alert></div>
              <div> <Alert variant="warning"> <p>Active cases : {active_w}</p></Alert></div>
              <div> <Alert variant="primary"> <p>Recovered : {recovered}</p></Alert></div>
              <div> <Alert variant="info"> <p>Tested : {tested}</p></Alert></div>             
              <div> <Alert variant="danger"> <p>Deaths : {deaths}</p></Alert></div>  
            </div>
          </div>
          <div className={classes.acrossWorld}>
            <div className={classes.flexbox}>
              <div>
                <p align="center">COUNTRY SPECIFIC</p>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {this.state.show ? this.state.target.name : "Select Country"}
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    style={{
                      overflowY: "scroll",
                      maxHeight: "200px"
                    }}
                  >
                    {this.props.countryData.map((key) => (
                      <Dropdown.Item 
                      key = {this.props.countryData[key]} 
                      onSelect={() => this.onTargetValue(key)}>{key.name}</Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>   

                <div>{this.state.show ?<DropValue targetValue = {this.state.target} /> : null}</div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    countryData: state.countryReducer.countryData,
    covidData: state.dataReducer.covidData,
  };
};

const mapDispatchToProps = (dispatch) => ({
  thunk_action_World: () => dispatch(thunk_action_World()),
  thunk_action_Country: () => dispatch(thunk_action_Country()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Covid_World);
