import { useEffect, useState } from "react"
import { Container, Form, Row, Col } from "react-bootstrap"
import ClassesList from "../../components/ClassesList/ClassesList"
import classService from "../../services/Class.services"
import Loader from "../../components/Loader/Loader"
import { useNavigate, useSearchParams } from "react-router-dom"
import "./ClassesPage.css"


const ClassesPage = () => {

  const [classes, setClasses] = useState()

  const [searchParams, setSearchParams] = useSearchParams()

  const [results, setResults] = useState([])

  const navigate = useNavigate()

  let languageQuery = searchParams.get("language")
  let cityQuery = searchParams.get("city")
  let classType = searchParams.get("classType")

  useEffect(() => {
    loadClasses()
  }, [languageQuery, cityQuery, classType])

  const loadClasses = () => {
    classService
      .getClassbySearch(languageQuery, classType, cityQuery)
      .then(({ data }) => {
        setClasses(data)
      })
      .catch(error => console.log(error))

    const newSearchParams = new URLSearchParams()
    if (languageQuery) newSearchParams.set('language', languageQuery)
    if (cityQuery) newSearchParams.set('city', cityQuery)
    if (classType) newSearchParams.set('classType', classType)

    navigate(`?${newSearchParams.toString()}`)
  }

  const setTypeClass = e => {
    classType = e.target.value
    loadClasses()
  }

  const setCity = e => {
    cityQuery = e.target.value
    loadClasses()
  }

  const setLanguage = e => {
    languageQuery = e.target.value
    loadClasses()
  }


  return (
    classes
      ?
      <div className="classContainer">
        <Container>
          <h1 className="listClasses">Listado de clases</h1>


          <Row>
            {/* <Form.Group className="mb-3 classText" controlId="classType"> */}
            <Col>

              <Form.Label>Tipo de clase</Form.Label>
              <Form.Select aria-label="Default select example" onChange={setTypeClass} name="classType" className="selectType">
                <option className="selectionText" value="">Todas las clases</option>
                <option value="On-site" className="options">Presencial</option>
                <option value="Hybrid" className="options">Híbrida</option>
                <option value="Remote" className="options">En remoto</option>
              </Form.Select>
            </Col>

            <Col>
              <Form autocomplete="off">
                <Form.Group className="searchBar" controlId="searcher">
                  <Form.Control className="searchForm" type="text" placeholder="Busca en tu ciudad" onChange={setCity} />
                </Form.Group>
              </Form>
            </Col>

            <Col>
              <Form autocomplete="off">
                <Form.Group className="searchBar" controlId="searcher">
                  <Form.Control className="searchForm" type="text" placeholder="Busca tu lenguaje" onChange={setLanguage} />
                </Form.Group>
              </Form>
            </Col>
            {/* </Form.Group> */}

          </Row>

          <ClassesList classes={classes} loadClasses={loadClasses} />

        </Container>
      </div>
      :
      <Loader />
  )
}

export default ClassesPage