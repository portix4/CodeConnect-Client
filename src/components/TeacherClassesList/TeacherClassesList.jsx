import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import "./TeacherClassesList.css"
import classService from "../../services/Class.services"
import React from 'react'


const TeacherClassesList = () => {

  const [classes, setClass] = useState()

  useEffect(() => {
    loadClass()
  }, [])

  const loadClass = () => {

    classService
      .getClassByTeacher()
      .then(({ data }) => {
        setClass(data)
      })
      .catch(error => console.log(error))
  }

  const setStatus = (event, classes_id, booking_id) => {

    const status = event.target.value

    classService
      .searchClassAndSetStatus(classes_id, booking_id, status)
      .then(() => {
        loadClass()
      })
      .catch(error => console.log(error))
  }



  return (
    classes &&
    <div className="TeacherClassesList">
      {
        classes.booking.length > 0
          ?
          <>
            <h3 className="titleClassesList">Historial de solicitudes de estudiantes para la clase de {classes.title}</h3>
            <hr />
            <table className="tableClassesList">
              <thead>
                <tr>
                  <th scope="col">Nombre del alumno </th>
                  <th scope="col">Estado de la reserva</th>
                  <th scope="col">Fecha de la reserva</th>
                  <th scope="col">Acción</th>
                </tr>
              </thead>
              <tbody>
                {
                  classes.booking?.map(elm => {
                    return (
                      <tr>
                        <td>{elm.students ? elm.students.username : 'Usuario eliminado'}</td>
                        <td>{elm.status === 'Accepted' ? 'Aceptada' : elm.status === 'Cancelled' ? 'Cancelada' : 'Pendiente'}</td>
                        <td className="statusItem" key={elm}>
                          {new Date(elm.date).toLocaleString('es-ES', {
                            day: '2-digit',
                            month: 'long',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: 'numeric',
                            hour12: false
                          })}
                        </td>
                        <td>
                          {
                            elm.status === 'Pending'
                              ?
                              <td className="buttonsContainerList">
                                <Button className="firstButtonClassesList" value='Accepted' onClick={(event) => setStatus(event, classes._id, elm._id)}>Aceptar</Button>
                                <Button className="secondButtonClassesList" value='Cancelled' onClick={(event) => setStatus(event, classes._id, elm._id)}>Cancelar</Button>
                              </td>
                              :
                              <div>Finalizado </div>
                          }
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </>
          :
          <div className="noRequestsTeacher">No hay solicitudes</div>
      }
    </div>

  )
}

export default TeacherClassesList