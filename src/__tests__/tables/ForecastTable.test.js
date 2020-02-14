import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import ForecastTable from "../../components/Tables/ForecastTable";

describe("<ForecastTable />", () => {
  it("Check ForecastTable render", () => {
    const footer = renderer.create(<ForecastTable />).toJSON();
    expect(footer).toMatchSnapshot();
  });
});
