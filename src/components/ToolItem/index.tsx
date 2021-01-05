import React, { useContext, useState } from 'react';
import { FaTrashAlt } from 'react-icons/all';
import { toast } from 'react-toastify';

import api from '../../services/api';
import { Tool } from '../../pages/Home';
import ModalRemove from '../ModalRemove';
import { AppContext } from '../../context/AppContext';
import './style.css';

interface ToolProps {
  tool: Tool;
};

// renders each individual tool with its title, link, description, tags and remove button
const ToolItem: React.FC<ToolProps> = ({ tool }) => {
  const { onDelete, setOnDelete, user } = useContext(AppContext);
  const [showModal, setShowModal] = useState(false);

  // deletes a tool using the delete route /tools/id
  function handleRemove(id: String) {
    api.delete(`/tools/${id}`, { headers: { Authorization: `Bearer ${user?.token}` } })
      .then(() => {
        setShowModal(false);
        setOnDelete(!onDelete);
        toast.success('Tool removed');
      }).catch(() => {
        toast.error('You must login to remove any tool');
        setTimeout(() => {
          setShowModal(false);
        }, 4000);
      });
  };

  return (
    <div className="tool-item">

      <div className="head">
        <span className="title"><a href={tool.link} target='_blank'>{tool.title}</a></span>
        <ModalRemove
          showModal={showModal}
          setShowModal={setShowModal}
          handleRemove={() => handleRemove(tool.id)}
        />
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