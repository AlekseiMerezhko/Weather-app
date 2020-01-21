import { combineReducers } from "redux";
import { userReducer } from "./user";
import { citiesReducer } from "./cities";
import { loginReducer } from "./login";

export default combineReducers({
  user: userReducer,
  cities: citiesReducer,
  login: loginReducer
});
