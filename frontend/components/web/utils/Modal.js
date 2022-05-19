import styled from "styled-components";
import Modal from "react-modal";
import { useWebContext } from "../../../context/webContext";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "16px",
  },
};

const ModalComp = ({ children }) => {
  const { modalIsOpen, setIsOpen } = useWebContext();

  let subtitle;

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <ModalStyled>
        <div className="xIcon">
          <img
            onClick={closeModal}
            src="../../../assets/images/web/greyXicon.png"
            alt="x Icon"
          />
        </div>
        {children}
      </ModalStyled>
    </Modal>
  );
};

const ModalStyled = styled.div`
  .xIcon {
     display: flex;
     justify-content: flex-end;
     padding: 5px;
  }

 
`;

export default ModalComp;
