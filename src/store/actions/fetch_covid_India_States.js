import axios from "axios";

export const fetch_post = () => {
  return {
    type: "FETCH_LOADING_SPINNER",
  };
};

export const receive_indiaState_Name = (post) => {
  return {
    type: "FETCHED_COVID_INDIASTATE_NAME",
    data: post,
  };
};

export const receive_indiaState_Data = (post) => {
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

export const thunk_action_indiaState = (key) => {
  return function (dispatch, getState) {
    dispatch(fetch_post());
    axios
      .get("https://api.covid19india.org/data.json")
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        if (key) {
          var stateData;
          data.statewise.map((selectedState_data) => {
            if (key === selectedState_data.state) {
              return (stateData = selectedState_data);
            }
            return null;
          });
          dispatch(receive_indiaState_Data(stateData));
        } else {
          dispatch(receive_indiaState_Name(data.statewise));
        }
      })
      .catch((err) => dispatch(fetch_post()));
  };
};
