import axios from "axios";

export const fetch_post = () => {
  return {
    type: "FETCH_USER",
  };
};

export const receive_post = (post) => {
  return {
    type: "FETCHED_COVID_COUNTRY",
    data: post,
  };
};

export const receive_error = () => {
  return {
    type: "RECEIVE_ERROR",
  };
};

export const thunk_action_Country = () => {
  return function (dispatch, getState) {
    axios
      .get("https://api.quarantine.country/api/v1/summary/latest")
      .then((response) => {
        return response.data;
      })
      .then(({ data }) => {
        var updated_values = data[Object.keys(data)[3]];
        dispatch(receive_post(updated_values));
      })
      .catch((err) => dispatch(receive_error()));
  };
};
