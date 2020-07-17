// import store from "./store";
import axios from "axios";

export const fetch_post = () => {
  return {
    type: "FETCH_LOADING_SPINNER",
  };
};

export const receive_post = (post) => {
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

export const thunk_action_World = () => {
  return function (dispatch, getState) {
    dispatch(fetch_post())
    axios
      .get("https://api.quarantine.country/api/v1/spots/summary")
      .then((response) => {
        return response.data;
      })
      .then(({ data }) => {
        var first_date_values = data[Object.keys(data)[0]];
        dispatch(receive_post(first_date_values));
      })
      .catch(() =>  dispatch(fetch_post()));
  };
};
