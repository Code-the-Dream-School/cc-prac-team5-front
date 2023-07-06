import React from 'react';
import Landing from './Components/Landing/components/Landing';
import { Routes, Route } from "react-router-dom";
import Login from './Components/ParentViews/Login/components/Login';
import './common/styles/GlobalStyles.css'
import ChildLogin from './Components/ChildViews/Login/components/ChildLogin'
import Register from './Components/ParentViews/Register/components/Register';
import ChildDashboard from './Components/ChildViews/Dashboard/components/ChildDashboard';

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
          <Route
            path='/child-dashboard'
            element={<ChildDashboard />}
          />
      </Routes>
      </nav>
    </>
  );
}

export default App;