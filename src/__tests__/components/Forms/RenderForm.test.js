import React from "react";
import { shallow } from "enzyme";
import RenderForm from "../../../components/Forms/RenderForm";

const expectedProps = {
  validationSchema: {},
  initialValues: { name: "" },
  onSubmit: () => {},
  renderForm: () => {
    return <div>render</div>;
  }
};

const setup = function() {
  const wrapper = shallow(<RenderForm {...expectedProps} />);
  return wrapper;
};

describe("RenderForm Component", () => {
  let wrapper;

  beforeAll(() => {
    wrapper = setup();
  });

  it("should render RenderForm without throwing an error", () => {
    expect(wrapper).toBeTruthy();
  });
});
