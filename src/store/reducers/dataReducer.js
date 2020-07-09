const initialState = {
  covidData: {},
  countryData:{},
  isFetching: false,
  isError: false,
};

export const dataReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case "FETCH_USER":
      return {
        ...state,
        isFetching: true,
        userData: {},
        isError: false,
      };

    case "FETCHED_COVID_DATA":
      const { total_cases, active_cases, critical, recovered, deaths, tested} = action.data;
      return {
        ...state,
        covidData: {
          ...state.covidData,
          total: total_cases,
          active: critical,
          active_w: active_cases,
          recovered: recovered,
          deaths: deaths,
          tested: tested,
        },
        isFetching: false,
        isError: false,
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
