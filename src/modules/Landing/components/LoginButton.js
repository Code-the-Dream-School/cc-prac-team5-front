import React from 'react'
import { Link } from 'react-router-dom';


const LoginButton = () => {
  return (
    <div>
      <button>
        <Link to='/login'>
          Login
        </Link>
      </button>
    </div>
  )
}

export default LoginButton;
