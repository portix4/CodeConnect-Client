import { Container, Row, Col } from 'react-bootstrap'
import LoginForm from '../../components/LoginForm/LoginForm'
import "./LoginPage.css"
import iconLogin from '../../assets/icon-log-in.svg'

const LoginPage = () => {

    return (

        <Container className='loginContainer'>

            <Row>
                <Col>
                    <h1 className='loginTitle'>Login</h1>
                    <div>
                        <img src={iconLogin} alt="iconLogin" className="iconLogin" />
                    </div>
                    <Col md={{ offset: 4, span: 4 }}>
                        <hr />
                        <LoginForm />
                    </Col>
                </Col>
            </Row>

        </Container>
    )
}

export default LoginPage