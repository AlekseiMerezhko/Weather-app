import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import NoMatch from "../../pages/NoMatch";

const mockStore = configureMockStore();
const store = mockStore({});

const setup = function() {
  const wrapper = shallow(
    <Provider store={store}>
      <NoMatch />
    </Provider>
  );
  return wrapper;
};

describe("NoMatch page", () => {
  let wrapper;
  it("should render NoMatch without throwing an error", () => {
    wrapper = setup();

    expect(wrapper).toBeTruthy();
  });
});
