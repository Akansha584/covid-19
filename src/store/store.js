import { createStore, combineReducers, applyMiddleware } from "redux";
import { dataReducer } from "./reducers/dataReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxPromise from "redux-promise";

const rootReducer = combineReducers({
  dataReducer,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, ReduxPromise))
);

export default store;
