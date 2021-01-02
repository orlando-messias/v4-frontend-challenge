import React from 'react';
import { FaMinus } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

import { ModalContainer, ModalDialog } from './style';

interface ModalProps {
  showModal: Boolean;
  setShowModal: Function;
  handleRemove: Function;
};

export const Modal: React.FC<ModalProps> = ({ showModal, setShowModal, handleRemove }) => {

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
              <button type="button" className="button cancel" onClick={() => setShowModal(false)} >
                <IoClose className="icon" /><span>Cancel</span>
              </button>
              <button type="submit" className="button" onClick={(id) => handleRemove(id)}>
                <FaMinus /> <span>Remove</span>
              </button>
            </div>
          </ModalDialog>
        </ModalContainer>
      }
    </div>
  );
};