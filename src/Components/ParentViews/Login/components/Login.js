import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
<<<<<<< HEAD:src/views/ParentViews/Login/components/Login/Login.js
import { Box, Container} from '@mui/material'
import { toast } from 'react-toastify';
import '../../styles/Login.css'
import { AuthAPI } from '../../../../../common/API'
=======
import axios from 'axios'
import '../styles/Login.css'
import {landingPath} from '../../../Landing/routes/LandingRoute'
import {UserContext} from '../../../../common/providers/UserContext'
>>>>>>> 821081e03e339efbb2e749aa00a8be96d91a6503:src/Components/ParentViews/Login/components/Login.js

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
<<<<<<< HEAD:src/views/ParentViews/Login/components/Login/Login.js
    const Authdata = new FormData(e.currentTarget)
    const email = Authdata.get('email')
    const password = Authdata.get('password')
    if(hanldeValidate(email, password)){
      return
=======
    setIsLoading(true)

    const data = new FormData(e.currentTarget)
    const email = data.get('email')
    const password = data.get('password')

    try {
        const response = await axios.post(
            `${process.env.REACT_APP_SERVICE_ENDPOINT}/parents/login`,
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
>>>>>>> 821081e03e339efbb2e749aa00a8be96d91a6503:src/Components/ParentViews/Login/components/Login.js
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
        <Box sx={{fontWeight: 'bold',  fontSize: 25, letterSpacing: 2}}>
          Welcome Back
        </Box>
        <Box sx={{fontSize: 18, pb: 2,  letterSpacing: 1}}>
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