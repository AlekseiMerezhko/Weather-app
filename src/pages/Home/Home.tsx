import React, { useState, useEffect } from "react";
import { useLastLocation } from "react-router-last-location";
import { TextField, Select } from "formik-material-ui";
import { Formik, Form, ErrorMessage } from "formik";
import { MenuItem, Divider } from "@material-ui/core";

import AutocompleteInput from "../../components/Inputs/Autocomplete";
import ForecastTable from "../../components/Tables/ForecastTable";
import { apiKey } from "../../const/index";
import { get1DayForecast } from "../../api/axios";
import CustomField from "../../components/Inputs/CustomField";

interface Props {
  history: any;
  location: any;
  match: any;
  staticContext: any;
  value: string;
  cities: [
    {
      Version: number;
      Key: string;
      Type: string;
      Rank: number;
      LocalizedName: string;
      Country: { ID: string; LocalizedName: string };
      AdministrativeArea: {
        ID: string;
        LocalizedName: string;
      };
      label: string;
      value: string;
    }
  ];
  currentCity: {
    Version: number;
    Key: string;
    Type: string;
    Rank: number;
    LocalizedName: string;
    Country: { ID: string; LocalizedName: string };
    AdministrativeArea: {
      ID: string;
      LocalizedName: string;
    };
  };
  loading: boolean;
  error: boolean;
  getCities: (param: {
    value: string;
    cityValue: string;
    idValue: string;
  }) => void;
}

const Home = (props: Props) => {
  const [dailyForecast, setDailyForecast] = useState(null);
  const lastLocation = useLastLocation();
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

  const handleChangeValue = (value: string) => {
    const [cityValue, countryValue, idValue] = value.split(", ");
    props.getCities({ value: value, cityValue: cityValue, idValue: idValue });
  };

  return (
    <div>
      <p className="mb-4">
        Last location:{" "}
        <span className="text-red-400 text-xl">
          {lastLocation ? lastLocation.pathname : "This page"}{" "}
        </span>
      </p>
      <Formik
        initialValues={{ clientId: "" }}
        enableReinitialize
        onSubmit={values => {
          console.log(values, "values");
        }}
        render={({
          errors,
          setFieldValue,
          touched,
          submitForm,
          values,
          setErrors,
          isValid
        }) => {
          return (
            <Form style={{ width: "100%" }}>
              <CustomField
                variant="outlined"
                align="left"
                name="clientId"
                // error={!!errors.clientId && touched.clientId}
                type="text"
                label="Company"
                style={{
                  marginBottom: 20
                }}
                component={Select}
              >
                <MenuItem disabled value={0}>
                  Select company
                </MenuItem>
                {[
                  { label: "first", value: "first" },
                  { label: "second", value: "second" },
                  { label: "third", value: "third" }
                ].map(option => (
                  <MenuItem
                    // onMouseDown={() => {
                    //   resetFunction(setFieldValue);
                    // }}
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </MenuItem>
                ))}
              </CustomField>
              {/* <button type="submit">Submit</button> */}
            </Form>
          );
        }}
      />

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
