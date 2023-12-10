import newsService from "../../services/News.services";
import { useState, useEffect } from "react";
import { Container, Form } from "react-bootstrap";
import "./NewsPage.css"
import { Link } from "react-router-dom";

const News = () => {
    const [news, setNews] = useState([])
    const [query, setQuery] = useState('')

    const handleFormSubmit = e => {
        e.preventDefault()
        newsService
            .getNews(query === '' ? 'JavaScript' : query)
            .then(response => { setNews(response.data.articles) })
            .catch(err => console.log(err))

    }

    const handleInputChange = e => {

        const { value } = e.currentTarget

        setQuery(value)

    }

    return (
        <div className="NewsPage">
            <h1 className="titleNews">· Noticias más populares de {query.charAt(0).toUpperCase() + query.slice(1)} ·</h1>
            <Container>
                <Form autoComplete="off" onSubmit={handleFormSubmit}>
                    <Form.Group className="searchBarNews" controlId="searcher">
                        <Form.Control className="searchFormNews" type="text" placeholder="Busca un lenguaje..." value={query} onChange={handleInputChange} />
                    </Form.Group>
                </Form>
            </Container>
            {
                news?.map(e => {
                    return (
                        <div className="allNewsPage">
                            <Container>
                                <div key={e.title} className="eachNew">
                                    <h2>{e.title}</h2>
                                    <p>{e.description}</p>
                                    <Link target="_blank" to={e.url} className="linkNews">Llévame a la noticia </Link>
                                    <p className="sourceName">Fuente: {e.source.name}</p>
                                </div>
                            </Container >
                        </div >
                    )
                })
            }
        </div>
    )
}


export default News