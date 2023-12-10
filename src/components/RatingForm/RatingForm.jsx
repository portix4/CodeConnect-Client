import './RatingForm.css'
import { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { useParams } from "react-router-dom"
import userService from '../../services/User.services'
import FormError from '../FormError/FormError'

const RatingForm = ({ loadTeacher }) => {

    const [showModal, setShowModal] = useState(false)
    const [rating, setRating] = useState(0)
    const [errors, setErrors] = useState([])
    const { owner_id } = useParams()

    const finalActions = () => {
        if (!errors) {
            setShowModal(false)
        }
    }

    const handleInputChange = e => {
        const { value } = e.target
        setRating(value)
    }

    const handleSubmit = e => {

        e.preventDefault()

        userService
            .editUserWithRating(owner_id, rating)
            .then(() => {
                setShowModal(false)
                setRating()
                loadTeacher()
            })
            .catch(err => setErrors(err.response.data.errorMessages))

    }

    return (
        <div className="RatingForm">
            <Button className="ratingButton" onClick={() => setShowModal(true)}>Votar</Button>

            <Modal show={showModal} onHide={() => setShowModal(false)} className='modalRating'>
                <Modal.Header closeButton className='modalHeaderRating'>
                    <Modal.Title className='textHeaderRating'>Votar al profesor</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modalBodyRating'>
                    <Form onSubmit={handleSubmit} autoComplete="off" className="formContentCenter">
                        <Form.Group className="mb-3" controlId="rating">
                            <Form.Control type="number" onChange={handleInputChange} name="rating" placeholder='Vota un valor númerico (1-10)' className='formModalRating' />
                        </Form.Group>
                        {errors.length > 0 && <FormError>{errors.map(elm => <p key={elm} className='errorsModalRating'>{elm}</p>)} </FormError>}
                        <Button type='submit' className='ratingButtonModal' onClick={finalActions}>Enviar</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )

}

export default RatingForm