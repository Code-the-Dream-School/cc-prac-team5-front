// import React from 'react'
// import PropTypes from 'prop-types'
// import axios from 'axios'

// const UserContext = createContext({})

// const UserProvider = ({children}) => {
//     const [user, setUserState] = useState({
//         name: '',
//         email: '',
//         token: ''

//     })
//     const setUser = ({ name, email, token }) => {
//         token && localStorage.setItem('userToken', token)
//         setUserState({ name, email, token })
//     }
//     useEffect(() => {
//         async function validateToken() {
//             if (localStorage.getItem('userToken')) {
//                 try {
//                     const token = localStorage.getItem('userToken')
//                     const response = await axios.get(
//                         `${process.env.REACT_APP_SERVICE_ENDPOINT}/auth`,
//                         {
//                             headers: {
//                                 Authorization: `Bearer ${token}`,
//                                 'Content-Type': 'application/json'
//                             }
//                         }
//                     )

//                     if (response.data.user) {
//                         const user = {
//                             ...response.data.user,
//                             token
//                         }
//                         setUser(user)
//                     }
//                 } catch (error) {
//                     if (error.response.status === 401) {
//                         logout()
//                     }
//                 }
//             }
//         }
//         validateToken()
//     }, [])

//     const logout = () => {
//         setUser({
//             name: '',
//             email: '',
//             token: ''
//         })
//         localStorage.clear()
//     }

//     return (
//         <UserContext.Provider value={{ user, setUser, logout }}>
//             {children}
//         </UserContext.Provider>
//     )
// }

// UserProvider.propTypes = {
//     children: PropTypes.object
// }

