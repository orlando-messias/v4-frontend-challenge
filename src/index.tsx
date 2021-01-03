import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';

import "react-toastify/dist/ReactToastify.css";

import App from './App';
import { AppContextProvider } from './context/AppContext';

ReactDOM.render(
  <AppContextProvider>
    <App />
    <ToastContainer autoClose={4000} />
  </AppContextProvider>,
  document.getElementById('root')
);