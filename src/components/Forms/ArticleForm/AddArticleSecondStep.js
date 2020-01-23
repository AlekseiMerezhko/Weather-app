import React from "react";

import TailwindFormikInput from "../../Inputs/TailwindFormikInput";
import TailwindFormikSelect from "../../Inputs/TailwindFormikSelect";
import TailwindFormikCheckbox from "../../Inputs/TailwindFormikCheckbox";

const secondStep = ({
  errors,
  touched,
  values,
  setFieldValue,
  setFieldTouched,
  prevStep
}) => {
  return (
    <div className="w-full">
      <TailwindFormikInput
        errors={errors.title}
        touched={touched.title}
        label={"Title"}
        name={"title"}
      />
      <TailwindFormikInput
        errors={errors.body}
        touched={touched.body}
        label={"Text"}
        name={"body"}
      />
      <TailwindFormikSelect
        value={values.category}
        errors={errors.category}
        touched={touched.category}
        handleChange={setFieldValue}
        handleBlur={setFieldTouched}
        label={"Category"}
        name={"category"}
      />
      <div className="flex justify-end">
        <TailwindFormikCheckbox
          name={"important"}
          handleChange={setFieldValue}
          checked={values.important}
          label={"Important"}
        />
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-2/4">
          <button
            onClick={prevStep}
            className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          >
            Previus Step
          </button>
        </div>
        <div className="md:w-2/4">
          <button
            type="submit"
            className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          >
            Add article
          </button>
        </div>
      </div>
    </div>
  );
};

export default secondStep;
