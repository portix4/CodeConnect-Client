import { useState } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import FormError from "../FormError/FormError"
import * as CLASS_CONSTS from './../../consts/class-consts'
import "./NewClassForm.css"
import classService from "../../services/Class.services"

const NewClassForm = () => {

    const [classes, setClasses] = useState({
        title: '',
        description: '',
        languages: [],
        city: '',
        classType: ''
    })
    const [errors, setErrors] = useState([])

    const navigate = useNavigate()

    const handleInputChange = e => {

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
            .create(classes)
            .then(() => navigate('/'))
            .catch(err => setErrors(err.response.data.errorMessages))

    }

    return (

        <div className="NewClassForm">

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

                {errors.length > 0 && <FormError>{errors.map(elm => <p key={elm}>{elm}</p>)} </FormError>}

                <div className="d-grid buttonCreateClass">
                    <Button className="buttonInside btn-sm" type="submit">Crear clase</Button>
                </div>
            </Form>

        </div>
    )

}

export default NewClassForm