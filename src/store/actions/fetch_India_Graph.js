import axios from "axios";

export const fetch_post = () => {
  return {
    type: "FETCH_LOADING_SPINNER",
  };
};

export const receive_post = (post) => {
  return {
    type: "FETCHED_GRAPH_DATA",
    data: post,
  };
};

export const receive_error = () => {
  return {
    type: "RECEIVE_ERROR",
  };
};

export const thunk_action_graphData = () => {
  return function (dispatch, getState) {
    dispatch(fetch_post());
    axios
      .get("https://api.quarantine.country/api/v1/spots/region?region=india")
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        dispatch(receive_post(data.data));
      })
      .catch(() => dispatch(fetch_post()));
  };
};
