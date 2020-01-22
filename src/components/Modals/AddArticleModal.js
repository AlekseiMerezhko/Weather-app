import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import ArticleForm from "../Forms/ArticleForm/AddArticleForm";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "25px"
    // backgroundColor: "rgba(29, 29, 29, 0.5)"
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
          <ArticleForm
            closeModal={props.closeModal}
            currentUser={props.currentUser}
            addArticle={props.addArticle}
            prevStep={prevStep}
            nextStep={nextStep}
            step={step}
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
