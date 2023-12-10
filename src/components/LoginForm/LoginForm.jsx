import { useContext, useState } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import authService from "../../services/Auth.services"
import { useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/auth.context"
import FormError from "../FormError/FormError"
import icon from '../../assets/icon-send.svg'
import "./LoginForm.css"

const LoginForm = () => {

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState([])

    const location = useLocation()
    const navigate = useNavigate()

    const { authenticateUser } = useContext(AuthContext)

    const handleInputChange = e => {
        const { value, name } = e.target
        setLoginData({ ...loginData, [name]: value })
    }

    const handleSubmit = e => {

        e.preventDefault()

        authService
            .login(loginData)
            .then(({ data }) => {
                localStorage.setItem('authToken', data.authToken)
                authenticateUser()
                navigate(-1)
            })
            .catch(err => setErrors(err.response.data.errorMessages))

    }

    return (
        <div className="loginForm">
            <Form onSubmit={handleSubmit} autoComplete="off">
                <div className="emailRow">
                    <Form.Group className="mb-3 emailText" controlId="email">
                        <Form.Label >Email</Form.Label>
                        <Form.Control className="loginControl" type="email" value={loginData.email} onChange={handleInputChange} name="email" />
                    </Form.Group>
                </div>
                <div className="passwordRow">
                    <Form.Group className="mb-3 passwordText" controlId="password">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control className="loginControl" type="password" value={loginData.password} onChange={handleInputChange} name="password" />
                    </Form.Group>
                </div>
                <div className="buttonLogin">
                    <div>
                        {errors.length > 0 && (
                            <FormError>
                                <ul>
                                    {errors.map((error, index) => (
                                        <li key={index}>{error}</li>
                                    ))}
                                </ul>
                            </FormError>
                        )}
                    </div>
                    <div className="loginButtonx">
                        <Button className="formButton btn mt-3" type="submit"> Entrar <img src={icon} alt="loginButton" /></Button>

                    </div>
                </div>
            </Form>
        </div >
    )
}

export default LoginForm