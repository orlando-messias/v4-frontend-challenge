import React, { useContext } from 'react';

import { Tool } from '../../pages/Home';
import { FaTrashAlt } from 'react-icons/all';
import './style.css';
import api from '../../services/api';
import { AppContext } from '../../context/AppContext';

interface ToolProps {
  tool: Tool;
};

const ToolItem: React.FC<ToolProps> = ({ tool }) => {
  const { onDelete, setOnDelete } = useContext(AppContext);

  async function handleRemove(id: String) {
    api.delete(`/tools/${id}`)
      .then(() => {
        alert('Toll deleted');
        setOnDelete(!onDelete);
      }).catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="tool-item">

      <div className="head">
        <span className="title"><a href={tool.link}>{tool.title}</a></span>
        <div className="buttons" onClick={() => handleRemove(tool.id)}>
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