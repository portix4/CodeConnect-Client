import "./HomePage.css"
import { useState } from "react"
import { Row, Col, Container } from "react-bootstrap"
import SearchBar from "../../components/SearchBar/SearchBar"
import SearchResultsClassesList from "../../components/SearchResultsClassesList/SearchResultsClassesList"
import vector1 from "../../assets/Vector.svg"
import vector2 from "../../assets/Vector-1.svg"
import arrow from "../../assets/arrow.svg"
import htmlText from "../../assets/HTML.svg"
import iconHtml from "../../assets/Icon.svg"
import iconCSS from "../../assets/IconCSS.svg"
import cssText from "../../assets/CSS.svg"
import iconJS from "../../assets/Iconjs.svg"
import jsText from "../../assets/JS.svg"
import reactText from "../../assets/REACT.svg"
import iconReact from "../../assets/IconReact.svg"
import mouse from "../../assets/icon-mouse.svg"
import book from "../../assets/icon-book.svg"
import thumbUp from "../../assets/icon-thumbs-down.svg"
import thumbDown from "../../assets/icon-thumbs-up.svg"
import homeImage1 from "../../assets/homeImage1.png"
import homeImage2 from "../../assets/homeImage2.png"


const HomePage = () => {

    const [results, setResults] = useState([])

    return (
        <div className="allHomePage">
            <Container>
                <Row className="rowHomePage">
                    <Col md={{ span: 6 }}>
                        <h1 className="teacherTextHomePage">Encuentra a los mejores profesores en programación</h1>
                    </Col>
                    <Col md={{ span: 3 }} className="imgTeacherHomePage">
                        <img className="homeImage1" src={homeImage1} alt="homeImage1" />
                    </Col>
                    <Col md={{ span: 3 }} className="imgTeacherHomePage">
                        <img className="homeImage2" src={homeImage2} alt="homeImage2" />
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 4, offset: 4 }} className="text-center mt-5 mb-5 searchBarHomePage">
                        <SearchBar setResults={setResults} />
                        <SearchResultsClassesList to={'/clases'} results={results} />
                    </Col>
                </Row>
                <Row>
                    <h4 className="demandHomePage">En los lenguajes más demandados</h4>
                </Row>
                <Row className="languagesHomePage">
                    <div className="htmlLanguage">
                        <img src={htmlText} alt="htmlText" className="htmlIcon" />
                    </div>
                    <div className="htmlLanguageIcon">
                        <img src={iconHtml} alt="htmlImg" className="htmlImg" />
                    </div>
                    <div className="cssLanguage">
                        <img src={cssText} alt="cssText" className="cssIcon" />
                    </div>
                    <div className="cssLanguageIcon">
                        <img src={iconCSS} alt="cssImg" className="cssImg" />
                    </div>
                    <div className="jsLanguage">
                        <img src={jsText} alt="jsText" className="jsIcon" />
                    </div>
                    <div className="jsLanguageIcon">
                        <img src={iconJS} alt="jsImg" className="jsImg" />
                    </div>
                    <div className="reactLanguage">
                        <img src={reactText} alt="reactText" className="reactIcon" />
                    </div>
                    <div className="reactLanguageIcon">
                        <img src={iconReact} alt="reactImg" className="reactImg" />
                    </div>
                </Row>
                <Row>
                    <Col md={{ span: 6 }}>
                        <h2 className="newFormOfLearning">Una nueva forma de aprender en el mundo digital</h2>
                    </Col>
                </Row>
                <Row className="rowSearch">
                    <Col className="mouseGeneral">
                        <img src={vector1} alt="vector" className="mouse1" />
                        <img src={vector2} alt="vector2" className="mouse2" />
                        <img src={arrow} alt="arrow" className="arrowMouse" />
                    </Col>
                    <Col md={{ span: 4, offset: 8 }}>
                        <h4>1. Busca</h4>
                        <p>Encuentra cursos y tutores en programación ajustados a tus necesidades y nivel de habilidad.</p>
                    </Col>
                </Row>
                <Row className="rowChoose">
                    <Col md={{ span: 4, offset: 1 }}>
                        <h4>2. Elige</h4>
                        <p>
                            Selecciona tu instructor ideal basado en calificaciones y especialización.
                        </p>
                    </Col>
                    <Col>
                        <img src={mouse} alt="tick" className="tickImg" />
                    </Col>
                </Row>
                <Row className="rowLearn">
                    <Col md={{ span: 4, offset: 8 }}>
                        <h4>3. Aprende</h4>
                        <p>
                            Asiste a clases interactivas y mejora tus habilidades de programación con proyectos prácticos.
                        </p>
                    </Col>
                    <Col>
                        <img src={book} alt="tick" className="bookImg" />
                    </Col>
                </Row>
                <Row className="rowRate">
                    <Col md={{ span: 4, offset: 1 }}>
                        <h4>4. Valora</h4>
                        <p>
                            Evalúa tus sesiones para mejorar la experiencia y orientar a futuros estudiantes.
                        </p>
                    </Col>
                    <Col>
                        <img src={thumbUp} alt="tick" className="thumbUp" />
                        <img src={thumbDown} alt="tick" className="thumbDown" />
                    </Col>
                </Row>
            </Container>

        </div >
    )
}


export default HomePage