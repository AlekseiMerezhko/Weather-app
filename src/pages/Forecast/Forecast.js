import React, { useState, useEffect } from "react";
import ForecastTable from "../../components/Tables/ForecastTable";
import { apiKey } from "../../const/index";

import { get15DaysForecast } from "../../api/axios";

const Forecast = props => {
  const [forecast, setForecast] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await get15DaysForecast(props.currentCity.Key, apiKey);
      const { data } = res;
      setForecast(data.DailyForecasts);
    }
    if (props.currentCity) {
      try {
        fetchData();
      } catch (error) {
        console.log(error);
      }
    }
  }, [props.currentCity]);
  return (
    <div>
      <h1 className="text-center">Forecast</h1>
      <div className="flex justify-center mt-10">
        <ForecastTable
          forecast={forecast}
          currentCity={props.currentCity}
        ></ForecastTable>
      </div>
    </div>
  );
};

export default Forecast;
