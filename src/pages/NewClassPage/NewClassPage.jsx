import { Container, Row, Col } from "react-bootstrap"
import NewClassForm from "../../components/NewClassForm/NewClassForm"

const NewClassPage = () => {

    return (

        <Container>
            <h1 className='text-center mb-4 titleCreateClass'>Nueva clase</h1>
            <Row >
                <Col lg={{ span: 8, offset: 2 }}>
                    <NewClassForm />
                </Col>
            </Row>
        </Container>

    )

}

export default NewClassPage