import React, { useEffect, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import esLocale from '@fullcalendar/core/locales/es'
import classService from './../../services/Class.services'

const Calendar = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        loadEvents()
    }, [])

    const loadEvents = () => {
        classService
            .getClassByTeacher()
            .then(({ data }) => {
                const modifiedEvents = data.booking.map((event) => ({
                    title: event.students.username,
                    start: new Date(event.date),
                    status: event.status,
                    color: event.status === 'Accepted' ? 'green' : (event.status === 'Pending' ? 'yellow' : 'red'),
                    time: formatTime(new Date(event.date))
                }))
                setEvents(modifiedEvents)
                console.log('Evento modificado:', modifiedEvents)
            })
            .catch((error) => console.log(error))
    }

    const formatTime = (date) => {
        const hours = date.getHours().toString().padStart(2, '0')
        const minutes = date.getMinutes().toString().padStart(2, '0')
        return `${hours}:${minutes}`
    }

    return (
        <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={events}
            headerToolbar={{
                left: 'title',
            }}
            locale={esLocale}
            dayHeaderFormat={{ weekday: 'long' }}
            firstDay={1}
            height={580}
        />
    )
}

export default Calendar
