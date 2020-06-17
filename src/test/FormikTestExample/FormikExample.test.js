import React from "react";
import mockAxios from "axios";
import ConnectedIntlProvider from "./ConnectedIntlProvider";
import { MemoryRouter, Route } from "react-router";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from "@testing-library/react";
import routes, { makeUrl } from "api/routes";
import { Ziggy } from "api/ziggy";

import {
  ContactUsFormMessages,
  EmailFieldMessages,
  NameFieldMessages
} from "defineMessages";

import ContactUsForm from "./ContactUsForm";
import { getDefaultMessage } from "test/testUtils";

const initialValues = {
  initialValues: {
    name: "name",
    email: "email@email.email",
    conditions: true,
    message: "more then 10 symbols",
    recaptcha_token: "token"
  }
};

/*
    Validation in formik is async operation and enzyme can't work wit async operations,
    this way we use react test library - for cover this issue with asynchrony https://scottsauber.com/2019/05/25/testing-formik-with-react-testing-library/
    Be aware! We are missing testing recaptcha, because this is third party service
    Alsow, pay attention to comments!
*/

const component = initialValues => (
  <ConnectedIntlProvider messages={{}} locale="en">
    <MemoryRouter initialEntries={["/contact-us"]}>
      <Route
        component={props => <ContactUsForm {...props} {...initialValues} />}
        path="/:locale(en|ru)?"
      />
    </MemoryRouter>
  </ConnectedIntlProvider>
);

describe("<ContactUsForm />", () => {
  let renderedComponent;

  describe("Render component", () => {
    beforeAll(() => {
      renderedComponent = render(component());
    });

    test("Render component without errors", () => {
      expect(renderedComponent).toBeTruthy();
    });
    afterAll(cleanup);
  });

  describe("Should update an input when it is changed", () => {
    beforeAll(() => {
      renderedComponent = render(component());
    });

    test("should change value of name input", async function onChangeInput() {
      fireEvent.change(renderedComponent.getByTestId("name-input"), {
        target: { value: "Name" }
      });
      expect((await renderedComponent.findByTestId("name-input")).value).toBe(
        "Name"
      ); // fields in formik are controlled, this why we can check value of input field asynchronous to make sure that form state was changed
    });

    test("should change value of email input", async function onChangeInput() {
      fireEvent.change(renderedComponent.getByTestId("email-input"), {
        target: { value: "test@test.test" }
      });
      expect((await renderedComponent.findByTestId("email-input")).value).toBe(
        "test@test.test"
      );
    });

    test("should change value of conditions input", async function onChangeInput() {
      fireEvent.click(renderedComponent.getByTestId("conditions-input"), {
        // !important - to change checkboxes we should use the click event
        target: { value: true }
      });
      expect(
        (await renderedComponent.findByTestId("conditions-input")).value
      ).toBe("true");
    });

    test("should change value of message input", async function onChangeInput() {
      fireEvent.change(renderedComponent.getByTestId("message-textarea"), {
        target: { value: "Test message should be more than 10 symbols" }
      });
      expect(
        (await renderedComponent.findByTestId("message-textarea")).value
      ).toBe("Test message should be more than 10 symbols");
    });

    afterAll(cleanup);
  });

  describe("Displays an error message when a required field is touched", () => {
    beforeAll(() => {
      renderedComponent = render(component());
    });

    test("should be an error in name field", async function renderWithValidationError() {
      fireEvent.blur(renderedComponent.getByTestId("name-input"));
      const nameMessage = await renderedComponent.findByTestId(
        "name-group-message"
      );
      expect(nameMessage.innerHTML).toBeTruthy();
    });

    test("should be an error in email field", async function renderWithValidationError() {
      fireEvent.blur(renderedComponent.getByTestId("email-input"));
      const emailMessage = await renderedComponent.findByTestId(
        "email-group-message"
      );
      expect(emailMessage.innerHTML).toBeTruthy();
    });

    test("should be an error in name field", async function renderWithValidationError() {
      fireEvent.change(renderedComponent.getByTestId("email-input"), {
        target: { value: "g@g" }
      });
      const nameMessage = await renderedComponent.findByTestId(
        "email-group-message"
      );
      expect(nameMessage.innerHTML).toBeTruthy();
    });

    test("should be an error in condition field", async function renderWithValidationError() {
      fireEvent.blur(renderedComponent.getByTestId("conditions-input"));
      const emailMessage = await renderedComponent.findByTestId(
        "conditions-group-message"
      );
      expect(emailMessage.innerHTML).toBeTruthy();
    });

    test("should be an error in message field", async function renderWithValidationError() {
      fireEvent.blur(renderedComponent.getByTestId("message-textarea"));
      const emailMessage = await renderedComponent.findByTestId(
        "message-group-message"
      );
      expect(emailMessage.innerHTML).toBeTruthy();
    });

    afterAll(cleanup);
  });

  describe(`Display an error message when value doesn't pass validation`, function getValidationError() {
    beforeAll(function runbeforeAllTests() {
      renderedComponent = render(component());
    });

    test("should be an error in name field", async function renderWithValidationError() {
      fireEvent.change(renderedComponent.getByTestId("name-input"), {
        target: { value: "" }
      });
      fireEvent.blur(renderedComponent.getByTestId("name-input")); // important! Also we must make blur event - it is required condition for error message with a validation
      const message = (
        await waitForElement(
          () =>
            renderedComponent.getByText(
              getDefaultMessage(NameFieldMessages.validationNameError)
            ),
          renderedComponent
        )
      ).innerHTML;
      expect(message).toBeTruthy();
    });

    test("should be an error in email field", async function renderWithValidationError() {
      fireEvent.change(renderedComponent.getByTestId("email-input"), {
        target: { value: "g@g" }
      });
      fireEvent.blur(renderedComponent.getByTestId("email-input"));
      const message = (
        await waitForElement(
          () =>
            renderedComponent.getByText(
              getDefaultMessage(EmailFieldMessages.validationEmailErrorValid)
            ),
          renderedComponent
        )
      ).innerHTML;
      expect(message).toBeTruthy();
    });

    test("should be an error in conditions field", async function renderWithValidationError() {
      fireEvent.click(renderedComponent.getByTestId("conditions-input"), {
        target: { value: true }
      });
      fireEvent.blur(renderedComponent.getByTestId("conditions-input"));
      const message = (
        await waitForElement(
          () =>
            renderedComponent.getByText(
              getDefaultMessage(
                ContactUsFormMessages.conditionsFormCheckboxError
              )
            ),
          renderedComponent
        )
      ).innerHTML;
      expect(message).toBeTruthy();
    });

    test("should be an error in message field", async function renderWithValidationError() {
      fireEvent.change(renderedComponent.getByTestId("message-textarea"), {
        target: { value: "test" }
      });
      fireEvent.blur(renderedComponent.getByTestId("message-textarea"));
      const message = (
        await waitForElement(
          () =>
            renderedComponent.getByText(
              getDefaultMessage(
                ContactUsFormMessages.validationMessageErrorLength
              )
            ),
          renderedComponent
        )
      ).innerHTML;
      expect(message).toBeTruthy();
    });

    test("button should be disabled, when are errors", async function renderDisabledButton() {
      fireEvent.change(renderedComponent.getByTestId("message-textarea"), {
        target: { value: "test" }
      });
      fireEvent.blur(renderedComponent.getByTestId("message-textarea"));
      await waitForElement(
        () =>
          renderedComponent.getByText(
            getDefaultMessage(
              ContactUsFormMessages.validationMessageErrorLength
            )
          ),
        renderedComponent
      );
      expect(
        renderedComponent.getByTestId("submit-contact-us-form-button").disabled
      ).toBe(true);
    });

    afterAll(cleanup);
  });

  describe("Success submitting form", () => {
    beforeEach(() => {
      mockAxios.mockImplementationOnce(async () => ({
        data: {
          message:
            "Thanks for contacting us! We will be in touch with you shortly."
        }
      }));
      renderedComponent = render(component(initialValues));
      fireEvent.submit(
        renderedComponent.getByTestId("submit-contact-us-form-button")
      );
    });

    test("should be succes callout after submitting", async function sendFormSuccess() {
      const successMessage = await renderedComponent.findByTestId(
        "callout-success"
      );
      expect(successMessage).toBeTruthy();
    });

    test("url shoul be from ziggy file", async function sendFormWithCorrectPayload() {
      await renderedComponent.findByTestId("callout-success");
      expect(mockAxios.mock.calls[0][0].url).toBe(
        `${Ziggy.baseUrl}${makeUrl(routes["contactUs.store"])}`
      );
    });

    test("The request should have the same payload as the formik values", async function sendFormWithCorrectPayload() {
      await renderedComponent.findByTestId("callout-success");
      expect(mockAxios.mock.calls[0][0].data).toEqual(
        initialValues.initialValues
      );
    });

    afterEach(cleanup);
  });

  describe("Error submitting form", () => {
    beforeAll(() => {
      mockAxios.mockImplementationOnce(() =>
        Promise.reject({
          response: {
            data: {
              message: "Route not found.",
              errors: { error: ["Route not found"] }
            }
          }
        })
      );
      renderedComponent = render(component(initialValues));
      fireEvent.submit(
        renderedComponent.getByTestId("submit-contact-us-form-button")
      );
    });
    test("should be error callout after submitting", async function sendFormError() {
      const errorMessage = await renderedComponent.findByTestId(
        "callout-danger"
      );
      expect(errorMessage).toBeTruthy();
    });
    afterAll(cleanup);
  });
});
