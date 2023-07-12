import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Landing from '../Components/Landing/components/Landing'
import ChildLogin from '../Components/ChildViews/Login/components/ChildLogin'
import Login from '../Components/ParentViews/Login/components/Login'
import Register from '../Components/ParentViews/Register/components/Register'
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
        <Route path="/chore" element={user ? <Chore /> : <Navigate to='/login' />} />
        <Route path="/editchore/:id" element={user ? <EditChore /> : <Navigate to='/login' />} />
        <Route path="/user1" element={user ? <User1 /> : <Navigate to='/login' />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/rewards2" element={user ? <Rewards2 /> : <Navigate to='/login' />} />
        <Route path="/editchild/:id" element={ user ? <EditChild /> : <Navigate to='/login' />} />
        <Route path="/newchore" element={ user ? <NewChore /> : <Navigate to='/login' />} />
        <Route path="/addnewrewards" element={ user ? <NewReward /> : <Navigate to='/login' />} />
        <Route path="/earnrewards" element={<EarnReward />} />
    </Routes>
  )
}

export default Routers