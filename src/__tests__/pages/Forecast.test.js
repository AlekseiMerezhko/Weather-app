import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Forecast from "../../pages/Forecast";

const mockStore = configureMockStore();
const store = mockStore({});

const setup = function() {
  const wrapper = shallow(
    <Provider store={store}>
      <Forecast />
    </Provider>
  );
  return wrapper;
};

describe("Forecast page", () => {
  let wrapper;
  it("should render Forecast without throwing an error", () => {
    wrapper = setup();

    expect(wrapper).toBeTruthy();
  });
});
