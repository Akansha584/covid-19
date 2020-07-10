// import store from "./store";
import axios from "axios";

export const fetch_post = () => {
  return {
    type: "FETCH_USER",
  };
};

export const receive_post = (post) => {
  debugger;
  return {
    type: "FETCHED_COVID_DATA",
    data: post,
  };
};

export const receive_error = () => {
  return {
    type: "RECEIVE_ERROR",
  };
};

export const thunk_action_India = () => {
  return function (dispatch, getState) {
    axios
      .get("https://api.quarantine.country/api/v1/summary/latest")
      .then((response) => {
        return response.data;
      })
      .then(( {data} ) => {
        var first_date_values = data.regions.india;       
        dispatch(receive_post(first_date_values));
      })
      .catch((err) => dispatch(receive_error()));
  };
};
