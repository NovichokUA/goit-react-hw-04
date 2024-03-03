import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const ModalWindow = ({ modalIsOpen, closeModal, valueCard }) => {
  if (!valueCard) return;
  const {
    urls: { regular },
    description,
  } = valueCard;

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <div>{valueCard && <img src={regular} alt={description} />}</div>
      </Modal>
    </div>
  );
};
