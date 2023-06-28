import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
    const [user, setUserState] = useState({
        name: '',
        email: '',
        token: '',
        pin: ''
    })

    const setUser = ({ name, email, token, pin }) => {
        token && localStorage.setItem('userToken', token)
        setUserState({ name, email, token, pin })
    }

    useEffect(() => {
        async function validateToken() {
            if (localStorage.getItem('userToken')) {
                try {
                    const token = localStorage.getItem('userToken')
                    const response = await axios.get(
                        `${process.env.REACT_APP_SERVICE_ENDPOINT}/auth`,
                        {
                            headers: {
                                Authorization: `Bearer ${token}`,
                                'Content-Type': 'application/json'
                            }
                        }
                    )

                    if (response.data.user) {
                        const user = {
                            ...response.data.user,
                            token
                        }
                        setUser(user)
                    }
                } catch (error) {
                    if (error.response.status === 401) {
                    }
                }
            }
        }
        validateToken()
    }, [])

    // const logout = () => {
    //     setUser({
    //         username: '',
    //         email: '',
    //         token: ''
    //     })
    //     localStorage.clear()
    // }

    return (
        <UserContext.Provider value={{ user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}