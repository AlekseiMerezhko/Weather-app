import React from "react";
import ReactAutocomplete from "react-autocomplete";
const AutocompleteInput = ({ value, setValue, cities }) => {
  return (
    <ReactAutocomplete
      getItemValue={item => item.label}
      items={cities}
      shouldItemRender={(item, value) =>
        item.label.toLowerCase().indexOf(value.toLowerCase()) > -1
      }
      renderItem={(item, highlighted) => (
        <div
          key={item.Key}
          style={{ backgroundColor: highlighted ? "#eee" : "transparent" }}
        >
          {item.label}
        </div>
      )}
      inputProps={{
        style: { padding: "5px", border: "1px solid #333", borderRadius: "5px" },
        placeholder: "Cities"
      }}
      wrapperStyle={{ width: "100%" }}
      value={value}
      onChange={e => setValue(e.target.value)}
      onSelect={value => setValue(value)}
    />
  );
};

export default AutocompleteInput;
