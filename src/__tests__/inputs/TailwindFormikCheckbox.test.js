import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import TailwindFormikCheckbox from "../../components/Inputs/TailwindFormikCheckbox";

const values = {
  label: "input",
  checked: false,
  handleChange: false,
  name: "input"
};

afterEach(cleanup);

test("displays the correct greeting", () => {
  const { getByLabelText } = render(<TailwindFormikCheckbox {...values} />);
  const input = getByLabelText("input");
  expect(input.checked).toBe(false);
  fireEvent.change(input, { target: { checked: true } });
  expect(input.checked).toBe(true);
});
