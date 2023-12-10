import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/auth.context"
import userService from "../../services/User.services"
import { Container, Row } from "react-bootstrap"
import "./UserProfilePage.css"
import Loader from "../../components/Loader/Loader"
import UserProfileCard from "../../components/UserProfileCard/UserProfileCard"
import StudentClassesList from "../../components/StudentClassesList/StudentClassesList"
import TeacherClassesList from "../../components/TeacherClassesList/TeacherClassesList"
import CommentCard from "../../components/CommentCard/CommentCard"
import RatingCard from "../../components/RatingCard/RatingCard"
import commentService from "../../services/Comment.services"
import iconComment from "../../assets/icon-message-square.svg"

const UserProfilePage = () => {

  const { loggedUser } = useContext(AuthContext)
  const [user, setUser] = useState()
  const [commentList, setCommentList] = useState([])


  useEffect(() => {
    loadUser()
    loadComments()
  }, [])

  const loadUser = () => {

    userService
      .profile(loggedUser._id)
      .then(({ data }) => {
        setUser(data)
      })
      .catch(err => console.log(err))

  }

  const loadComments = () => {

    commentService
      .getCommentsByTeacher(loggedUser._id)
      .then(({ data }) => {
        setCommentList(data)
      })
      .catch(err => console.log(err))

  }

  return (

    user
      ?
      <Container>
        <UserProfileCard {...user} key={user._id} />
        {
          loggedUser.role === 'TEACHER' &&
          <>
            <RatingCard rating={user.rating} />
            <h1 className="commentsTitle">Comentarios</h1>
            <Row>
              <CommentCard commentList={commentList} />
            </Row>
          </>
        }
        {

          loggedUser?.role === 'STUDENT'
          &&
          <StudentClassesList />
        }
        {
          loggedUser?.role === 'TEACHER'
          &&
          <TeacherClassesList />
        }





      </Container>
      :
      <Loader />
  )

}

export default UserProfilePage