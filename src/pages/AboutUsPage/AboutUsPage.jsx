import './AboutUsPage.css'
import { Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import linkedinIcon from '../../assets/iconLinkedin.png'

const AboutUs = () => {
    return (


        <Container className='text-center mt-5 AboutUsPage'>
            <h1>Sobre nosotros</h1>
            <Row>
                <Col className='mb-5' md={{ span: 8, offset: 2 }}>
                    <h6 className='mt-5  textAboutUs'>El equipo de programadores de Code Academy ha desarrollado una plataforma web de clases particulares para programadores. Su misión es proporcionar cursos personalizados y conexiones inteligentes entre estudiantes y tutores. Destacan por una interfaz pulida y un sistema de emparejamiento eficiente.</h6>
                </Col>
            </Row>
            <Row className='mt-5'>
                <Col>
                    <Link to={'https://www.linkedin.com/in/antonioiniher/'} className='linkedinLink'>
                        <img src={linkedinIcon} className='linkedinIcon' alt="linkedinIcon" />
                        <br />
                        <br />
                        Antonio Iñiguez
                    </Link>
                </Col>
                <Col>
                    <Link to={'https://www.linkedin.com/in/carlos-rodr%C3%ADguez-morales/'} className='linkedinLink'>
                        <img src={linkedinIcon} className='linkedinIcon' alt="linkedinIcon" />
                        <br />
                        <br />
                        Carlos Rodriguez
                    </Link>
                </Col>
                <Col>
                    <Link to={'https://www.linkedin.com/in/pablo-portillo-0a75a4a8/'} className='linkedinLink'>
                        <img src={linkedinIcon} className='linkedinIcon' alt="linkedinIcon" />
                        <br />
                        <br />
                        Pablo Portillo
                    </Link>
                </Col>
            </Row>
        </Container>

    )
}

export default AboutUs