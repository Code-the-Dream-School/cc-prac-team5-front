import React from 'react';
<<<<<<< HEAD
import './common/styles/GlobalStyles.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Routers from './routes';
import "./App.css";
=======
import Landing from './Components/Landing/components/Landing';
import { Routes, Route } from "react-router-dom";
import Login from './Components/ParentViews/Login/components/Login';
import './common/styles/GlobalStyles.css'
import ChildLogin from './Components/ChildViews/Login/components/ChildLogin'
import Register from './Components/ParentViews/Register/components/Register';
import ChildDashboard from './Components/ChildViews/Dashboard/components/ChildDashboard';
>>>>>>> 821081e03e339efbb2e749aa00a8be96d91a6503

function App() {

  return (
<<<<<<< HEAD
    <Router>
      <Routers />
      <ToastContainer />
    </Router>
=======
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
>>>>>>> 821081e03e339efbb2e749aa00a8be96d91a6503
  );
}

export default App;