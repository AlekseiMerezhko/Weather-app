import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Login from "../../pages/Login";

const mockStore = configureMockStore();
const store = mockStore({ logined: true });

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
  const mockCallBack = jest.fn();
  it("should render Login without throwing an error", () => {
    wrapper = setup();

    expect(wrapper).toBeTruthy();
  });

  it("Test login button", () => {
    const button = shallow(<button onClick={mockCallBack}>Login</button>);
    button.find("button").simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
