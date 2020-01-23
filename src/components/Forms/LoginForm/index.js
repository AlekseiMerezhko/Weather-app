import React from "react";
import * as Yup from "yup";

import TailwindFormikInput from "../../Inputs/TailwindFormikInput";

export const LoginForm = ({ errors, touched, dontExist }) => {
  return (
    <div className="w-full">
      <TailwindFormikInput
        errors={errors.username}
        touched={touched.username}
        label={"Username"}
        name={"username"}
        validate={dontExist}
      />
      <TailwindFormikInput
        errors={errors.password}
        touched={touched.password}
        label={"Password"}
        name={"password"}
        type={"password"}
      />

      <div className="md:flex md:items-center">
        <div className="md:w-2/4"></div>
        <div className="md:w-2/4">
          <button
            type="submit"
            className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  password: Yup.string()
    .min(6)
    .required("Required")
});
