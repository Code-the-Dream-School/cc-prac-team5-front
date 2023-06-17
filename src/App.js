import React, { useState, useEffect } from 'react';
import { getAllData } from './util/index';
import Landing from './modules/Landing/components/Landing';
import { Routes, Route } from "react-router-dom";
import Login from './views/ParentViews/Login/components/Login';
import './common/styles/GlobalStyles.css'

const URL = 'http://localhost:8000/api/v1/';

function App() {

const [message, setMessage] = useState(''); 

  useEffect(() => {

    (async () => {
      const myData = await getAllData(URL)
      setMessage(myData.data);
    })();
      
    return () => {
      console.log('unmounting');
    }

  }, []);

  return (
    <>
      <h1>{message}</h1>
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
    </>
  );
}

export default App;
