import React, { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaUserCheck, FaUserPlus } from "react-icons/fa";

import api from '../../services/api';
import { AddButton } from '../../components/SearchBar/style';
import { SearchInput } from '../../components/SearchBar/style';
import { Container, Form } from './style';
import { BsHouseDoorFill } from 'react-icons/bs';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const history = useHistory();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    await api
      .post('/users/save', {
        name,
        email,
        password
      })
      .then((response) => {
        console.log(response.data);
        // const { token, user } = response.data;
        // const { name, email, role } = user;
        // const userData = { name, email, token, role };
      })
      .catch((error) => alert(error.response.data.message));
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
          value={name}
          placeholder='Name'
          onChange={(e) => setName(e.target.value)}
        />
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
          Create Account
        </AddButton>
        <Link to="/login">
          <span className="account">
            <FaUserCheck className="icon" />
            <span>I already have an account</span>
          </span>
        </Link>
      </Form>
    </Container>
  );
};

export default Register;