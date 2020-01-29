import React from "react";
import { Formik, Form } from "formik";

const RenderForm = ({
  validationSchema,
  initialValues,
  onSubmit,
  renderForm,

  ...props
}) => {
  return (
    <div>
      <Formik
        validateOnBlur={!props.validateOnBlur ? false : true}
        validateOnChange={!props.validateOnChange ? false : true}
        initialValues={{
          ...initialValues
        }}
        validationSchema={validationSchema}
        onSubmit={values => onSubmit(values)}
      >
        {values => (
          <Form className="w-full ml-auto mr-auto">
            {renderForm({ ...values, ...props })}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RenderForm;
