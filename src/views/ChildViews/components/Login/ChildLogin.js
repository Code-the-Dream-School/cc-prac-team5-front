import React from 'react'
import '../../styles/ChildLogin.css'
import PinPad from '../PinPad/PinPad'
import background from '../../../../assets/background.jpg'
import { Container} from '@mui/material'
import '../../styles/ChildLogin.css'
// import axios from 'axios'
// import { UserContext } from '../../../../common/providers/UserContext'

const ChildLogin = () => { 
  // const [pin, setPin] = useState
  // const [isLoading, setIsLoading] = useState(false)
  // const navigate = useNavigate()
  // const { setUser } = useContext(UserContext)
  // const [error, setError] = useState(null)

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   setIsLoading(true)

    // const data = new FormData(e.currentTarget)
    // const pin = data.get('PIN')
    

    // try {
    //     const response = await axios.post(
    //         `${process.env.REACT_APP_SERVICE_ENDPOINT}/auth/child-login`,
    //         { pin }
    //     )

    //     if (response.data.user) {
    //         const user = {
    //             pin: response.data.user.pin,
    //         }
    //         setUser(user)
            // navigate(childDashboard)
//         }
//     } catch (err) {
//         setError('Login unsuccessful')
//     } finally {
//         setIsLoading(false)
//     }
// }
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
      <PinPad />
      </div>
    </Container>
    </div>
    </>
  )
}



export default ChildLogin;