import axios from "axios";

export const fetch_post = () => {
  return {
    type: "FETCH_LOADING_SPINNER",
  };
};

export const receive_country_name = (post) => {
  return {
    type: "FETCHED_COVID_COUNTRY",
    data: post,
  };
};

export const receive_countryData = (post) => {
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

export const thunk_action_Country = (key) => {
  return function (dispatch, getState) {   
    dispatch(fetch_post());  
    axios
      .get("https://api.quarantine.country/api/v1/summary/latest")
      .then((response) => {
        return response.data;
      })
      .then(({ data }) => {
        if (key) {
          var updated_values = data.regions[key.toLowerCase()];
          dispatch(receive_countryData(updated_values));
        } else {
          updated_values = data.regions;
          dispatch(receive_country_name(updated_values));
        }
      })
      .catch((err) => dispatch(fetch_post()))
  };
};
