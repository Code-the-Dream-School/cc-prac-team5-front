import React from 'react'
import { Container } from '@mui/material';
import '../styles/Register.css'
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <Container>
      <div className='Register'>
        <div className='RegisterTitle'>
          <div className='backButtonContainer'>
            <button className='backButton'>
              <Link to='/' className='backLink'>
              {<IoIosArrowBack size={'25px'}/>}
              </Link>
            </button>
        </div>
          <span className='CreateAccount'>Create Account</span>
        </div>
        <div className='RegisterFormBox'>
          <form>
          <div className='Input1'>
            <input
              className='RegisterInput'
              type="text"
              name="name"
              placeholder="your name"
              required
            />
            <input
              className='RegisterInput'
              type="text"
              name="email"
              placeholder="email"
              required
            />
            <input
              className='RegisterInput'
              type="password"
              name="password"
              placeholder="password"
              required
            />
                <div className='ButtonContainer'>
                  <button className='RegisterButton'>
                      Register
                  </button>
                  </div>
                </div>      
          </form>
        </div>
      </div>
    </Container>
  
  )
}





export default Register;
