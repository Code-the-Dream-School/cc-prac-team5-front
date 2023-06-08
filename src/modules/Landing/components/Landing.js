import React from 'react'
import SigninButton from './SigninButton'
import GetStartedButton from './GetStartedButton'
import ChildLoginButton from './ChildLoginButton'
import '../styles/Landing.css'
import {Container, Typography, Box} from "@mui/material"

const Landing = () => {
  return (
    <Container>
      <Box sx={{display: 'flex', pl: 30, pb: 2}}>
        <SigninButton />
      </Box>
      <Box className='wave'>
      <Typography>Welcome to Calcifer</Typography>
      <div>
        <p>
          A way to make chores more enjoyable</p>
        <div>
          <p>Calcifer is a simple and fun way to organize your household.
            Kids will be encouraged to complete daily household tasks, 
            while parents can reward them for their hard work!</p>
            <Box>
            <GetStartedButton />
            </Box>
        </div>
        </div>
      </Box>
      <div className='info'>
        <Typography variant='body2'>Easily Complete Daily Chores</Typography>
        <p>The simple design makes it wasy for children to let their parents know when they 
          have completed their chores!
        </p>
      </div>
      <div className='info'>
        <Typography variant='body2'> Mobile Friendly </Typography>
        <p>
          This application can be used on any mobile device.
          Parents can connect their own device and share, or have
          your child use their own!
        </p>
      </div>
      <Box sx={{display: 'flex', pl: 15, py: 3}}>
          <ChildLoginButton />
        </Box>  
    </Container>
  )
}



export default Landing;