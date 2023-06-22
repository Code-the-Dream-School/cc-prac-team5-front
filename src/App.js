import React from 'react';
// import { getAllData } from './util/index';
import Landing from './modules/Landing/components/LandingPage/Landing';
import { Routes, Route } from "react-router-dom";
import Login from './views/ParentViews/Login/components/Login/Login';
import './common/styles/GlobalStyles.css'
import Register from './views/ParentViews/Register/components/Register';
import ChildLogin from './views/ChildViews/components/Login/ChildLogin';

// const URL = 'http://localhost:8000/api/v1/';

function App() {

// const [message, setMessage] = useState(''); 

//   useEffect(() => {

//     (async () => {
//       const myData = await getAllData(URL)
//       setMessage(myData.data);
//     })();
      
//     return () => {
//       console.log('unmounting');
//     }

//   }, []);

  return (
    <>
      {/* <h1>{message}</h1> */}
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
            element={<Register />} 
          />
          <Route 
          path='/child-login'
          element={<ChildLogin />}
          />
      </Routes>
      
    </>
  );
}

export default App;
