import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0"
  }
};

const UserDeleteModal = props => {
  return (
    <div>
      <Modal
        isOpen={props.modalIsOpen}
        onRequestClose={props.closeModal}
        style={customStyles}
        shouldCloseOnOverlayClick={true}
        contentLabel="Example Modal"
      >
        <div id="ModalDnD" role="alert">
          <div
            id="ModalDnDHead"
            onMouseDown={e => {
              const ModalDnD = document.getElementById("ModalDnD");
              const ModalDnDHead = document.getElementById("ModalDnDHead");
              let shiftX =
                e.clientX - ModalDnDHead.getBoundingClientRect().left;
              let shiftY = e.clientY - ModalDnDHead.getBoundingClientRect().top;
              ModalDnD.style.display = "block";
              ModalDnD.style.position = "absolute";

              ModalDnD.style.zIndex = 1000;
              // переместим в body, чтобы мяч был точно не внутри position:relative
              document.body.append(ModalDnD);
              // и установим абсолютно спозиционированный мяч под курсор

              moveAt(ModalDnD.pageX, ModalDnD.pageY);

              // передвинуть под координаты курсора
              // и сдвинуть на половину ширины/высоты для центрирования
              function moveAt(pageX, pageY) {
                ModalDnD.style.left = pageX - shiftX + "px";
                ModalDnD.style.top = pageY - shiftY + "px";
              }

              function onMouseMove(event) {
                moveAt(event.pageX, event.pageY);
              }

              // (3) перемещать по экрану
              document.addEventListener("mousemove", onMouseMove);

              // (4) удалить более ненужные обработчики событий
              ModalDnD.onmouseup = function() {
                document.removeEventListener("mousemove", onMouseMove);
                ModalDnD.onmouseup = null;
              };
            }}
            className="bg-red-500 text-white font-bold rounded-t px-4 py-2"
          >
            Danger
          </div>
          <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
            <p>First you need to change user.</p>
            <button
              onClick={() => props.closeModal()}
              className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Close
            </button>
          </div>
          <div></div>
        </div>
      </Modal>
    </div>
  );
};

export default UserDeleteModal;
