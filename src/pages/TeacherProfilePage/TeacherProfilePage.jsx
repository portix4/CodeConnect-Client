import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import userService from './../../services/User.services'
import Loader from "../../components/Loader/Loader"
import { Container, Row, Col } from "react-bootstrap"
import UserProfileCard from "../../components/UserProfileCard/UserProfileCard"
import RatingCard from "../../components/RatingCard/RatingCard"
import CommentForm from "../../components/CommentForm/CommentForm"
import RatingForm from "../../components/RatingForm/RatingForm"
import { useContext } from "react"
import { AuthContext } from "../../contexts/auth.context"
import CommentCard from "../../components/CommentCard/CommentCard"
import commentService from "../../services/Comment.services"
import "./TeacherProfilePage.css"
import iconComment from "../../assets/icon-message-square.svg"
import classService from "../../services/Class.services"


const TeacherProfilePage = () => {

    const [commentList, setCommentList] = useState([])
    const { loggedUser } = useContext(AuthContext)
    const [user, setUser] = useState()
    const { owner_id } = useParams()
    const [classes, setClasses] = useState({})

    useEffect(() => {
        loadTeacher()
        loadComments()
        loadClass()
    }, [])

    const loadTeacher = () => {
        userService
            .profile(owner_id)
            .then(({ data }) => {
                setUser(data)
            })
            .catch(error => console.log(error))
    }

    const loadComments = () => {

        commentService
            .getCommentsByTeacher(owner_id)
            .then(({ data }) => {
                setCommentList(data)
            })
            .catch(err => console.log(err))

    }

    const loadClass = () => {

        classService
            .filterByStatus(owner_id)
            .then(({ data }) => {
                console.log(data)
                setClasses(data)
            })
            .catch(error => console.log(error))

        console.log(classes)
    }

    if (!user) {
        return <Loader />
    }

    return (

        <Container>
            <UserProfileCard {...user} key={user._id} />
            <RatingCard rating={user?.rating} />

            <Row>
                <h1 className="commentsTitle">Comentarios</h1>
                <img src={iconComment} alt="iconComment" className="iconComment" />
            </Row>
            <Row>
                <CommentCard loadComments={loadComments} commentList={commentList} />
            </Row>
            {
                (loggedUser?.role === 'STUDENT' && classes._id) &&
                < Row >
                    <Col>
                        <CommentForm loadComments={loadComments} />
                        <hr style={{ color: "transparent" }} />
                        <RatingForm loadTeacher={loadTeacher} className="ratingFormTeacherProfile" />
                    </Col>
                </Row>
            }
        </Container >


    )
}

export default TeacherProfilePage