import "./DetailsClassPage.css"
import { Container, Col, Row, Button, Modal, Form } from "react-bootstrap"
import classService from "../../services/Class.services"
import { useNavigate, useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import Loader from "../../components/Loader/Loader"
import { AuthContext } from "../../contexts/auth.context"
import { Link } from "react-router-dom"
import loginIcon from "../../assets/icon-log-in.svg"
import iconTerminal from "../../assets/icon-terminal.svg"



const DetailsClassPage = () => {

  const { class_id } = useParams()
  const { loggedUser } = useContext(AuthContext)
  const [classes, setClasses] = useState()
  const [date, setDate] = useState()
  const [showModal, setShowModal] = useState(false)

  const finalActions = () => {
    setShowModal(false)
  }

  useEffect(() => {
    loadClassDetails()
  }, [])

  const navigate = useNavigate()


  const loadClassDetails = () => {
    classService
      .getOneClass(class_id)
      .then(({ data }) => {
        setClasses(data)
      })
      .catch(err => console.log(err))
  }

  const handleClassRequest = (e) => {

    e.preventDefault()

    classService
      .putClassRequest(loggedUser._id, class_id, date)
      .then(() => navigate('/perfil'))
      .catch(error => console.log(error))
  }

  const handleDateChange = (e) => {

    e.preventDefault()
    const { value } = e.currentTarget
    setDate(value)

  }

  return (
    classes ?
      <div className="DetailsClassPage">
        <Container>
          <Row className="titleDetails">
            <h1>{classes.title}</h1>
            <hr />
            <h3>{classes.owner?.username}</h3>
          </Row>
          <Row>
            <img src={iconTerminal} alt="iconCloud" className="iconCloud" />
            <Col md={{ span: 4, offset: 1 }}>
              <h2 className="descriptionTitle">Descripción </h2>

              <p className="descriptionText">{classes.description}</p>
            </Col>
            <Col md={{ span: 3, offset: 2 }} className="languagesCol">
              <p className="languagesName">Languages</p>
              {
                classes.languages?.map((e, i) => <p key={i}>{e}</p>)
              }
            </Col>
          </Row>
          <Row>
            {
              loggedUser?.role === 'STUDENT'
                ?
                <Button className="loginButton" onClick={() => setShowModal(true)}>Solicitar clase</Button>
                :
                (loggedUser?.role === 'TEACHER' || loggedUser?.role === 'ADMIN')
                  ?
                  <></>
                  :
                  <Link to={'/inicio-sesion'} className='loginButton'> Logueate <img src={loginIcon} alt="loginIcon" /></Link>
            }
          </Row>

          <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton className="headerRequestClass">
              <Modal.Title className="titleModalRequestClass">Elige la fecha para la clase</Modal.Title>
            </Modal.Header>
            <Modal.Body className="bodyRequestModalClass">
              <Form.Group className="mb-3" controlId="date">
                <Form.Label for="fecha-hora" className="formLabelRequestModalClass">Selecciona Fecha y Hora:</Form.Label>
                <Form.Control type="datetime-local" id="date" name="date" value={date} className="classControl formControlRequestModalClass" onChange={(e) => handleDateChange(e)} />
              </Form.Group>
              <Button className='requestButtonModal' onClick={(e) => handleClassRequest(e)}>Solicitar</Button>
              <Button className='requestButtonModal' onClick={finalActions}>No</Button>
            </Modal.Body>
          </Modal>

        </Container>
      </div>
      :
      <Loader />
  )
}

export default DetailsClassPage