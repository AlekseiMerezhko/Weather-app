import React from "react";
import { shallow } from "enzyme";
import Column from "../../../components/DragAndDrop/Column";

const expectedProps = {
  isDropDisabled: false,
  tasks: {
    "task-1": { id: "task-1", content: "Take out the garbage" },
    "task-2": { id: "task-2", content: "Watch my favorite show" },
    "task-3": { id: "task-3", content: "Charge my phone" },
    "task-4": { id: "task-4", content: "Cook dinner" }
  },
  index: 1,
  column: {
    id: 1
  }
};

const setup = function() {
  const wrapper = shallow(<Column {...expectedProps} />);
  return wrapper;
};

describe("Column Component", () => {
  let wrapper;

  beforeAll(() => {
    wrapper = setup();
  });

  it("should render without throwing an error", () => {
    expect(wrapper).toBeTruthy();
  });
});
