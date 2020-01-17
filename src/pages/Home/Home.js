import React, { useState, useEffect } from "react";
import AutocompleteInput from "../../components/Inputs/Autocomplete";
import DailyForecastTable from "../../components/Tables/DailyForecastTable";
import { apiKey, resourceAutocompleteURL } from "../../const/index";
const axios = require("axios");
// request = /locations/v1/cities/autocomplete?apikey=3clOMgYa8NDorsG3aEieG6VHaHbEcnRT&q=a
// 1 Day of Daily Forecast ----- "http://dataservice.accuweather.com/forecasts/v1/daily/1day/182536?apikey=3clOMgYa8NDorsG3aEieG6VHaHbEcnRT"
const Home = () => {
  const [state, setState] = useState({ value: "", cities: [], currentCity: null });
  const [dailyForecast, setDailyForecast] = useState(null);

  useEffect(() => {
    async function fetchData() {
      let res = await axios.get(
        `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${state.currentCity.Key}?apikey=${apiKey}`
      );
      const { data } = res;
      setDailyForecast(data.DailyForecasts[0]);
    }
    if (state.currentCity) {
      try {
        fetchData();
      } catch (error) {
        console.log(error);
      }
    }
  }, [state.currentCity]);

  const handleChangeValue = async value => {
    const [cityValue, countryValue, idValue] = value.split(", ");
    if (cityValue !== "") {
      try {
        let res = await axios.get(
          `${resourceAutocompleteURL}?apikey=${apiKey}&q=${cityValue}`
        );
        let { data } = res;
        const citiesArray = data.map(city => ({
          ...city,
          label: `${city.LocalizedName}, ${city.Country.LocalizedName}, ${city.AdministrativeArea.ID}`,
          value: city.LocalizedName
        }));
        const currentCity = data.filter(
          city =>
            city.LocalizedName === cityValue &&
            city.AdministrativeArea.ID === idValue
        )[0];
        setState({
          value,
          cities: citiesArray,
          currentCity: currentCity ? currentCity : null
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      setState({
        ...state,
        value
      });
    }
  };

  return (
    <div>
      <AutocompleteInput
        value={state.value}
        cities={state.cities}
        setValue={handleChangeValue}
      />
      <div className="flex justify-center mt-10">
        <DailyForecastTable
          currentCity={state.currentCity}
          dailyForecast={dailyForecast}
        />
      </div>
    </div>
  );
};

export default Home;
