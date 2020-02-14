import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Articles from "../../pages/Articles";
import Modal from "react-modal";

const mockStore = configureMockStore();
const store = mockStore({});

const setup = function() {
  const wrapper = shallow(
    <Provider store={store}>
      <div id="root">
        <Articles />
      </div>
    </Provider>
  );
  return wrapper;
};

describe("Articles page", () => {
  let wrapper;
  Modal.setAppElement(document.createElement("div"));
  it("should render Articles without throwing an error", () => {
    wrapper = setup();

    expect(wrapper).toBeTruthy();
  });
});
