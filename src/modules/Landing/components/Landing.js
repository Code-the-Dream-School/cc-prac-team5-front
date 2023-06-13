import React from 'react'
import LoginButton from './LoginButton'
import GetStartedButton from './GetStartedButton'
import ChildLoginButton from './ChildLoginButton'
import '../styles/Landing.css'
import { Typography, Box} from "@mui/material"
import Footer from './Footer'
import background from '../../../assets/background.jpg'


const Landing = () => {
  return (
    <div className='bodyContainer'>
      <img src={background} alt='backgr' />
      <Box sx={{display: 'flex', pl: 35, pt: 2}}>
        <LoginButton />
      </Box>
      <div className='IntroContainer'>
        <Box sx={{ fontSize: 25, fontWeight: 'bold', letterSpacing: 5, color: 'black'}}>
          Calcifer
        </Box>
        <div className='DescriptionContainer1'>
          <p className='Subtitle1'>A way to make chores more enjoyable</p>
          <p className='Subtitle2'>Calcifer is a simple and fun way to organize your household.
            Kids will be encouraged to complete daily household tasks, 
            while parents can reward them for their hard work!</p>
        </div>
            <Box>
              <GetStartedButton />
            </Box>
    
       
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
      <Footer />
    </div>
  )
}



export default Landing;