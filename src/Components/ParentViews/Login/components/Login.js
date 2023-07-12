import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { Box, Container} from '@mui/material'
import { toast } from 'react-toastify';
import '../styles/Login.css'
import { AuthAPI } from '../../../../common/API'

const  Login = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [validEmail, setValidEmail] = useState('')
  const [validPwd, setValidPwd] = useState('')

  const hanldeValidate = (email, password) => {
    let valid = false
    if (email === "") {
      setValidEmail('Please Enter Email')
        valid = true;
    }
    if (password === '') {
        setValidPwd('Please Enter Password')
        valid = true;
    }
    return valid;
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const Authdata = new FormData(e.currentTarget)
    const email = Authdata.get('email')
    const password = Authdata.get('password')
    if(hanldeValidate(email, password)){
      return
    }
    try{
      setIsLoading(true)

      const data = {
        method:'POST',
        data: {
          email: email, 
          password:password
        }
      }
      const response = await AuthAPI('/parents/login', data)
      if (response.status === 'success') {
          localStorage.setItem('token', response.token)
          navigate('/parentdashboard')
          toast.success('Login successfully')
      } else {
        toast.error('Incorrect email or password')
        setIsLoading(false)
      }
    }catch(error){
      toast.error('Login unsuccessfull')
      setIsLoading(false)
    }
  }
  
  return (
    <Container>
      <div className='Login'>
        <Box sx={{fontWeight: 'bold',  fontSize: 25, letterSpacing: 2, display: 'flex', justifyContent: 'center'}}>
          Welcome Back
        </Box>
        <Box sx={{fontSize: 18, pb: 2,  letterSpacing: 2, display: 'flex', justifyContent: 'center'}}>
          Please login to continue.
        </Box>
        <div className='FormBox'>
          <form onSubmit={handleSubmit}>
            <div className='login-Input'>
                <input
                    className='Login-Input'
                    type="text"
                    name="email"
                    placeholder="email"
                    onChange={(e) => {
                      setValidEmail(e.target.value === "" ? 'Please Enter Email' : '');
                    }}
                />
                <p className='text-start text-[red]'>{validEmail}</p>
                <input
                    className='Login-Input'
                    type="password"
                    name="password"
                    placeholder="password"
                    onChange={(e) => {
                      setValidPwd(e.target.value === "" ? 'Please Enter Password' : '');
                    }}
                />
                <p className='text-start text-[red]'>{validPwd}</p>
                <div className='ButtonContainer'>
                  <button className='LoginButton my-3' disabled={isLoading}>
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
        <span className='SubtitleLinks mt-4 flex justify-center'>
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