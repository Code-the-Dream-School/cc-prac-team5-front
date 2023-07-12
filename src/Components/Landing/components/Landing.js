import React from 'react'
import LoginButton from './LoginButton'
import GetStartedButton from './GetStartedButton'
import ChildLoginButton from './ChildLoginButton'
import '../styles/Landing.css'
import { Typography, Box} from "@mui/material"
import Footer from './Footer'
import background from '../../../assets/background.jpg'
// import checklist from '../../../assets/checklist.png'
// import mobile from '../../../assets/mobile.png'

    const Landing = () => {
      return (
        <div className='bodyContainer'>
          <img src={background} alt='backgr' className='Background' />
          <Box sx={{display: 'flex', justifyContent:'right', pt: 2 }}>
            <LoginButton />
          </Box>
          <div className='IntroContainer'>
            <Box sx={{  display: 'flex', justifyContent:'center' ,fontSize: 45, fontWeight: 'bold', letterSpacing: 4, color: 'white', pt: 2}}>
              Calcifer
            </Box>
            <Box sx={{display: 'flex', justifyContent:'center', pt: .5, pl:'.5em', fontWeight: 'bold'}}>
            <p className='Subtitle1'>A way to make chores more enjoyable</p>
            </Box>
            <div className='DescriptionContainer2'>
              <p className='Subtitle2'>Calcifer is a simple and fun way to organize your household.
                Kids will be encouraged to complete daily household tasks, 
                while parents can reward them for their hard work!</p>
               
                {/* <div className='IntroImgContainer'>
                  <img src={kids} alt='kids' className='Kids' />
                </div> */}
            </div>
            <Box sx={{display: 'flex', justifyContent:'center'}} className='GetStartedButton'>
                  <GetStartedButton />
            </Box> 
          </div>
          <Box sx={{display: 'flex', flexDirection: 'row', justifyContent:'center', pt: 2, pl: 1, textAlign:'center', margin: 1}}>
            {/* <div className='ImageContainer'>
              <img src={checklist} alt='checklist' className='Checklist'/>
            </div> */}
            <Box sx={{display: 'flex', flexDirection:'column', justifyContent:'center', pt: 2 }}>
              <Typography sx={{fontSize: 24, fontWeight: 'bold'}}>Easily Complete Daily Chores</Typography>
              <span className='LandingDescription'>
                {`The simple design makes it easy for children to let their parents know when they 
                have completed their chores!`}
              </span>
          </Box>
          </Box>
          <Box sx={{display: 'flex', flexDirection: 'row',justifyContent:'center', pt: 2, pr: 1, pb: 2, margin: 1, textAlign: 'center'}}>
            <Box sx={{display: 'flex', flexDirection:'column' }}>
              <Typography sx={{fontSize: 24, fontWeight: 'bold'}}> Mobile Friendly </Typography>
              <span className='LandingDescription'>
                {`Calcifer works on any mobile device with wifi. Parents can connect their own device and share, or have
                your child use their own!`}
              </span>
          </Box>
          {/* <div className='ImageContainer2'>
              <img src={mobile} alt='mobile' className='Mobile'/>
          </div> */}
          </Box>
          <Box sx={{display: 'flex', pt: 1,pb: 5, justifyContent:'center'}}>
              <ChildLoginButton />
          </Box> 
          <Footer />
        </div>
      )
    }

export default Landing;