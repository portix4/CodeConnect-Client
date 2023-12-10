import NewUserForm from '../../components/NewUserForm/NewUserForm'
import { Container, Row, Col } from 'react-bootstrap'


const NewUser = () => {

    return (

        <Container>
            <h1 className='text-center mb-4 titleSignUp'>Nuevo usuario</h1>
            <Row>
                <Col lg={{ span: 8, offset: 2 }}>
                    <NewUserForm />
                </Col>
            </Row>
        </Container>

    )

}

export default NewUser