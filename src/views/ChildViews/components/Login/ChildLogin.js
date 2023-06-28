import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Box } from '@mui/material'
import axios from 'axios'
import '../../styles/ChildLogin.css'
import {BiCheck} from "react-icons/bi"
import '../../styles/ChildLogin.css'
import background from '../../../../assets/background.jpg'
import { UserContext } from '../../../../common/providers/UserContext'
import { childDashboardPath } from '../../routes/ChildDashboardPath'


const ChildLogin = () => { 
  const [pin, setPin] = useState('')
  const [error, setError] = useState(null)
  const {setUser} = useContext(UserContext)
  const navigate = useNavigate()

  const handlePinClick = (num) => {
    if (pin.length < 4) {
      setPin((prevPin) => prevPin + num)
    }
  }

  const handleDeleteClick = () => {
    setPin((prevPin) => prevPin.slice(0, -1))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()


    try{
      if (pin.length === 4) {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVICE_ENDPOINT}/children/loginChild`,
        { childPin: pin }
      )
        const user = {
          pin: response.data.pin,
        }
        setPin('')
        setUser(user)
        navigate(childDashboardPath)
      }
    } catch (error) {
      setError('Log in failed. Try again.')
    } finally {
      console.log(pin)
    }
  }

 
  return (
    <>
      <div>
        <img src={background} alt='backgr' className='Background' />
      </div>
      <div className='ChildLogin'>
        <Container>
          <div className='CLTitleContainer'>
            <span className='CLTitle'>Enter your 4 digit pin to login</span>
          </div>
          <div className='PinContainer'>
            <div className='PinPad'>

              <form onSubmit={handleSubmit}>

              <div className='PinInput'>
                <Box sx={{fontSize: 35}}>{ pin }</Box>
              <div>
                <button onClick={() => handlePinClick(1)} className='PinButton'>1</button>
                <button onClick={() => handlePinClick(2)} className='PinButton'>2</button>
                <button onClick={() => handlePinClick(3)} className='PinButton'>3</button>
              </div>
              <div>
              <div>
                <button onClick={() => handlePinClick(4)} className='PinButton'>4</button>
                <button onClick={() => handlePinClick(5)} className='PinButton'>5</button>
                <button onClick={() => handlePinClick(6)} className='PinButton'>6</button>
              </div>
              <div>
                <button onClick={() => handlePinClick(7)} className='PinButton'>7</button>
                <button onClick={() => handlePinClick(8)} className='PinButton'>8</button>
                <button onClick={() => handlePinClick(9)} className='PinButton'>9</button>
              </div>
              <div className='lastRow'>
                <button onClick={handleDeleteClick} className='PinButton'> &lt; </button>
                <button onClick={() => handlePinClick(0)} className='PinButton'>0</button>
                <button onClick={handleSubmit} type='submit' className='PinButton'> {<BiCheck />} </button>
              </div>
          </div>
        </div>
            {error && <span>{error}</span>}
          </form>
        </div>
        </div>
        </Container>
        </div>
      </>
    )
}


export default ChildLogin;