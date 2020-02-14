import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import DragAndDrop from "../../pages/DragAndDrop";

const mockStore = configureMockStore();
const store = mockStore({});

const setup = function() {
  const wrapper = shallow(
    <Provider store={store}>
      <DragAndDrop />
    </Provider>
  );
  return wrapper;
};

describe("DragAndDrop page", () => {
  let wrapper;
  it("should render DragAndDrop without throwing an error", () => {
    wrapper = setup();

    expect(wrapper).toBeTruthy();
  });
});
