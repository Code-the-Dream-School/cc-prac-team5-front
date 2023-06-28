import React from 'react';
import Landing from './modules/Landing/components/Landing/Landing';
import { Routes, Route } from "react-router-dom";
import Login from './views/ParentViews/Login/components/Login/Login';
import './common/styles/GlobalStyles.css'
import ChildLogin from './views/ChildViews/components/Login/ChildLogin';
import Register from './views/ParentViews/Register/components/Register';

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
          <Route
            path='/register'
            element={<Register/>} 
          />
          <Route
            path='/child-login'
            element={<ChildLogin />} 
          />
      </Routes>
      </nav>
    </>
  );
}

export default App;
