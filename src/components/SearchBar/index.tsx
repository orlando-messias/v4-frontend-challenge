import React, { useState, useContext, useEffect } from 'react';

import { Container, AddButton, SearchInput, CheckBoxInput } from './style';
import { FaPlus, FaSearch } from "react-icons/fa";
import api from '../../services/api';
import { AppContext } from '../../context/AppContext';

interface SearchBarProps {
  setShowModal: Function;
};

// renders the component search bar. The styles here were applied using styled components
const SearchBar: React.FC<SearchBarProps> = ({ setShowModal }) => {
  const [searchBy, setSearchBy] = useState('');
  const [check, setCheck] = useState(false);
  const { setTools, setNumberOfTools } = useContext(AppContext);

  // finds a tool by its title or tag name using the get route /tools
  useEffect(() => {
    let param = '';
    // when the state check is true, search engine must use 'tag' as a param, on the other hand use 'title'
    // as a param to search
    check ? param = `tag=${searchBy}` : param = `title=${searchBy}`
    api.get(`/tools?${param}`).then(response => {
      setTools(response.data);
      setNumberOfTools(response.data.length);
    });
  }, [searchBy, check]);

  // toggle between checked and unchecked to search by tag name or title
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

export default SearchBar;