import React from "react";
import { Formik, Form } from "formik";
import TailwindFormikInput from "../../Inputs/TailwindFormikInput";
import TailwindFormikSelect from "../../Inputs/TailwindFormikSelect";
import TailwindFormikCheckbox from "../../Inputs/TailwindFormikCheckbox";
import { AddArticleSchema } from "./ArticlesSchemas";

const ArticleForm = ({
  nextStep,
  prevStep,
  step,
  addArticle,
  currentUser,
  closeModal
}) => {
  return (
    <div>
      <Formik
        enableReinitialize={true}
        initialValues={{
          creatorName: currentUser.name,
          creatorEmail: currentUser.email,
          pseudonym: "",
          img: "",
          title: "",
          body: "",
          important: false,
          category: ""
        }}
        validateOnChange={true}
        validateOnBlur={true}
        validationSchema={AddArticleSchema}
        onSubmit={values => {
          const newArticle = {
            ...values,
            id: `f${(~~(Math.random() * 1e8)).toString(16)}`
          };
          addArticle({ articles: newArticle });
          closeModal();
        }}
      >
        {({
          errors,
          touched,
          values,
          validateForm,
          validateValue,
          setErrors,
          setTouched,
          setFieldValue,
          setFieldTouched
        }) => (
          <Form className="w-full  ml-auto mr-auto">
            {step === 0 ? (
              <div className="w-full">
                <TailwindFormikInput
                  errors={errors.creatorName}
                  touched={touched.creatorName}
                  label={"Your Name"}
                  disabled={true}
                  name={"creatorName"}
                />
                <TailwindFormikInput
                  errors={errors.creatorEmail}
                  touched={touched.creatorEmail}
                  label={"Your Email"}
                  disabled={true}
                  name={"creatorEmail"}
                />
                <TailwindFormikInput
                  errors={errors.pseudonym}
                  touched={touched.pseudonym}
                  label={"Your Pseudonym"}
                  name={"pseudonym"}
                />
                <TailwindFormikInput
                  errors={errors.img}
                  touched={touched.img}
                  label={"Image URL"}
                  name={"img"}
                />
                <div className="md:flex md:items-center">
                  <div className="md:w-2/4"></div>
                  <div className="md:w-2/4">
                    <button
                      onClick={async () => {
                        const validate = await validateForm();
                        if (
                          validate.creatorName ||
                          validate.creatorEmail ||
                          validate.pseudonym ||
                          validate.img
                        ) {
                          return;
                        } else {
                          nextStep();
                        }
                      }}
                      className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    >
                      Next Step
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full">
                <TailwindFormikInput
                  errors={errors.title}
                  touched={touched.title}
                  label={"Title"}
                  name={"title"}
                />
                <TailwindFormikInput
                  errors={errors.body}
                  touched={touched.body}
                  label={"Text"}
                  name={"body"}
                />
                <TailwindFormikSelect
                  value={values.category}
                  errors={errors.category}
                  touched={touched.category}
                  handleChange={setFieldValue}
                  handleBlur={setFieldTouched}
                  label={"Category"}
                  name={"category"}
                />
                <div className="flex justify-end">
                  <TailwindFormikCheckbox
                    name={"important"}
                    handleChange={setFieldValue}
                    checked={values.important}
                    label={"Important"}
                  />
                </div>
                <div className="md:flex md:items-center">
                  <div className="md:w-2/4">
                    <button
                      onClick={() => prevStep()}
                      className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    >
                      Previus Step
                    </button>
                  </div>
                  <div className="md:w-2/4">
                    <button
                      type="submit"
                      className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    >
                      Add article
                    </button>
                  </div>
                </div>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ArticleForm;
