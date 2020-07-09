import React ,{Component} from 'react';
import classes from "./covidWorld.css";
import Alert from "react-bootstrap/Alert";

class DropValue extends Component{
 
    render(){
      console.log(this.props.targetValue);
        return(
            <div className={classes.align}>
          {/* <div className={classes.acrossWorld}> */}
            <div className={classes.flexbox}>
              <div> <Alert variant="success"> <p>Total cases : {this.props.targetValue.total_cases}</p></Alert></div>
              <div> <Alert variant="warning"> <p>Active cases : {this.props.targetValue.active_cases}</p></Alert></div>
              <div> <Alert variant="info"> <p>Tested : {this.props.targetValue.tested}</p></Alert></div>
              <div> <Alert variant="primary"> <p>Recovered : {this.props.targetValue.recovered}</p></Alert></div>
              <div> <Alert variant="danger"> <p>Deaths : {this.props.targetValue.deaths}</p></Alert></div>  
            </div>
          {/* </div> */}
          </div>
        )
    }
}

export default DropValue;