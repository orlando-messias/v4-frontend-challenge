import React, { useState, useContext, useEffect } from 'react';

import { Container, AddButton, SearchInput, CheckBoxInput } from './style';
import { FaPlus, FaSearch } from "react-icons/fa";
import api from '../../services/api';
import { AppContext } from '../../context/AppContext';

interface SearchBarProps {
  setShowModal: Function;
};

export const SearchBar: React.FC<SearchBarProps> = ({ setShowModal }) => {
  const [searchBy, setSearchBy] = useState('');
  const [check, setCheck] = useState(false);
  const { setTools } = useContext(AppContext);

  useEffect(() => {
    let param = '';
    check ? param = `tag=${searchBy}` : param = `title=${searchBy}`
    api.get(`/tools?${param}`).then(response => {
      setTools(response.data);
    });
  }, [searchBy, check]);

  const handleCheck = () => setCheck(!check);

  return (
    <Container>
      <div className="inputs">
        <div className="searchBar">
          <FaSearch id='faSearch' />
          <SearchInput
            placeholder='search tool'
            value={searchBy}
            onChange={(e) => setSearchBy(e.target.value)}
          />
        </div>

        <div className="searchCheckContainer">
          <div className="searchCheck" >
            <CheckBoxInput
              type='checkbox'
              id='searchCheck'
              checked={check}
              onChange={handleCheck}
            />
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
};


