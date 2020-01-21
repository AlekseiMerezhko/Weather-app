import React from "react";
import { Field } from "formik";
const TailwindFormikInput = ({ errors, touched, name, label }) => {
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
        <Field
          className={`${
            errors && touched ? "border-red-500" : null
          } bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500`}
          name={name}
          placeholder={label}
        />
        {errors && touched ? (
          <div className="text-red-500 text-xs italic">{errors}</div>
        ) : null}
      </div>
    </div>
  );
};

export default TailwindFormikInput;
