import React from "react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import Footer from "../../components/Footer";

describe("<Footer />", () => {
  it("Check Footer render", () => {
    const footer = renderer
      .create(<Footer cities={{ loading: false }} logined={true} />)
      .toJSON();
    expect(footer).toMatchSnapshot();
  });
});
