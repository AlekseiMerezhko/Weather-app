import React, { useState, useEffect } from "react";
import { useLastLocation } from "react-router-last-location";
// import { TextField, Select } from "formik-material-ui";
// import { Formik, Form, ErrorMessage } from "formik";
// import { MenuItem, Divider } from "@material-ui/core";
// import * as Yup from "yup";
// import styled from "styled-components";

import AutocompleteInput from "../../components/Inputs/Autocomplete";
import ForecastTable from "../../components/Tables/ForecastTable";
import { apiKey } from "../../const/index";
import { get1DayForecast } from "../../api/axios";
// import CustomField from "../../components/Inputs/CustomField";

const Home = props => {
  const [dailyForecast, setDailyForecast] = useState(null);
  const lastLocation = useLastLocation();
  // const initialValues = {
  //   title: "",
  //   clientId: ""
  // };
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
  // const resetFunction = resetFieldFunction => {
  //   resetFieldFunction("title", "");
  // };
  const handleChangeValue = value => {
    const [cityValue, , idValue] = value.split(", ");
    props.fetchCitiesData({
      payload: {
        value: value,
        cityValue: cityValue,
        idValue: idValue
      }
    });
  };

  return (
    <div>
      {/* <div
        style={{
          width: "400px",
          height: "400px",
          background: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
        onClick={() => console.log("2")}
      >
        <div
          style={{ width: "200px", height: "200px", background: "green" }}
          onClick={e => {
            e.stopPropagation();
            console.log("3");
          }}
        ></div>
      </div> */}
      <p className="mb-4">
        Last location:{" "}
        <span className="text-red-400 text-xl">
          {lastLocation ? lastLocation.pathname : "This page"}{" "}
        </span>
      </p>
      <button type="button" id="subscribe">
        Следить за изменениями
      </button>
      {/* <Formik
        initialValues={initialValues}
        enableReinitialize
        onSubmit={values => {
          console.log(values, "values");
        }}
        validationSchema={firstStepSchema}
        render={({
          errors,
          touched,
          setFieldValue,
          submitForm,
          values,
          setErrors,
          isValid
        }) => {
          return (
            <Form style={{ width: "100%" }}>
              <ColumnWrapper>
                <CustomField
                  variant="outlined"
                  align="left"
                  name="clientId"
                  id="clientId"
                  error={!!errors.clientId && touched.clientId}
                  type="text"
                  label="Company"
                  style={{
                    marginBottom: 20
                  }}
                  component={Select}
                >
                  <MenuItem disabled value={"0"}>
                    Select company
                  </MenuItem>
                  {[
                    { label: "first", value: "1" },
                    { label: "second", value: "2" },
                    { label: "third", value: "3" }
                  ].map(option => (
                    <MenuItem
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </MenuItem>
                  ))}
                </CustomField>
                <ErrorMessage component={CustomErrorMessage} name="clientId" />
                <Label>Campaign</Label>
                <CustomField
                  variant="outlined"
                  align="left"
                  placeholder="Add campaign"
                  name="title"
                  type="name"
                  component={TextField}
                  style={{ marginBottom: 20 }}
                />
              </ColumnWrapper>
              <button type="submit">Submit</button>
            </Form>
          );
        }}
      /> */}

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

// const firstStepSchema = Yup.object().shape({
//   title: Yup.string()
//     .min(2, "Too Short!")
//     .required("Required"),
//   clientId: Yup.number()
//     .moreThan(0, "Required")
//     .required("Required")
// });
// const Column = styled.div`
//   display: flex;
//   flex-direction: column;
// `;
// const ColumnWrapper = styled(Column)`
//   width: 50%;
//   padding: 0 50px;
// `;
// const Text = styled("span")`
//   font-style: normal;
//   font-stretch: normal;
//   line-height: normal;
//   letter-spacing: normal;
//   font-size: ${props => (props.size ? props.size : "14px")};
//   font-weight: ${props => (props.weight ? props.weight : "normal")};
//   color: ${props => (props.color ? props.color : "#2d2d2d")};
//   margin: ${props => (props.margin ? props.margin : "0")};
// `;

// const CustomErrorMessage = styled(Text)`
//   font-size: 0.75em;
//   color: #f44336;
//   text-align: left;
// `;
// const Label = styled(Text)`
//   color: grey;
//   margin-top: 20px;
//   margin-bottom: 10px;
//   font-size: 13px;
//   text-align: left;
// `;

export default Home;
