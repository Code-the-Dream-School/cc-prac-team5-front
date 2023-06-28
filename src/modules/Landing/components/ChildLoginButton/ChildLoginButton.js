import React from 'react'
import '../../styles/ChildLoginButton.css'
import { Link } from 'react-router-dom'

const ChildLoginButton = () => {
  return (
    <div>
        <button className='ChildLoginButton'>
          <Link to='/child-login' className='ChildLoginLink'>
            Child Login
          </Link>
        </button>
    </div>
  )
}

export default ChildLoginButton;
