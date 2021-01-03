import React, { useEffect, useState, useContext } from 'react';

import ToolItem from '../../components/ToolItem';
import api from '../../services/api';
import logo from '../../images/v4logo2.png';
import './style.css';
import { ModalAdd } from '../../components/ModalAdd';
import { SearchBar } from '../../components/SearchBar';
import { AppContext } from '../../context/AppContext';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FcSearch } from 'react-icons/fc';

export interface Tool {
  id: string;
  title: string;
  link: string;
  description: string;
  tags: string[];
};

function Home() {
  const { tools, setTools } = useContext(AppContext);
  const { onDelete, onAdd } = useContext(AppContext);
  const { numberOfTools, setNumberOfTools } = useContext(AppContext);
  const { user, setUser } = useContext(AppContext);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    api.get<Tool[]>('/tools').then(response => {
      setTools(response.data);
      setNumberOfTools(response.data.length);
    });
  }, [onDelete, onAdd]);

  function logout() {
    localStorage.removeItem('user');
    window.location.reload();
  }

  return (
    <div className="container">

      <header className="header">
        <div className="brand">
          <img src={logo} alt="logo v4" />
          <div className="title">
            <h1>VUTTR</h1>
            <p>Very Useful Tools to Remember</p>
          </div>
        </div>
        <div className='user'>
          {user?.name ?
            <div className="welcome">
              {`Welcome, ${user.name.split(' ')[0]}`}
              <p className="login" onClick={() => logout()}>logout</p>
            </div> :
            <div>
              <Link to="/login" ><div className="login">login</div></Link>
            </div>
          }
          <FaUserCircle className="icon" />
        </div>
      </header>

      <ModalAdd showModal={showModal} setShowModal={setShowModal} tools={tools} />

      <SearchBar setShowModal={setShowModal} />

      {tools.map((tool, index) => (
        <ToolItem key={index} tool={tool} />
      ))}

      {numberOfTools === 0 && <div className="no-tools-found"><FcSearch /> No tools found</div>}

    </div>
  );
};

export default Home;