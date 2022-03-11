import loggedReducer from "../reducers/isLogged";
import toggleReducer from "../reducers/toggle";
import { combineReducers } from "redux";
import { createStore } from "redux";

const allReducers = combineReducers({
  isLogged: loggedReducer,
  toggle: toggleReducer,
});

const appStore = createStore(allReducers);

export default appStore;
