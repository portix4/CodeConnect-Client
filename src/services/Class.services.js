import axios from "axios";


class ClassServices {
    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/class`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    searchClassAndSetStatus(classes_id, booking_id, status) {
        return this.api.put(`/searchClassAndSetStatus`, { classes_id, booking_id, status })
    }

    create(classData) {
        return this.api.post("/create", classData)
    }
    getClasses() {
        return this.api.get("/all")
    }

    getClassbySearch(language, classType, city) {
        return this.api.get('/', {
            params: {
                language: language,
                classType: classType,
                city: city
            }
        })
    }

    putClassRequest(student_id, class_id, date) {
        return this.api.put(`/putClassRequest/${class_id}`, { student_id, date })
    }

    getClassByStudent(user_id) {
        return this.api.get(`/getClassByStudent/${user_id}`)
    }

    getOneClass(class_id) {
        return this.api.get(`getOneClass/${class_id}`)
    }

    editClass(class_id, classes) {
        return this.api.put(`/edit/${class_id}`, { classes })
    }

    getClassByTeacher() {
        return this.api.get(`/getClassByTeacher`)
    }

    filterByStatus(teacher_id) {
        return this.api.get(`/filterByStatus/${teacher_id}`)
    }

    getOneClass(class_id) {
        return this.api.get(`/${class_id}`)
    }

    deleteClass(class_id) {
        return this.api.delete(`/deleteClass/${class_id}`)
    }

}

const classService = new ClassServices()

export default classService