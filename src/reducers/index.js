import loggedReducer from "./isLogged";
import toggleReducer from "./toggle";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  isLogged: loggedReducer,
  toggle: toggleReducer,
});

export default allReducers;
