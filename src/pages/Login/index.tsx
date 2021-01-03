import React, { FormEvent, useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaUserPlus } from "react-icons/fa";
import { BsHouseDoorFill } from 'react-icons/bs';
import { toast } from 'react-toastify';

import api from '../../services/api';
import { AddButton } from '../../components/SearchBar/style';
import { SearchInput } from '../../components/SearchBar/style';
import { Container, Form } from './style';
import { AppContext } from '../../context/AppContext';
import Validation from '../../services/Validation';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(AppContext);

  const history = useHistory();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    await api
      .post('/users/login', {
        email,
        password
      })
      .then((response) => {
        localStorage.setItem('user', JSON.stringify(response.data));
        setUser(response.data);
        history.push('/');
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return (
    <Container>
      <header>
        <Link to="/">
          <div>
            <BsHouseDoorFill className="home-icon" /> <span>Home</span>
          </div>
        </Link>
      </header>
      <Form onSubmit={handleSubmit}>
        <SearchInput
          value={email}
          placeholder='E-mail'
          onChange={(e) => setEmail(e.target.value)}
        />
        <SearchInput
          type="password"
          value={password}
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <AddButton color="#2F55CC" disabled={!(Validation.email(email))}>
          Login
        </AddButton>
        <Link to="/register" className="account-link">
          <span className="account">
            <FaUserPlus className="icon" />
            <span>I don't have an account yet</span>
          </span>
        </Link>
      </Form>
    </Container>
  );
};

export default Login;