import { ProgressBar } from "react-bootstrap"
import './RatingCard.css'

const RatingCard = ({ rating }) => {

    // TODO:^MOVER LÓGICA DE MEDIA A UTIL GETAVGUSERRATING
    let sumRating = 0
    rating.forEach(e => {
        sumRating += e.value
    })
    let avgRating = Math.round((sumRating / rating.length))
    if (isNaN(avgRating)) {
        return <p className="noRatingText">Todavía no hay rating del profesor</p>
    } else {
        return (
            <div>
                <h1 className="titleRating">Rating</h1>
                <ProgressBar className="custom-progress-bar" label={`${avgRating}`} animated now={avgRating} min={1} max={10} />
            </div>
        )
    }

}

export default RatingCard