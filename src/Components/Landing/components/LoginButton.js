import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/LoginButton.css'

const LoginButton = () => {
  return (
    <div>
      <button className='loginButton'>
        <Link to='/login' className='loginLink'>
          Login
        </Link>
      </button>
    </div>
  )
}

export default LoginButton;
