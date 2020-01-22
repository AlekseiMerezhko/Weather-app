import React from "react";

const TailwindFormikCheckbox = ({ label, checked, handleChange, name }) => {
  return (
    <div>
      <label className="inline-flex items-center">
        <input
          type="checkbox"
          className="form-checkbox text-indigo-600 bg-black w-6 h-6"
          checked={checked}
          onChange={e => handleChange(name, e.target.checked)}
        />
        <span className="ml-2">{label}</span>
      </label>
    </div>
  );
};

export default TailwindFormikCheckbox;
