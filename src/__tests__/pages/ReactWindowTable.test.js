import React from "react";
import { shallow } from "enzyme";
import ReactWindowTable from "../../pages/ReactWindowTable";

const setup = function() {
  const wrapper = shallow(<ReactWindowTable />);
  return wrapper;
};

describe("Login page", () => {
  let wrapper;
  it("should render Login without throwing an error", () => {
    wrapper = setup();

    expect(wrapper).toBeTruthy();
  });
});
