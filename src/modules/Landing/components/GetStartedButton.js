import React from 'react'
import { Link } from 'react-router-dom';

const GetStartedButton = () => {
  return (
    <div>
        <button>
          <Link to='/registar'>
              Get Started
          </Link>
          </button>
    </div>
  )
}


export default GetStartedButton;