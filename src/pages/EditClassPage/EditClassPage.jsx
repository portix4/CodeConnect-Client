import { useEffect, useState } from "react"
import { Form, Button, Container } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import classService from "../../services/Class.services"
import * as CLASS_CONSTS from "./../../consts/class-consts"
import "./EditClassPage.css"


const EditClassPage = () => {

    const [classes, setClasses] = useState({})

    const { class_id } = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        loadClass()
    }, [])

    const loadClass = () => {
        classService
            .getOneClass(class_id)
            .then(({ data }) => setClasses(data))
            .catch(error => console.log(error))
    }

    const handleInputChange = e => {

        e.preventDefault()

        const { value, name } = e.currentTarget

        if (name === "classType" && value === "Remote") {
            classes.city = ""
        }

        setClasses((prevClasses) => ({
            ...prevClasses,
            [name]: name === 'languages' ? Array.from(e.target.selectedOptions).map((option) => option.value) : value,
        }))
    }

    const handleClassSubmit = e => {

        e.preventDefault()


        classService
            .editClass(class_id, classes)
            .then(() => navigate('/clases'))
            .catch(error => console.log(error))
    }

    return (

        <div className="EditClassForm">
            <Container>

                <Form onSubmit={handleClassSubmit} autoComplete="off">
                    <Form.Group className="mb-3" controlId="title">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" value={classes.title} name="title" onChange={handleInputChange} className="classControl" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control type="text" value={classes.description} name="description" onChange={handleInputChange} className="classControl" />
                    </Form.Group>
                    <Form.Group className="mb-4 rolText" controlId="role">
                        <Form.Label>Lenguajes </Form.Label>
                        <Form.Select multiple onChange={handleInputChange} name="languages" className="selectLanguage">
                            {
                                CLASS_CONSTS.LANGUAGES.map(elm => <option className="options" value={elm} key={elm}>{elm}</option>)
                            }
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3 classText" controlId="classType">
                        <Form.Label>Tipo de clase</Form.Label>
                        <Form.Select aria-label="Default select example" onChange={handleInputChange} name="classType" className="selectType">
                            <option className="selectionText" value="">Selecciona una opción</option>
                            <option value="On-site" className="options">Presencial</option>
                            <option value="Hybrid" className="options">Híbrida</option>
                            <option value="Remote" className="options">En remoto</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="city">
                        <Form.Label>Ciudad donde se imparte la clase</Form.Label>
                        <Form.Control type="text" value={classes.city} name="city" disabled={classes.classType === "Remote"} onChange={handleInputChange} className="classControl" />
                    </Form.Group>


                    <div className="d-grid buttonEditClass">
                        <Button className="buttonEditInside btn-sm" type="submit">Editar clase</Button>
                    </div>
                </Form>
            </Container >

        </div>



    )
}

export default EditClassPage