const initialState = {
  countryData: [],
  isFetching: false,
  isError: false,
};

export const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER":
      return {
        ...state,
        isFetching: true,
        userData: {},
        isError: false,
      };

    case "FETCHED_COVID_COUNTRY":
      return {
        ...state,
        countryData: Object.values(action.data),
      };

    case "RECEIVE_ERROR":
      return {
        ...state,
        isError: true,
        isFetching: false,
      };

    default:
      return state;
  }
};
