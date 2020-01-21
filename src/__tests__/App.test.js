import React from "react";
import { shallow } from "enzyme";
import Login from "../pages/Login";

describe("App", () => {
  it("renders without crashing", () => {
    shallow(<Login />);
  });
});
