import { useContext } from 'react'
import './CommentCard.css'
import { Button, Card, Col } from "react-bootstrap"
import { AuthContext } from '../../contexts/auth.context'
import commentService from '../../services/Comment.services'

const CommentCard = ({ commentList, loadComments }) => {

    const { loggedUser } = useContext(AuthContext)

    const deleteComment = event => {

        const comment_id = event.target.value

        commentService
            .deleteComments(comment_id)
            .then(() => {
                loadComments()
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            {
                commentList?.map(e => {
                    return (
                        <Col md={6} key={e._id}>
                            <Card className="text-center CommentCard">
                                <Card.Body>
                                    <Card.Title className='CommentTitle'>{e.user ? e.user.username : <span>Usuario eliminado</span>}</Card.Title>
                                    <Card.Text className='CommentText'>
                                        {e.text}
                                    </Card.Text>
                                    {
                                        (loggedUser?._id === e._id || loggedUser?.role === 'ADMIN') &&
                                        < Button value={e._id} onClick={(event) => deleteComment(event)} className='btn-danger'>Eliminar</Button>
                                    }
                                </Card.Body>
                            </Card >
                        </Col >
                    )
                })

            }
        </>
    )

}

export default CommentCard