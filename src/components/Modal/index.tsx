import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import { ModalContainer, ModalForm } from './style';

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
            <button className="button" onClick={() => setShowModal(false)}>
              Cancel
            </button>
            {tools.map(tool => <p>{tool.title}</p>)}
          </ModalForm>
        </ModalContainer>
      }
    </div>
  )
}