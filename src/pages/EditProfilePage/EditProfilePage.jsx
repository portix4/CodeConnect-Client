import EditUserForm from "../../components/EditUserForm/EditUserForm"
import { Container, Row, Col } from "react-bootstrap"
import "./EditProfilePage.css"
import code from "../../assets/_.svg"

const EditUserProfilePage = () => {

    return (
        <Container>
            <img src={code} alt="code" className="code" />
            <h1 className='text-center mb-1 editTitleProfile'>Edita tu perfil</h1>
            <Row>
                <Col lg={{ span: 8, offset: 2 }}>
                    <EditUserForm />
                </Col>
                <img src={code} alt="code" className="code2" />

            </Row>

        </Container>
    )
}

export default EditUserProfilePage