const initialState = {
    countryData:[],
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
          // var arr = [];
          // Object.keys(action.data).map(key => arr.push(key));
          // console.log(arr);

            return{
              ...state,                      
              countryData : Object.values(action.data),
              // .map(key => state.countryData.concat(key))
              } 
                               
                // countryData : Object.keys(action.data).map(key => 
                //   state.countryData.countryCases.concat(key)
        
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
  