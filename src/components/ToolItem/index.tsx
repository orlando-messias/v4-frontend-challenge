import React, { useContext, useState } from 'react';
import { FaTrashAlt } from 'react-icons/all';

import api from '../../services/api';
import { Tool } from '../../pages/Home';
import { Modal } from '../ModalDelete';
import { AppContext } from '../../context/AppContext';
import './style.css';

interface ToolProps {
  tool: Tool;
};

const ToolItem: React.FC<ToolProps> = ({ tool }) => {
  const { onDelete, setOnDelete } = useContext(AppContext);
  const [showModal, setShowModal] = useState(false);

  async function handleRemove(id: String) {
    api.delete(`/tools/${id}`)
      .then(() => {
        setOnDelete(!onDelete);
      }).catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="tool-item">

      <div className="head">
        <span className="title"><a href={tool.link} target='_blank'>{tool.title}</a></span>
        <Modal showModal={showModal} setShowModal={setShowModal} handleRemove={() => handleRemove(tool.id)} />
        <div className="buttons" onClick={() => setShowModal(true)}>
          <FaTrashAlt className="delete-icon" />
          <span>remove</span>
        </div>
      </div>

      <div className="body">
        <p className="description">{tool.description}</p>
        <p>{tool.tags.map((tag, index) => (
          <span key={index} className="tag">{`#${tag}`}</span>
        ))}</p>
      </div>

    </div>
  );
};

export default ToolItem;