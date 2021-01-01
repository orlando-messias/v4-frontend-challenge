import React, { FormEvent, useState } from 'react';

import { Container, AddButton, SearchInput, CheckBoxInput } from './style';
import { FaPlus, FaSearch, FaUserCircle } from "react-icons/fa";
import api from '../../services/api';

interface SearchBarProps {
  setShowModal: Function;
}

export const SearchBar: React.FC<SearchBarProps> = ({ setShowModal }) => {
  const [tools, setTools] = useState('');

  async function searchTool(q: string) {
    await api.get(`/tools?tag=${q}`).then(response => {
      setTools(response.data);
      console.log(tools);
    });
  };

  return (
    <Container>
      <div className="inputs">
        <div className="searchBar">
          <FaSearch id='faSearch' />
          <SearchInput placeholder='search tool' onChange={(e) => searchTool(e.target.value)} />
        </div>
        <div className="searchCheckContainer">
          <div className="searchCheck" >
            <CheckBoxInput type='checkbox' id='searchCheck' />
            <span className="spanCheck" >
              <label htmlFor='searchCheck'> search in tags only</label>
            </span>
          </div>
        </div>
        <div>
          <AddButton className="addButton" onClick={() => setShowModal(true)}>
            <FaPlus className="plusIcon" />
            <span>New Tool</span>
          </AddButton>
        </div>
      </div>
    </Container >
  );
}


