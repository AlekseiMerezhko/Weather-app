import React from "react";

const TailwindFormikCheckbox = ({ label, checked, handleChange, name }) => {
  return (
    <div className="block">
      <label className="inline-flex items-center">
        <input
          type="checkbox"
          className="form-checkbox text-indigo-600"
          checked={checked}
          onChange={e => handleChange(name, e.target.checked)}
        />
        <span className="ml-2">{label}</span>
      </label>
    </div>
  );
};

export default TailwindFormikCheckbox;
