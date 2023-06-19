import { Box, Container} from '@mui/material'
import React, { useState, useContext } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import '../../../styles/Login.css'
import {landingPath} from '../../../../../../modules/Landing/routes/LandingRoute'
import {UserContext} from '../../../../../../common/providers/UserContext'


const  Login = () => {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const { setUser } = useContext(UserContext)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    const data = new FormData(e.currentTarget)
    const email = data.get('email')
    const password = data.get('password')

    try {
        const response = await axios.post(
            `${process.env.REACT_APP_SERVICE_ENDPOINT}/auth/login`,
            { email, password }
        )

        if (response.data.user) {
            const user = {
                name: response.data.user.name,
                email: response.data.user.email,
                token: response.data.user.token
            }
            setUser(user)
            navigate(landingPath)
        }
    } catch (err) {
        setError('Login unsuccessful')
    } finally {
        setIsLoading(false)
    }
}
  
  return (
    <Container>
      <div className='Login'>
        <Box sx={{fontWeight: 'bold',  fontSize: 25, letterSpacing: 2}}>
          Welcome Back
        </Box>
        <Box sx={{fontSize: 18, pb: 2,  letterSpacing: 1}}>
          Please login to continue.
        </Box>
        <div className='FormBox'>
          <form onSubmit={handleSubmit}>
            <div className='Input1'>
                <input
                    className='LoginInput'
                    type="text"
                    name="email"
                    placeholder="email"
                    required
                />
                <input
                    className='LoginInput'
                    type="password"
                    name="password"
                    placeholder="password"
                    required
                />
                {error && <span>{error}</span>}

                <div className='ButtonContainer'>
                  <button className='LoginButton' disabled={isLoading}>
                    <span>{isLoading ? 'Loading...' : 'Login'}</span>
                  </button>
                  </div>
                    <span className='SubtitleLinks'>
                      {/* <Link to='/forgotpassword'></Link> */}
                      {`Forgot password?`}
                    </span>
                </div>      
          </form>
        </div>
      <Box>
        <span className='SubtitleLinks'>
          {`Don't have an account?`} 
          <Link to="/register" className='SignUp'>
            Sign up
          </Link>
        </span>
      </Box>
      </div>
    </Container>
  
  )
}



export default Login;