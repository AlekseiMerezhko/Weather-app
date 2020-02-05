import { apiKey } from "../const/index";
import { cityAutocomplete } from "../api/axios";

export const CITIES_RECEIVED = "CITIES_RECEIVED";
export const GET_CITIES_SUCCESS = "GET_CITIES_SUCCESS";
export const GET_CITIES_ERROR = "GET_CITIES_ERROR";
export const EMPTY_CITY_VALUE = "EMPTY_CITY_VALUE";

export const emptyCityValue = payload => ({
  type: EMPTY_CITY_VALUE,
  payload
});

export const getCities = payload => ({
  type: CITIES_RECEIVED,
  payload
});

export const getCitiesSuccess = payload => ({
  type: GET_CITIES_SUCCESS,
  payload
});

export const getCitiesError = payload => ({
  type: GET_CITIES_ERROR,
  payload
});

// Code for redux thunk --------------------------------------
export const fetchCitiesData = props => {
  return dispatch => {
    dispatch(getCities());
    if (props.payload.value) {
      return cityAutocomplete(apiKey, props.payload.cityValue)
        .then(response => {
          const { data } = response;
          const citiesArray = data.map(city => ({
            ...city,
            label: `${city.LocalizedName}, ${city.Country.LocalizedName}, ${city.AdministrativeArea.ID}`,
            value: city.LocalizedName
          }));
          const currentCity = data.filter(
            city =>
              city.LocalizedName === props.payload.cityValue &&
              city.AdministrativeArea.ID === props.payload.idValue
          )[0];

          dispatch(
            getCitiesSuccess({
              cities: citiesArray,
              currentCity: currentCity,
              value: props.payload.value
            })
          );
        })
        .catch(() => {
          return dispatch(getCitiesError({ value: props.payload.value }));
        });
    } else {
      return dispatch(emptyCityValue({ value: props.payload.value }));
    }
  };
};
// Code for redux thunk --------------------------------------
