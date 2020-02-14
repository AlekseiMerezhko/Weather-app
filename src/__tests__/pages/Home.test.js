import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Home from "../../pages/Home";

const mockStore = configureMockStore();
const store = mockStore({});

const setup = function() {
  const wrapper = shallow(
    <Provider store={store}>
      <Home />
    </Provider>
  );
  return wrapper;
};

describe("Home Component", () => {
  let wrapper;
  it("should render Home without throwing an error", () => {
    wrapper = setup();

    expect(wrapper).toBeTruthy();
  });
});
