import React, { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaUserCheck } from "react-icons/fa";
import { BsHouseDoorFill } from 'react-icons/bs';
import { toast } from 'react-toastify';

import api from '../../services/api';
import { AddButton } from '../../components/SearchBar/style';
import { SearchInput } from '../../components/SearchBar/style';
import { Container, Form } from './style';
import Validation from '../../services/Validation';

// renders a form to register user data. The styles here were applied using styled components
const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  // registers a new user account using the post route /users/save
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    await api
      .post('/users/save', {
        name,
        email,
        password
      })
      .then(() => {
        toast.success('Account successfully created! Now you can login');
        history.push('/login');
      })
      .catch((error) => toast.error(error.response.data.message));
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
        <span className="password-info">* minimum 06 characters. Letters and numbers required</span>
        <AddButton
          color="#2F55CC"
          disabled={!(Validation.email(email) && Validation.name(name) && Validation.passwordToReg(password))}
        >
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