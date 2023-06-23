import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from './views/ParentViews/Login/components/Login';
import './common/styles/GlobalStyles.css'
import Landing from './modules/Landing/components/Landing';

function App() {

  return (
    <>
    <nav>
      <Routes>
        <Route
          path='/'
          element={<Landing />}
          />
          <Route
            path='/login'
            element={<Login />} 
          />
      </Routes>
      </nav>
    </>
  );
}

export default App;
