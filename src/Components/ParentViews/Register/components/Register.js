import React, { useState } from 'react'
import '../styles/Register.css'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { Container } from '@mui/material'
import  { loginPath }  from '../../Login/routes/LoginRoute'
import { AuthAPI } from '../../../../common/API'

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
      const Authdata = Object.fromEntries(formData)
      if(hanldeValidate(Authdata)){
        return
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
             <div className=''>
             <input
                className='RegisterInput'
                type="text"
                name="name"
                placeholder="your name"
                onChange={(e) => {
                  setValidName(e.target.value === "" ? 'Please Enter Username' : '');
                }}
              />
              <p className=' text-[red]'>{validName}</p>
             </div>
             <div className=''>
              <input
                className='RegisterInput'
                type="text"
                name="email"
                placeholder="email"
                onChange={(e) => {
                  setValidEmail(e.target.value === "" ? 'Please Enter Email' : '');
                }}
              />
              <p className=' text-[red]'>{validEmail}</p>
             </div>
             <div className=''>
              <input
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