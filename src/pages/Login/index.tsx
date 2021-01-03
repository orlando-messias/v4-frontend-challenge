import React, { FormEvent, useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaUserCheck, FaUserPlus } from "react-icons/fa";

import api from '../../services/api';
import { AddButton } from '../../components/SearchBar/style';
import { SearchInput } from '../../components/SearchBar/style';
import { Container, Form } from './style';
import { AppContext } from '../../context/AppContext';
import { BsHouseDoorFill } from 'react-icons/bs';

interface User {
  id: string;
  name: string;
  email: string;
  token: string;
}

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, setUser } = useContext(AppContext);

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
        // console.log(user?.token);
        // console.log(response.data);
        // const { id, name, email, token } = response.data;
        // setUser({id, name, email, token});
        // console.log(user);
        // const { name, email, role } = user;
        // const userData = { name, email, token, role };
      })
      .catch((error) => alert(error.response.data.message));
  }

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
        <AddButton color="#2F55CC">
          Login
        </AddButton>
        <Link to="/register">
          <span className="account">
            <FaUserPlus className="icon" />
            <span>I don't have an account yet</span>
          </span>
        </Link>
        {/* <p>{user}</p> */}
      </Form>
    </Container>
  );
};

export default Login;