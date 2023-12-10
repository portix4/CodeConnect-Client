import "./HowItWorksPage.css"
import { Row, Col, Button, Container } from "react-bootstrap"


import terminal from "../../assets/icon-terminal.svg"
import riseUp from "../../assets/icon-trending-up.svg"

const HowItWorksPage = () => {


    return (
        <div className="allPageHowItWorks">
            <Container className="HowItWorksContainer">
                <Row className="row1">
                    <Col md={{ span: 6 }}>
                        <h1 className="titlePage">
                            CodeConnect
                        </h1>
                    </Col>
                </Row>
                <Row className="row2">
                    <Col md={{ span: 6, offset: 6 }}>
                        <p>
                            Ofrecemos mentores expertos en lenguajes como <span className="colorLanguages">JavaScript</span>,
                            <span className="colorLanguages"> Python</span>, <span className="colorLanguages">C++</span>, y
                            <span className="colorLanguages"> Java</span>, adecuados para todos los niveles.
                            Características Únicas: Busca y encuentra el profesor perfecto con filtros personalizados.
                            Interactúa, participa en sesiones y comparte en nuestra comunidad.
                        </p>
                    </Col>
                    <Col>
                        <img src={terminal} alt="terminalImg" className="terminalImg" />
                    </Col>
                </Row>
                <Row className="row3">
                    <Col md={{ span: 6 }}>
                        <p>
                            Amplia variedad de cursos para todos los niveles. Accede a una comunidad activa
                            y recibe soporte en tu viaje de aprendizaje.
                            En CodeConnect, impulsamos tus metas en tecnología.
                        </p>
                    </Col>
                    <Col>
                        <img src={riseUp} alt="riseUpImg" className="riseUpImg" />
                    </Col>
                </Row>
                <Row className="row4">
                    <p className="finalText" style={{ color: "#12F7D6" }}>
                        Inicia tu camino en programación con CodeConnect.
                    </p>
                </Row>

            </Container>

        </div >
    )
}


export default HowItWorksPage