import { Container, Col, Row, Button, Modal } from "react-bootstrap"
import iconAdress from "../../assets/icon-compass.svg"
import iconEmail from "../../assets/icon-at-sign.svg"
import iconPhone from "../../assets/icon-phone.svg"
import iconRole from "../../assets/icon-tool.svg"
import iconDiscord from "../../assets/discord.svg"
import userIcon from "../../assets/icon-user2.svg"
import iconEdit from "../../assets/icon-edit.svg"
import iconThrash from "../../assets/icon-trash-2.svg"
import iconDescription from "../../assets/icon-file-text.svg"

import './UserProfileCard.css'
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/auth.context"
import { useContext } from "react"
import userService from "../../services/User.services"
import { useState } from "react"

const UserProfileCard = ({ _id, username, email, role, avatar, phoneNumber, idSkype, address, description }) => {

  const { loggedUser } = useContext(AuthContext)
  const { logout } = useContext(AuthContext)
  const navigate = useNavigate()

  const [showModal, setShowModal] = useState(false)

  const finalActions = () => {
    setShowModal(false)
  }

  const deleteUser = (e) => {

    if (e) e.preventDefault()

    userService
      .deleteUserById(_id)
      .then(() => {
        setShowModal(false)
        logout()
        navigate('/')
      })
      .catch(err => console.log(err))
  }

  return (
    <Container>
      <Row className="contentUser">
        <Col className="contentUserImg" >
          <img src={avatar === "" ? userIcon : avatar} alt="imageProfile" className="imageProfile" />
        </Col>
        <Col className="colInfo">
          <h1 className="nameProfile"> {username}</h1>
          <hr />
          <h4 className="mb-4 "><img src={iconEmail} alt="iconEmail" className="iconEmail" />   {email}</h4>
          <h4 className="mb-4"><img src={iconRole} alt="iconRole" className="iconRole" />  {role === 'TEACHER' ? 'Profesor' : role === 'STUDENT' ? 'Estudiante' : 'Administrador'}</h4>
          <h5 className="mb-4"><img src={iconPhone} className="iconPhone" />   {phoneNumber}</h5>
          <h5 className="mb-4"><img src={iconDiscord} className="iconDiscord" />   {idSkype} </h5>
          <h5 className="mb-4"><img src={iconAdress} className="iconAdress" /> {address.street}, {address.city}, {address.country} </h5>
          <h5 className="mb-5"><img src={iconDescription} className="iconDescription" /> {description} </h5>
          {
            (loggedUser?.role === 'ADMIN' || loggedUser?._id === _id) &&

            <Row>
              <Col>
                < Link to={"/perfil/editar"} className="editButton">
                  <img src={iconEdit} alt="iconEdit" className="iconEdit" />
                </Link>
              </Col>
              <Col>
                <Button type="submit" onClick={() => setShowModal(true)} className="deleteButton">
                  <img src={iconThrash} alt="iconTrash" className="iconTrash" />
                </Button>
              </Col>
              <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton className="headerDeleteModal">
                  <Modal.Title className="titleModalDeleteClass">¿Seguro que quieres eliminar tu perfil?</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bodyDeleteModal">
                  <Button className='deleteButtonModal' onClick={deleteUser}>Sí</Button>
                  <Button className='deleteButtonModal' onClick={finalActions}>No</Button>
                </Modal.Body>
              </Modal>
            </Row>
          }
        </Col >

      </Row >
    </Container >
  )
}

export default UserProfileCard