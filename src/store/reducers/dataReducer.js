const initialState = {
  covidData: [],
  countryData: [],
  isFetching: false,
  // isError: false,
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_LOADING_SPINNER":
      return {
        ...state,
        isFetching: true,
        // isError: false,
      };

    case "FETCHED_COVID_COUNTRY":   
      var sortCountry=[];    
      Object.values(action.data).map(key => sortCountry.push(key.name))     
      return {
        ...state,
        countryData: sortCountry.sort(),
        isFetching: false,
        // isError: false,
      };

    case "FETCHED_COVID_DATA":
      const {
        total_cases,
        active_cases,
        recovered,
        deaths,
        tested,
      } = action.data;
      return {
        ...state,
        covidData: {
          ...state.covidData,
          total_cases: total_cases,
          active_cases: active_cases,
          recovered: recovered,
          deaths: deaths,
          tested: tested,
        },
        isFetching: false,
        // isError: false,
      };

    case "RECEIVE_ERROR":
      return {
        ...state,
        // isError: true,
        isFetching: false,
      };

    default:
      return state;
  }
};
