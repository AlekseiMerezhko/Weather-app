/* eslint-disable react/forbid-foreign-prop-types */
import checkPropTypes from "check-prop-types";

export function checkProps(component, conformingProps) {
  return checkPropTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );
}

export function getDefaultMessage(message) {
  return message.defaultMessage;
}

export function filterNotWrapInActWarning() {
  const consoleError = console.error;
  jest.spyOn(console, "error").mockImplementation((...args) => {
    if (
      args[0] &&
      !args[0].includes(
        "Warning: An update to %s inside a test was not wrapped in act"
      )
    ) {
      // -- why? https://github.com/facebook/react/issues/14769#issuecomment-514589856
      consoleError(...args);
    }
  });
}
