import {
  CITIES_RECEIVED,
  GET_CITIES_SUCCESS,
  GET_CITIES_ERROR,
  EMPTY_CITY_VALUE
} from "../actions/getCitiesAction";

export const citiesReducer = (
  state = { value: "", cities: [], currentCity: null, loading: false },
  action
) => {
  switch (action.type) {
    case CITIES_RECEIVED:
      return {
        ...state,
        loading: true,
        error: false
      };
    case GET_CITIES_SUCCESS:
      return {
        ...state,
        loading: false,
        cities: action.payload.cities,
        currentCity: action.payload.currentCity,
        value: action.payload.value,
        error: false
      };
    case GET_CITIES_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        value: action.payload.value
      };
    case EMPTY_CITY_VALUE:
      return {
        ...state,
        loading: false,
        error: false,
        value: action.payload.value
      };
    default:
      return state;
  }
};
