import React from "react";
import TailwindFormikInput from "../../Inputs/TailwindFormikInput";

const firstStep = ({ errors, touched }) => {
  return (
    <div className="w-full">
      <TailwindFormikInput
        errors={errors.creatorName}
        touched={touched.creatorName}
        label={"Your Name"}
        disabled={true}
        name={"creatorName"}
      />
      <TailwindFormikInput
        errors={errors.creatorEmail}
        touched={touched.creatorEmail}
        label={"Your Email"}
        disabled={true}
        name={"creatorEmail"}
      />
      <TailwindFormikInput
        errors={errors.pseudonym}
        touched={touched.pseudonym}
        label={"Your Pseudonym"}
        name={"pseudonym"}
      />
      <TailwindFormikInput
        errors={errors.img}
        touched={touched.img}
        label={"Image URL"}
        name={"img"}
      />
      <div className="md:flex md:items-center">
        <div className="md:w-2/4"></div>
        <div className="md:w-2/4">
          <button
            type="submit"
            className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default firstStep