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
