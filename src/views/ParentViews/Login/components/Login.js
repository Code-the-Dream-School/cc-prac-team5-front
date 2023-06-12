import { Box, Container} from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Login.css'

const  Login = () => {
  // const [isLoading, setIsLoading] = useState(false)
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
          <form>
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
                <div className='ButtonContainer'>
                  <button className='LoginButton'>
                      Login
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
          <Link to="/registration" className='SignUp'>
            Sign up
          </Link>
        </span>
      </Box>
      </div>
    </Container>
  
  )
}



export default Login;