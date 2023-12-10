import { Container } from "react-bootstrap"
import { useState, useEffect, useContext } from "react"
import classService from "../../services/Class.services"
import { AuthContext } from "../../contexts/auth.context"
import "./StudentClassesList.css"
import React from 'react'

const StudentClassesList = () => {

  const [classes, setClasses] = useState([])
  const { loggedUser } = useContext(AuthContext)

  useEffect(() => {
    loadClasses()
  }, [])

  const loadClasses = () => {

    classService
      .getClassByStudent(loggedUser._id)
      .then(({ data }) => {
        setClasses(data)
      })
      .catch(err => console.log(err))
  }

  return (
    <Container className="containerTableStudentList">
      <h3 className="titleTable">Clases a las que estoy apuntado</h3>
      {
        classes &&
        <table className="tableClassesList">
          <thead>
            <tr>
              <th scope="col">Nombre de la clase</th>
              <th scope="col">Fecha de la reserva</th>
              <th scope="col">Estado de la reserva</th>
            </tr>
          </thead>
          <tbody>
            {classes?.map(e => (
              e.booking.map((elm, i) =>
                elm.students === loggedUser._id && (
                  <tr key={i}>
                    <td>{e.title}</td>
                    <td>
                      {new Date(elm.date).toLocaleString('es-ES', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: 'numeric',
                        hour12: false
                      })}
                    </td>
                    <td>{elm.status === 'Accepted' ? 'Aceptada' : elm.status === 'Cancelled' ? 'Cancelada' : 'Pendiente'}</td>
                  </tr>
                )
              )
            ))}
          </tbody>
        </table>
      }
    </Container>
  )

}

export default StudentClassesList