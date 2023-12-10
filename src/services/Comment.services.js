import axios from "axios"

class CommentService {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/comment`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })

    }

    create(comment) {
        return this.api.post("/create", comment)
    }

    getCommentsByTeacher(teacher_id) {
        return this.api.get(`/${teacher_id}`)
    }

    deleteComments(comment_id) {
        return this.api.delete(`/delete/${comment_id}`)
    }


}

const commentService = new CommentService()

export default commentService