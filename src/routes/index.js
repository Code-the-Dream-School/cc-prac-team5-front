import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Landing from '../modules/Landing/components/Landing/Landing'
import ChildLogin from '../views/ChildViews/components/Login/ChildLogin'
import Login from '../views/ParentViews/Login/components/Login/Login'
import Register from '../views/ParentViews/Register/components/Register'
import Rewards from '../Pages/Rewards/Rewards';
import User1 from '../Pages/User1/User1';
import ParentDashboard from '../Pages/ParentDashboard/ParentDashboard';
import EditChild from '../Pages/EditChild/EditChild';
import Chore from '../Pages/Chore/Chore';
import EditChore from '../Pages/EditChore/EditChore';
import NewChore from '../Pages/NewChore/NewChore';
import Rewards2 from '../Pages/Rewards2/Rewards2';
import NewReward from '../Pages/NewReward/NewReward';
import EarnReward from '../Pages/EarnReward/EarnReward';

function Routers() {

  const user = localStorage.getItem("token") || null;
  
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/child-login' element={<ChildLogin />} />
        <Route path="/parentdashboard" element={ user ? <ParentDashboard /> : <Navigate to='/login' />} />
        <Route path="/chore" element={<Chore />} />
        <Route path="/editchore" element={<EditChore />} />
        <Route path="/user1" element={<User1 />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/rewards2" element={<Rewards2 />} />
        <Route path="/editchild/:id" element={<EditChild />} />
        <Route path="/newchore" element={<NewChore />} />
        <Route path="/addnewrewards" element={<NewReward />} />
        <Route path="/earnrewards" element={<EarnReward />} />
    </Routes>
  )
}

export default Routers