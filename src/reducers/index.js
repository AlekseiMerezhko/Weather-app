import { combineReducers } from "redux";
import { userReducer } from "./user";
import { citiesReducer } from "./cities";

export default combineReducers({
  user: userReducer,
  cities: citiesReducer
});
