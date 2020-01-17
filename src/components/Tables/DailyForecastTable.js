import React from "react";

const DailyForecastTable = ({ currentCity, dailyForecast }) => {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th className="px-4 py-2">City</th>
          <th className="px-4 py-2">Date</th>
          <th className="px-4 py-2">Minimum Temperature °F:</th>
          <th className="px-4 py-2">Maximum Temperature °F:</th>
          <th className="px-4 py-2">Day</th>
          <th className="px-4 py-2">Night</th>
        </tr>
      </thead>
      {dailyForecast && currentCity ? (
        <tbody>
          <tr>
            <td className="border px-4 py-2">{currentCity.LocalizedName}</td>
            <td className="border px-4 py-2">{dailyForecast.Date}</td>
            <td className="border px-4 py-2">
              {dailyForecast.Temperature.Minimum.Value}
            </td>
            <td className="border px-4 py-2">
              {dailyForecast.Temperature.Maximum.Value}
            </td>
            <td className="border px-4 py-2">{dailyForecast.Day.IconPhrase}</td>
            <td className="border px-4 py-2">{dailyForecast.Night.IconPhrase}</td>
          </tr>
        </tbody>
      ) : null}
    </table>
  );
};

export default DailyForecastTable;
