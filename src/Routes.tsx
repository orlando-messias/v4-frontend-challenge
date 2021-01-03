import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function Routes() {
  return (
    <Router>
      <Route path='/' exact component={Home} />
      <Route path='/register' component={Register} />
      <Route path='/login' component={Login} />
    </Router>
  );
};

export default Routes;