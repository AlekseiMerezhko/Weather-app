import React from "react";
import { shallow } from "enzyme";
import Task from "../../../components/DragAndDrop/Task";
import { checkProps } from "../../../test/testUtils";

const expectedProps = {
  index: 0,
  task: {
    id: "task-1",
    content: "Take out the garbage"
  }
};

const setup = function() {
  const wrapper = shallow(<Task {...expectedProps} />);
  return wrapper;
};

describe("Task Component", () => {
  let wrapper;

  beforeAll(() => {
    wrapper = setup();
  });

  it("should render without throwing an error", () => {
    expect(wrapper).toBeTruthy();
  });

  describe("Check prop types", () => {
    test(`Shouldn't be error with expected props`, function renderWithExpectedProps() {
      expect(checkProps(wrapper, expectedProps)).toBeUndefined();
    });
  });
});
