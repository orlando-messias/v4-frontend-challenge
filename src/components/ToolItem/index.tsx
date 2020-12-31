import React from 'react';

import { Tool } from '../../pages/Home';
import { FaTrashAlt } from 'react-icons/all';
import './style.css';

interface ToolProps {
  tool: Tool;
}

const ToolItem: React.FC<ToolProps> = ({ tool }) => {
  return (
    <div className="tool-item">
      <div className="head">
        <span className="title"><a href={tool.link}>{tool.title}</a></span>
        <div className="buttons">
          <FaTrashAlt className="delete-icon" />
          <span>remove</span>
        </div>
      </div>
      <div className="body">
        <p className="description">{tool.description}</p>
        <p>{tool.tags.map(tag => (
          <span className="tag">{`#${tag}`}</span>
        ))}</p>
      </div>
    </div>
  );
};

export default ToolItem;