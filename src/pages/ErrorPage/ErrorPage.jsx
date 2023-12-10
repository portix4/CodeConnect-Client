import './ErrorPage.css'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import error from '../../assets/404-error.png'

const ErrorPage = () => {

    return (
        <div className="ErrorPage">
            <Container>
                <Row>
                    <Col className='mt-5' md={6}>
                        <h1>Ups...</h1>
                        <h3>No hemos encontrado la página solicitada</h3>
                        <p>(Error 404)</p>
                        <Link to={'/'} className='btn btn-danger btn-lg'>Inicio</Link>
                    </Col>
                    <Col md={6}>
                        <img src={error} alt="Error 404" />
                    </Col>
                </Row>
            </Container>
        </div>
    )

}

export default ErrorPage