import React, { useState, useEffect } from "react";
import Modal from "react-modal";
// import ArticleForm from "../Forms/ArticleForm/AddArticleForm";
import AddArticleFirstStep from "../Forms/ArticleForm/AddArticleFirstStep";
import AddArticleSecondStep from "../Forms/ArticleForm/AddArticleSecondStep";

import RenderForm from "../Forms/RenderForm";
import {
  AddArticleSchema1,
  AddArticleSchema2
} from "../Forms/ArticleForm/ArticlesSchemas";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "25px"
  },
  overlay: { backgroundColor: "rgba(39, 39, 39, 0.75)" }
};
Modal.setAppElement("#root");

const AddArticleModal = props => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    return resetStep();
  }, [props.modalIsOpen]);

  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };
  const resetStep = () => {
    setStep(0);
  };

  const initialValues = {
    creatorName: props.currentUser.name,
    creatorEmail: props.currentUser.email,
    pseudonym: "",
    img: "",
    title: "",
    body: "",
    important: false,
    category: ""
  };

  const onSubmit = values => {
    if (step === 0) {
      return nextStep();
    } else {
      const newArticle = {
        ...values,
        id: `f${(~~(Math.random() * 1e8)).toString(16)}`
      };
      props.addArticle({ articles: newArticle });
      props.closeModal();
    }
  };

  return (
    <div>
      <Modal
        isOpen={props.modalIsOpen}
        onRequestClose={props.closeModal}
        style={customStyles}
        shouldCloseOnOverlayClick={true}
        contentLabel="Example Modal"
      >
        <div>
          {/* --------- Example 1 --------- */}

          {/* <ArticleForm
            closeModal={props.closeModal}
            currentUser={props.currentUser}
            addArticle={props.addArticle}
            prevStep={prevStep}
            nextStep={nextStep}
            step={step}
          /> */}

          {/* --------- Example 2 --------- */}
          <RenderForm
            initialValues={initialValues}
            onSubmit={onSubmit}
            renderForm={step === 0 ? AddArticleFirstStep : AddArticleSecondStep}
            prevStep={prevStep}
            validationSchema={
              step === 0 ? AddArticleSchema1 : AddArticleSchema2
            }
          />

          <button
            onClick={() => {
              props.closeModal();
            }}
            className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default AddArticleModal;
