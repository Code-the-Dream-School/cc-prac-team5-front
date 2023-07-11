<<<<<<< HEAD:src/views/ParentViews/Register/components/Register.js
import React, { useState } from 'react'
import '../styles/Register.css'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { Container } from '@mui/material'
import  { loginPath }  from '../../Login/routes/LoginRoute'
import { AuthAPI } from '../../../../common/API'
=======
import React, { useState, useContext } from 'react'
import '../styles/Register.css'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../../../common/providers/UserContext'
import axios from 'axios'
import { Container } from '@mui/material'
import { loginPath } from '../../Login/routes/LoginRoute'
>>>>>>> 821081e03e339efbb2e749aa00a8be96d91a6503:src/Components/ParentViews/Register/components/Register.js

const Register = () => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [validName, setValidName] = useState('')
    const [validEmail, setValidEmail] = useState('')
    const [validPwd, setValidPwd] = useState('')
    
    const hanldeValidate = (value) => {
      let valid = false
      if (value.name === "") {
        setValidName('Please Enter Username')
        valid = true;
      }
      if (value.email === "") {
        setValidEmail('Please Enter Email')
          valid = true;
      }
      if (value.password === '') {
          setValidPwd('Please Enter Password')
          valid = true;
      }
      return valid;
  }
  
    const handleSubmit = async (e) => {
      e.preventDefault()

      const formData = new FormData(e.target)
<<<<<<< HEAD:src/views/ParentViews/Register/components/Register.js
      const Authdata = Object.fromEntries(formData)
      if(hanldeValidate(Authdata)){
        return
=======
      const data = Object.fromEntries(formData)

      setIsLoading(true)
      try{
        const response = await axios.post(
          //TODO Check for auth endpoints
          `${process.env.REACT_APP_SERVICE_ENDPOINT}/parents/register`,
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
>>>>>>> 821081e03e339efbb2e749aa00a8be96d91a6503:src/Components/ParentViews/Register/components/Register.js
      }
        setIsLoading(true)
        try{
          const data = {
            method:'POST',
            data: Authdata
          }
          const response = await AuthAPI('/parents/register', data)
          if(response.token) {
            navigate(loginPath)
            toast.success('Registration successfully')
          }
        } catch (error) {
          toast.error('Registration unsuccessfull')
          setIsLoading(false)
        }
      
    }
    return (
      <Container>
        <div className='Register'>
          <div className='RegisterTitle'>
            <div className='backButtonContainer'>
              {/* <button className='backButton'>
                <Link to='/' className='backLink'>
                  {<IoIosArrowBack size={'25px'}/>}
                </Link>
              </button> */}
          </div>
            <span className='CreateAccount'>Create Account</span>
          </div>
          <div className='RegisterFormBox'>
            <form onSubmit={handleSubmit}>
            <div className='Input1'>
<<<<<<< HEAD:src/views/ParentViews/Register/components/Register.js
             <div className=''>
             <input
                className='RegisterInput'
                type="text"
                name="name"
                placeholder="your name"
                onChange={(e) => {
                  setValidName(e.target.value === "" ? 'Please Enter Username' : '');
                }}
=======
              <input
              className='RegisterInput'
              type="text"
              name="name"
              placeholder="your name"
              required
>>>>>>> 821081e03e339efbb2e749aa00a8be96d91a6503:src/Components/ParentViews/Register/components/Register.js
              />
              <p className=' text-[red]'>{validName}</p>
             </div>
             <div className=''>
              <input
<<<<<<< HEAD:src/views/ParentViews/Register/components/Register.js
                className='RegisterInput'
                type="text"
                name="email"
                placeholder="email"
                onChange={(e) => {
                  setValidEmail(e.target.value === "" ? 'Please Enter Email' : '');
                }}
=======
              className='RegisterInput'
              type="text"
              name="email"
              placeholder="email"
              required
>>>>>>> 821081e03e339efbb2e749aa00a8be96d91a6503:src/Components/ParentViews/Register/components/Register.js
              />
              <p className=' text-[red]'>{validEmail}</p>
             </div>
             <div className=''>
              <input
<<<<<<< HEAD:src/views/ParentViews/Register/components/Register.js
                className='RegisterInput '
                type="password"
                name="password"
                placeholder="password"
                onChange={(e) => {
                  setValidPwd(e.target.value === "" ? 'Please Enter Password' : '');
                }}
              />
              <p className=' text-[red]'>{validPwd}</p>
             </div>
              <div className='ButtonContainer'>
                <button 
                  className='RegisterButton my-3'
                  disabled={isLoading}
                  type='submit'
=======
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
>>>>>>> 821081e03e339efbb2e749aa00a8be96d91a6503:src/Components/ParentViews/Register/components/Register.js
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
