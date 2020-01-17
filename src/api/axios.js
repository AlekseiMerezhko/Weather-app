const axios = require("axios");

export const get15DaysForecast = (cityKey, apiKey) =>
  axios.get(
    `http://dataservice.accuweather.com/forecasts/v1/daily/15day/${cityKey}?apikey=${apiKey}`
  );

export const get1DayForecast = (cityKey, apiKey) =>
  axios.get(
    `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${cityKey}?apikey=${apiKey}`
  );
export const cityAutocomplete = (apiKey, cityValue) =>
  axios.get(
    `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${cityValue}`
  );
