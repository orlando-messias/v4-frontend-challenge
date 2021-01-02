import React, { useEffect, useState, useContext } from 'react';

import ToolItem from '../../components/ToolItem';
import api from '../../services/api';
import logo from '../../images/v4logo.png';
import './style.css';
import { ModalAdd } from '../../components/ModalAdd';
import { SearchBar } from '../../components/SearchBar';
import { AppContext } from '../../context/AppContext';

export interface Tool {
  id: string;
  title: string;
  link: string;
  description: string;
  tags: string[];
};

function Home() {
  const { tools, setTools, onDelete, onAdd } = useContext(AppContext);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    api.get<Tool[]>('/tools').then(response => {
      setTools(response.data);
    });
  }, [onDelete, onAdd]);

  return (
    <div className="container">

      <header className="header">
        <img src={logo} alt="logo v4" />
        <div className="title">
          <h1>VUTTR</h1>
          <p>Very Useful Tools to Remember</p>
        </div>
      </header>

      <ModalAdd showModal={showModal} setShowModal={setShowModal} tools={tools} />

      <SearchBar setShowModal={setShowModal} />

      {tools.map((tool, index) => (
        <ToolItem key={index} tool={tool} />
      ))}

    </div>
  );
};

export default Home;