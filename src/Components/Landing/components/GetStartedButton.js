import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/GetStartedButton.css'

const GetStartedButton = () => {
  return (
    <div>
        <button className='registerButton'>
          <Link to='/register' className='registerLink'>
              Get Started
          </Link>
          </button>
    </div>
  )
}


export default GetStartedButton;