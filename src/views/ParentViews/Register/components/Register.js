import React, { useContext, useState } from 'react'
import { Container } from '@mui/material';
import '../styles/Register.css'
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../../../common/providers/UserContext';
import { loginPath } from '../../../ParentViews/Login/routes/LoginRoute'

export const Register = () => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const { setUser } = useContext(UserContext)

    const handleSubmit = async (e) => {
      e.preventDefault()

      const formData = new FormData(e.target)
      const data = Object.fromEntries(formData)

      setIsLoading(true)
      try{
        const response = await axios.post(
          //TODO Check for auth endpoints
          `${process.env.REACT_APP_SERVICE_ENDPOINT}/auth/register`,
          {...data },
          {headers: {  'Content-Type': 'application/json' }}  
        )

        if(response.data.token) {
          const user = {
            name: data['name'],
            email: data['email'],
            token: response.data.token
          }
          setUser(user) 
          navigate(loginPath)
        }
      } catch (error) {

      } finally {
        setIsLoading(false)
      }
    }
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
            <form onSubmit={handleSubmit}>
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
                    <button 
                    className='RegisterButton'
                    disabled={isLoading}
                    type='submit'
                    >
                        Register
                    </button>

                    {/* //TODO: add error message if reg fails */}

                    </div>
                  </div>      
            </form>
          </div>
        </div>
      </Container>
    
    )
  }





export default Register;
