import React from "react";
import { Formik, Form, Field } from "formik";
import { AddUserSchema } from "./UserSchemas";
const AddUserForm = props => {
  const alreadyExist = value => {
    let error;
    const checkUser =
      props.allUsers.some(user => user.email === value) &&
      props.editMode.email !== value;
    if (checkUser) {
      error = "User already exist!";
    }
    return error;
  };
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        name: props.editMode.active ? props.editMode.name : "",
        email: props.editMode.active ? props.editMode.email : ""
      }}
      validationSchema={AddUserSchema}
      onSubmit={(values, { resetForm }) => {
        if (!props.editMode.active) {
          props.addUser({
            user: { name: values.name, email: values.email }
          });
          resetForm({});
        } else {
          const currentIndex = props.allUsers.findIndex(
            user => user.email === props.editMode.email
          );
          const copyUsers = [...props.allUsers];

          copyUsers.splice(currentIndex, 1, {
            name: values.name,
            email: values.email
          });

          if (props.editMode.email === props.currentUser.email) {
            const newCurrentUser = {
              name: values.name,
              email: values.email
            };
            props.handleEditUser(copyUsers, newCurrentUser);
          } else {
            props.handleEditUser(copyUsers, props.currentUser);
          }

          resetForm({});
        }
      }}
    >
      {({ errors, touched, values }) => (
        <Form className="w-full max-w-sm ml-auto mr-auto">
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="name"
              >
                Name
              </label>
            </div>
            <div className="md:w-2/3">
              <Field
                className={`${
                  errors.name ? "border-red-500" : null
                } bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500`}
                name="name"
              />
              {errors.name && touched.name ? (
                <div className="text-red-500 text-xs italic">{errors.name}</div>
              ) : null}
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="email"
              >
                Email Address
              </label>
            </div>
            <div className="md:w-2/3">
              <Field
                validate={alreadyExist}
                className={`${
                  errors.email ? "border-red-500" : null
                } bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500`}
                name="email"
                type="email"
              />
              {errors.email && touched.email ? (
                <div className="text-red-500 text-xs italic">
                  {errors.email}
                </div>
              ) : null}
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button
                type="submit"
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              >
                {props.editMode.active ? "Save" : "Add User"}
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AddUserForm;
