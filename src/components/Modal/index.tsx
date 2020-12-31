import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import { ModalContainer, ModalForm } from './style';
import { FaPlus } from "react-icons/fa";

interface ModalProps {
  showModal: Boolean;
  setShowModal: Function;
  tools: Tool[];
  setTools: Function;
}

export interface Tool {
  title: string;
  link: string;
  description: string;
  tags: string[];
};

export const Modal: React.FC<ModalProps> = ({ showModal, setShowModal, tools, setTools }) => {


  return (
    <div>
      {showModal &&
        <ModalContainer>
          <ModalForm>
            <div className="modal-title">
              <span><FaPlus /></span>
              <span>Add New Tool</span>
            </div>

            <h4 className="title" placeholder="" >Tool Title</h4>
            <input
              type="text"
              placeholder="Tool title"
              autoFocus
            />

            <h4 className="title" >Tool Link</h4>
            <input
              type="url"
              placeholder="https://www.domain.com"
            />

            <h4 className="title" >Tool Description</h4>
            <textarea
              placeholder="Type the description of the tool..."
            />

            <h4 className="title" >Tags</h4>
            <input
              type="text"
              placeholder="Tags"
            />

            <div className="buttons">
              <button type="button" className="button cancel" onClick={() => setShowModal(false)} >
                <span>Cancel</span>
              </button>
              <button type="submit" className="button" >
                <span>Add Tool</span>
              </button>
            </div>
          </ModalForm>
        </ModalContainer>
      }
    </div>
  )
}