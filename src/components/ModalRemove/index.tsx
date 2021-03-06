import React from 'react';
import { FaMinus } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

import { ModalContainer, ModalDialog } from './style';

interface ModalProps {
  showModal: Boolean;
  setShowModal: Function;
  handleRemove: Function;
};

// renders a modal dialog to remove a tool. The styles here were applied using styled components
const ModalRemove: React.FC<ModalProps> = ({ showModal, setShowModal, handleRemove }) => {

  return (
    <div>
      {showModal &&
        <ModalContainer>
          <ModalDialog >
            <div className="modal-title">
              <span><IoClose className="icon" /></span>
              <span>Remove Tool</span>
            </div>

            <h4 className="title">Are you sure you want to remove this Tool?</h4>

            <div className="buttons">
              <button type="button" className="cancel" onClick={() => setShowModal(false)} >
                <IoClose className="icon" /><span>Cancel</span>
              </button>
              <button type="button" onClick={(id) => handleRemove(id)}>
                <FaMinus /> <span>Remove</span>
              </button>
            </div>
          </ModalDialog>
        </ModalContainer>
      }
    </div>
  );
};

export default ModalRemove;