const initialState = {
  covidData: [],
  countryData: [],
  stateData: [],
  indiaGraph_dates: [],
  indiaGraph_cases: [],
  isFetching: false,
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_LOADING_SPINNER":
      return {
        ...state,
        isFetching: true,
      };

    case "FETCHED_GRAPH_DATA":
      return {
        ...state,
        indiaGraph_dates: Object.keys(action.data).slice(0, 7),
        indiaGraph_cases: Object.values(action.data).slice(0, 7),
      };

    case "FETCHED_COVID_INDIASTATE_NAME":
      var sortState = [];
      action.data.map((stateData) => sortState.push(stateData.state));
      return {
        ...state,
        stateData: sortState.sort(),
        isFetching: false,
      };

    case "FETCHED_COVID_COUNTRY":
      var sortCountry = [];
      Object.values(action.data).map((key) => sortCountry.push(key.name));
      return {
        ...state,
        countryData: sortCountry.sort(),
        isFetching: false,
      };

    case "FETCHED_COVID_DATA":
      const {
        total_cases,
        confirmed,
        active_cases,
        active,
        recovered,
        deaths,
        tested,
      } = action.data;
      return {
        ...state,
        covidData: {
          ...state.covidData,
          total_cases: total_cases || confirmed,
          active_cases: active_cases || active,
          recovered: recovered,
          deaths: deaths,
          tested: tested,
        },
        isFetching: false,
      };

    case "RECEIVE_ERROR":
      return {
        ...state,
        isFetching: false,
      };

    default:
      return state;
  }
};
