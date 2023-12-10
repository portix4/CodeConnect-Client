import { createContext, useEffect, useState } from "react"
import authService from './../services/Auth.services'
import { useNavigate } from "react-router-dom"

const AuthContext = createContext()

function AuthProviderWrapper(props) {

    const [loggedUser, setLoggedUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const authenticateUser = () => {

        const token = localStorage.getItem('authToken')

        token && authService
            .verify(token)
            .then(({ data }) => {
                setLoggedUser(data.loggedUser)
                setIsLoading(false)
            })
            .catch(err => {
                setIsLoading(false)
            })
    }

    useEffect(() => {

        authenticateUser()

    }, [])

    const logout = () => {

        localStorage.removeItem('authToken')
        setLoggedUser(null)
        setIsLoading(false)
    }

    return (

        <AuthContext.Provider value={{ loggedUser, authenticateUser, logout, isLoading }}>
            {props.children}
        </AuthContext.Provider>

    )
}

export { AuthContext, AuthProviderWrapper }