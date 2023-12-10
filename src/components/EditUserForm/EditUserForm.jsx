import { useNavigate } from "react-router-dom"
import { Form, Button, Row, Col, FormSelect } from "react-bootstrap"
import Loader from "../Loader/Loader"
import { AuthContext } from "../../contexts/auth.context"
import { useContext, useState, useEffect } from "react"
import userService from "../../services/User.services"
import uploadServices from "../../services/Upload.services"
import "./EditUserForm.css"


const EditUserProfile = () => {

  const { loggedUser } = useContext(AuthContext)
  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    loadUser()
  }, [])

  const loadUser = () => {
    userService
      .profile(loggedUser._id)
      .then(({ data }) => {
        setUser(data)
      })
      .catch(err => console.log(err))
  }

  const handleInputChange = e => {
    const { value, name } = e.currentTarget
    setUser({ ...user, [name]: value })
  }

  const handleAddressChange = e => {
    const { value, name } = e.currentTarget
    setUser({ ...user, address: { ...user.address, [name]: value, } })
  }

  const handleFileUpload = e => {

    setIsLoading(true)

    const formData = new FormData()
    formData.append('imageData', e.target.files[0])

    uploadServices
      .uploadimage(formData)
      .then(res => {
        setUser({ ...user, avatar: res.data.cloudinary_url })
        setIsLoading(false)
      })
      .catch(err => {
        setIsLoading(false)
      })
  }

  const handleUserSubmit = e => {

    e.preventDefault()

    userService
      .editUserById(user._id, user)
      .then(() => navigate('/perfil'))
      .catch(err => setErrors(err.response.data.errorMessages))
  }

  return (
    user
      ?
      <div className="EditUserForm">

        <Form onSubmit={handleUserSubmit} autoComplete="off">
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" value={user.username} name="username" onChange={handleInputChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" value={user.email} name="email" onChange={handleInputChange} className="editUserFormControl" />
          </Form.Group>

          <Row>

            <Col>
              <Form.Group className="mb-3" controlId="street">
                <Form.Label>Calle</Form.Label>
                <Form.Control type="text" value={user.address?.street} name="street" onChange={handleAddressChange} className="editUserFormControl" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="city">
                <Form.Label>Ciudad</Form.Label>
                <Form.Control type="text" value={user.address?.city} name="city" onChange={handleAddressChange} className="editUserFormControl" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="country">
                <Form.Label>Pais</Form.Label>
                <Form.Control type="text" value={user.address?.country} name="country" onChange={handleAddressChange} className="editUserFormControl" />
              </Form.Group>
            </Col>

          </Row>

          <p className="text-center avatarP">Avatar</p>

          <Form.Group className="mb-3 avatarText" controlId="avatar">
            <Form.Control className="buttonAvatar d-none" type="file" id="fileInput" onChange={handleFileUpload} />
            <label htmlFor="fileInput" className="buttonAvatar"> Subir archivo</label>
          </Form.Group>

          <Row>

            <Col>
              <Form.Group className="mb-3" controlId="phoneNumber">
                <Form.Label>Teléfono de contacto</Form.Label>
                <Form.Control type="number" value={user.phoneNumber} name="phoneNumber" onChange={handleInputChange} className="editUserFormControl" />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-3" controlId="idSkype">
                <Form.Label>Cuenta de Skype</Form.Label>
                <Form.Control type="text" value={user.idSkype} name="idSkype" onChange={handleInputChange} className="editUserFormControl" />
              </Form.Group>
            </Col>

            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Cuéntanos algo sobre ti</Form.Label>
              <Form.Control type="textarea" value={user.description} name="description" onChange={handleInputChange} className="editUserFormControl" />
            </Form.Group>

          </Row>

          <div className="d-grid">
            {errors.length > 0 && <FormError>{errors.map(elm => <p>{elm}</p>)} </FormError>}

            <Button className="buttonEditprofileForm" type="submit" disabled={isLoading}>{isLoading ? 'Cargando imagen...' : 'Editar usuario'}</Button>
          </div>
        </Form>



      </div >
      :
      <Loader />
  )
}



export default EditUserProfile