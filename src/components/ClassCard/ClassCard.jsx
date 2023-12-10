import { Link } from "react-router-dom"
import "./ClassCard.css"
import { Row, Col, Button, Modal } from 'react-bootstrap'
import { useContext, useState } from "react"
import { AuthContext } from "../../contexts/auth.context"
import classService from "../../services/Class.services"




const ClassCard = ({ _id, languages, city, description, classType, title, owner, loadClasses }) => {

    const { loggedUser } = useContext(AuthContext)
    const [showModal, setShowModal] = useState(false)

    const finalActions = () => {
        setShowModal(false)
    }



    const deleteClass = (e) => {

        e.preventDefault()

        classService
            .deleteClass(_id)
            .then(() => {
                setShowModal(false)
                loadClasses()

            })
            .catch(error => console.log(error))
    }

    return (

        <>
            <div className="text-center cardClass">
                <div className="cardHeader">
                    {languages.map(e => <span key={e} style={{ color: "#12F7D6" }}>{e} </span>)}
                    <span>{classType === 'Hybrid' ? <p>Híbrida</p> : classType === 'On-site' ? <p>Presencial</p> : <p>Remota</p>}</span>
                </div>
                <div className="cardBody">
                    <h5 className="custom-card-title">{title}</h5>
                    <div className="custom-card-text">
                        <p style={{ color: "#0bbaa0" }}> Descripción: </p>
                        <p className="descriptionCard"> {description} </p>
                        {city && <p>Ciudad: {city}</p>}
                    </div>
                    <div className="cardFooter text-muted">
                        <span> Profesor: </span><Link to={`/perfil/${owner?._id}`} className="ownerClassLink">
                            {owner?.username}
                        </Link>
                    </div>
                    <Link to={`/clase/${_id}`} className="moreDetailsLink">
                        Más detalles de la clase
                    </Link>
                </div>

                <div className="buttonsCardClassList">
                    {
                        (loggedUser?.role === 'ADMIN' || owner?._id === loggedUser?._id)
                        &&
                        <Row className="mt-1 mb-1">
                            <Col>
                                < Link to={`/clase/${_id}/editar`} className="editButtonClassCard">
                                    Editar
                                </Link>
                            </Col>
                            <Col>
                                <Button className="deleteButtonClassCard" onClick={() => setShowModal(true)}>Eliminar</Button>
                            </Col>
                        </Row>
                    }
                </div>
            </div>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton className="headerDeleteModal">
                    <Modal.Title className="titleModalDeleteClass">¿Seguro que quieres eliminar la clase?</Modal.Title>
                </Modal.Header>
                <Modal.Body className="bodyDeleteModal">
                    <Button className='deleteButtonModal' onClick={(e) => deleteClass(e)}>Sí</Button>
                    <Button className='deleteButtonModal' onClick={finalActions}>No</Button>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ClassCard