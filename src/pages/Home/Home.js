import React, { useState, useEffect } from "react";

import AutocompleteInput from "../../components/Inputs/Autocomplete";
import ForecastTable from "../../components/Tables/ForecastTable";
import { apiKey } from "../../const/index";
import { get1DayForecast } from "../../api/axios";

const Home = props => {
  const [dailyForecast, setDailyForecast] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await get1DayForecast(props.currentCity.Key, apiKey);
      const { data } = res;
      setDailyForecast(data.DailyForecasts);
    }
    if (props.currentCity) {
      try {
        fetchData();
      } catch (error) {
        console.log(error);
      }
    }
  }, [props.currentCity]);

  const handleChangeValue = value => {
    const [cityValue, countryValue, idValue] = value.split(", ");
    props.getCities({ value: value, cityValue: cityValue, idValue: idValue });
  };

  return (
    <div>
      <AutocompleteInput
        value={props.value}
        cities={props.cities}
        setValue={handleChangeValue}
      />
      <div className="flex justify-center mt-10 overflow-x-auto">
        <ForecastTable
          currentCity={props.currentCity}
          dailyForecast={dailyForecast}
        />
      </div>
    </div>
  );
};

export default Home;
