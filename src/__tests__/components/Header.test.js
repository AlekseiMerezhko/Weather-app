import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

const mockStore = configureMockStore();
const store = mockStore({});

const setup = function() {
  const wrapper = shallow(
    <Provider store={store}>
      <Header />
    </Provider>
  );
  return wrapper;
};

describe("Header Component", () => {
  let wrapper;
  it("should render Header without throwing an error", () => {
    wrapper = setup();

    expect(wrapper).toBeTruthy();
  });

  // describe("Check publick components render", () => {
  //   test("Render signIn Page", function renderSignInPage() {
  //     wrapper = setup();
  //     expect(
  //       wrapper
  //         .find(
  //           <span className="font-semibold text-xl tracking-tight">
  //             Weather App
  //           </span>
  //         )
  //         .exists()
  //     ).toBe(true);
  //   });
  // });
});
