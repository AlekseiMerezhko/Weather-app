import React, { useState } from "react";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Moment from "react-moment";

const ForecastTable = ({ currentCity, dailyForecast }) => {
  const [state, setState] = useState({
    isFahrenheit: true
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const fToC = fahrenheit => {
    const fToCel = ((fahrenheit - 32) * 5) / 9;
    return Math.round(fToCel);
  };

  return (
    <div>
      <FormControlLabel
        control={
          <Switch
            checked={state.isFahrenheit}
            onChange={handleChange("isFahrenheit")}
            value="isFahrenheit"
          />
        }
        label="Fahrenheit"
      />

      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">City</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">
              Minimum Temperature {state.isFahrenheit ? "°F" : "°C"}:
            </th>
            <th className="px-4 py-2">
              Maximum Temperature {state.isFahrenheit ? "°F" : "°C"}:
            </th>
            <th className="px-4 py-2">Day</th>
            <th className="px-4 py-2">Night</th>
          </tr>
        </thead>
        {dailyForecast && currentCity ? (
          <tbody>
            {dailyForecast.map(day => (
              <tr key={day.Link}>
                <td className="border px-4 py-2">
                  {currentCity.LocalizedName}
                </td>
                <td className="border px-4 py-2">
                  <Moment format="MM/DD/YYYY">{day.Date}</Moment>
                </td>
                <td className="border px-4 py-2">
                  {state.isFahrenheit
                    ? day.Temperature.Minimum.Value
                    : fToC(day.Temperature.Minimum.Value)}
                </td>
                <td className="border px-4 py-2">
                  {state.isFahrenheit
                    ? day.Temperature.Maximum.Value
                    : fToC(day.Temperature.Maximum.Value)}
                </td>
                <td className="border px-4 py-2">{day.Day.IconPhrase}</td>
                <td className="border px-4 py-2">{day.Night.IconPhrase}</td>
              </tr>
            ))}
          </tbody>
        ) : null}
      </table>
    </div>
  );
};

export default ForecastTable;
