import React, { useEffect, useState } from 'react';

import ToolItem from '../../components/ToolItem';
import api from '../../services/api';
import logo from '../../images/v4logo.png';
import './style.css';
import { Modal } from '../../components/Modal';
import { SearchBar } from '../../components/SearchBar';

export interface Tool {
  id: string;
  title: string;
  link: string;
  description: string;
  tags: string[];
};

function Home() {
  const [tools, setTools] = useState<Tool[]>([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    api.get<Tool[]>('/tools?tag=online').then(response => {
      setTools(response.data);
    });
  }, []);

  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="logo v4" />
        <div className="title">
          <h1>VUTTR</h1>
          <p>Very Useful Tools to Remember</p>
        </div>
      </header>
      <Modal showModal={showModal} setShowModal={setShowModal} tools={tools} setTools={setTools} />
      <SearchBar setShowModal={setShowModal} />
      {tools.map(tool => (
        <ToolItem key={tool.id} tool={tool} />
      ))}
    </div>
  )
}

export default Home;