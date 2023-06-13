import React from 'react'
import LoginButton from './LoginButton'
import GetStartedButton from './GetStartedButton'
import ChildLoginButton from './ChildLoginButton'
import '../styles/Landing.css'
import {Container, Typography, Box} from "@mui/material"


const Landing = () => {
  return (
    <Container className='bodyContainer' sx={{width: 'auto', height: '100vh' }}>
      <Box sx={{display: 'flex', pl: 30, pb: 2}}>
        <LoginButton />
      </Box>
      <div className='IntroContainer'>
        <Typography sx={{fontSize: 15, fontWeight: 'bold', letterSpacing: 1}}>Welcome to Calcifer</Typography>
        <div className='DescriptionContainer1'>
          <p className='Subtitle1'>A way to make chores more enjoyable</p>
          <p className='Subtitle2'>Calcifer is a simple and fun way to organize your household.
            Kids will be encouraged to complete daily household tasks, 
            while parents can reward them for their hard work!</p>
            <Box>
              <GetStartedButton />
            </Box>
    
        </div>
      </div>
      <Box sx={{display: 'flex', flexDirection: 'column', pt: 4, pl: 20, textAlign:'center'}}>
        
        <Typography sx={{fontSize: 14, fontWeight: 'bold'}}>Easily Complete Daily Chores</Typography>
        <span className='LandingDescription'>{`The simple design makes it wasy for children to let their parents know when they 
          have completed their chores!`}
        </span>
      </Box>
      <Box sx={{display: 'flex', flexDirection: 'column', pt: 4, pr: 20, textAlign:'center'}}>
        <Typography sx={{fontSize: 14, fontWeight: 'bold'}}> Mobile Friendly </Typography>
        <span className='LandingDescription'>
          {`This application can be used on any mobile device.
          Parents can connect their own device and share, or have
          your child use their own!`}
        </span>
      </Box>
      <Box sx={{display: 'flex', pt: 2, justifyContent:'center'}}>
          <ChildLoginButton />
      </Box>  
    </Container>
  )
}



export default Landing;