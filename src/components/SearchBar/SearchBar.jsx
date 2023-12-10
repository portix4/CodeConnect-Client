
import { Form, Row } from "react-bootstrap"
import { useState } from "react";
import "./SearchBar.css"
import * as CLASS_CONSTS from './../../consts/class-consts'



const SearchBar = ({ setResults }) => {

  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    setQuery(e.target.value)
    getFilteredItems(e.target.value)
  };

  const getFilteredItems = (value) => {
    if (!value) setResults([])
    else setResults(CLASS_CONSTS.LANGUAGES.filter(e => e.toLowerCase().startsWith(value.toLowerCase())))
  }

  return (
    <Form autoComplete="off">
      <Form.Group className="searchBar" controlId="searcher">
        <Form.Control className="searchForm" type="text" placeholder="Busca una clase..." value={query} onChange={handleSearch} />
      </Form.Group>
    </Form>
  )

}


export default SearchBar