import React, { useState, useEffect } from 'react';
import { getAllData } from './util/index';
import Landing from './modules/Landing/components/Landing';

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
      <Landing />
    </>
  );
}

export default App;
