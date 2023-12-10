import axios from "axios"

//Carlos Key = a566fa86d9d24b559cab1e0823f2d409
//Antonio key = 4041852faf77477e9c2611e46d2c8b96

class NewsService {

    constructor() {

    }

    getNews(query) {
        return axios.get(`https://newsapi.org/v2/everything?q=${query}&language=es&sortBy=popularity&pageSize=30&apiKey=4041852faf77477e9c2611e46d2c8b96`)
    }

}

const newsService = new NewsService()

export default newsService