import React from "react";
import { spawn } from "child_process";

const ReactWindowTableComponent = props => {
  return (
    <div className="flex justify-center items-center flex-col">
      <p>
        ReactWindowTableComponent{" "}
        <span className="text-red-500 text-4xl">{props.location.state.id}</span>
      </p>
      <p>
        Query Params{" "}
        <span className="text-red-500 text-4xl">{props.location.search}</span>
      </p>
    </div>
  );
};

export default ReactWindowTableComponent;
