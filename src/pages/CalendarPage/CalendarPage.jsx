import Calendar from './../../components/Calendar/Calendar'
import { Container } from "react-bootstrap"
import './CalendarPage.css'


const CalendarPage = () => {
    return (
        <div className="CalendarPage">
            <Container>
                <h1 className='classTitle'>Calendario</h1>
                <hr />
                <Calendar />
            </Container>
        </div>
    )
}

export default CalendarPage