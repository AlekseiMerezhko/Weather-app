import React from "react";
import { Field } from "formik";
const TailwindFormikSelect = ({
  errors,
  touched,
  name,
  label,
  handleChange,
  handleBlur,
  value
}) => {
  return (
    <div className="md:flex md:items-center mb-6 max-w-md w-full">
      <div className="md:w-1/3">
        <label
          className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          htmlFor="name"
        >
          {label}
        </label>
      </div>
      <div className="md:w-2/3">
        {/* <Field
          className={`${
            errors ? "border-red-500" : null
          } bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500`}
          name={name}
          placeholder={label}
        /> */}
        <select
          className={`${
            errors && touched ? "border-red-500" : null
          } block appearance-none w-full bg-gray-200 border-2 border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
          id="grid-state"
          name={name}
          value={value}
          onChange={e => handleChange(name, e.target.value)}
          onBlur={e => handleBlur(name, e.target.value)}
        >
          <option value="" label="Select a category" />
          <option value="sport" label="Sport" />
          <option value="fun" label="Fun" />
          <option value="work" label="Work" />
        </select>
        {errors && touched ? (
          <div className="text-red-500 text-xs italic">{errors}</div>
        ) : null}
      </div>
    </div>
  );
};

export default TailwindFormikSelect;
