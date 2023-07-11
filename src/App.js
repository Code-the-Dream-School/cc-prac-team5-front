import React from 'react';
import './common/styles/GlobalStyles.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Routers from './routes';
import "./App.css";

function App() {

  return (
    <Router>
      <Routers />
      <ToastContainer />
    </Router>
  );
}

export default App;