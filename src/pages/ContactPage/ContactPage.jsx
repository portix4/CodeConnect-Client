import "./ContactPage.css"
import { Row, Col, Container, Form } from "react-bootstrap"
import { Link } from "react-router-dom"
import icon from '../../assets/icon-send.svg'

const ContactPage = () => {


    return (
        <div>
            <Container className="contactContainer">
                <div>

                </div>
                <div>
                    <h1 className="titleContact">Contáctanos</h1>
                </div>
                <div>
                    <h2 className="sendMessage">Mándanos un mensaje</h2>
                </div>
                <div className="contactForm">
                    <Row className="mt-5">
                        <Col md={{ span: 6 }}>
                            <p>Tu nombre *</p>
                            <Form.Group className="">
                                <Form.Control className="contactControl" type="text" name="name" placeholder="Escribe tu nombre" />
                            </Form.Group>
                        </Col>
                        <Col md={{ span: 6 }}>
                            <p>Tu email *</p>
                            <Form.Group className="">
                                <Form.Control className="contactControl" type="text" name="email" placeholder="Escribe tu email" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col>
                            <p>Tu mensaje *</p>
                            <Form.Group className="">
                                <Form.Control className="contactControl" type="text" name="message" placeholder="Escribe tus necesidades" />
                            </Form.Group>
                        </Col>
                    </Row>
                </div>
                <div>
                    <Link className="formButton btn mb-5">Enviar mensaje <img src={icon} alt="" className="buttonImg" /></Link>
                </div>
            </Container>

        </div>
    )
}


export default ContactPage