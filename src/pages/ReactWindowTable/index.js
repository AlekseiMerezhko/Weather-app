import React from "react";
import { Link } from "react-router-dom";

import { FixedSizeList as List } from "react-window";

const ReactWindowTable = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="flex m-5">
        <div>
          <Link
            className="block mt-4 lg:inline-block lg:mt-0  lg:mr-4 bg-red-500 p-2 rounded-lg text-white"
            to={{
              pathname: `/react-window-table/${1}`,
              search: "?query=abc",
              state: { id: 1 }
            }}
          >
            Section 1
          </Link>
        </div>
        <div>
          <Link
            className="block mt-4 lg:inline-block lg:mt-0  lg:mr-4 bg-blue-500 p-2 rounded-lg text-white"
            to={{
              pathname: `/react-window-table/${2}`,
              state: { id: 2 }
            }}
          >
            Section 2
          </Link>
        </div>
      </div>
      <List
        className="List"
        height={800}
        itemCount={100000}
        itemSize={41}
        width={400}
      >
        {Row}
      </List>
    </div>
  );
};

const Row = ({ index, style }) => (
  <div className="hover:bg-gray-300" style={style}>
    <div className="border px-4 py-2">item {index}</div>
  </div>
);

export default ReactWindowTable;
