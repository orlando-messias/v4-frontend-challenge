import React from 'react';

import { Container, AddButton, SearchInput, CheckBoxInput } from './style';
import { FaPlus, FaSearch, FaUserCircle } from "react-icons/fa";

interface SearchBarProps {
  setShowModal: Function;
}

export const SearchBar: React.FC<SearchBarProps> = ({ setShowModal }) => {

  return (
    <Container>
      <div className="inputs">
        <div className="searchBar">
          <FaSearch id='faSearch' />
          <SearchInput placeholder='search tool' />
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


