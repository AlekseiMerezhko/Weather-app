import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Login from "../../pages/Login";

const mockStore = configureMockStore();
const store = mockStore({});

const setup = function() {
  const wrapper = shallow(
    <Provider store={store}>
      <Login />
    </Provider>
  );
  return wrapper;
};

describe("Login page", () => {
  let wrapper;
  it("should render Login without throwing an error", () => {
    wrapper = setup();

    expect(wrapper).toBeTruthy();
  });
});
