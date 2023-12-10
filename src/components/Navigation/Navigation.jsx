import './Navigation.css'
import { Container, Navbar } from "react-bootstrap"
import { AuthContext } from '../../contexts/auth.context'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import AcordionButton from "./AcordionButton"

const Navigation = () => {

  const { loggedUser } = useContext(AuthContext)



  return (
    <>

      <Navbar sticky='top' className='Navbar' expand="lg" style={{ zIndex: 1 }}>
        <Container>
          <Navbar.Brand>
            <Link to={'/'}>
              <span className='homeC'> &lt;C &#47;&gt;</span> <span className='home2'>  {loggedUser && "Hola, " + loggedUser.username + "!"} </span>
            </Link>
            <Link to={"/noticias"}>
              <span className='homeTextNav'> Noticias </span>
            </Link>
            <Link to={"/clases"}>
              <span className='homeTextNav'> Clases </span>
            </Link>
            {
              (loggedUser?.role === 'TEACHER' || loggedUser?.role === 'ADMIN') &&
              <>
                <Link to={"/calendario"}><span className='homeTextNav'>Calendario</span></Link>
                <Link to={"/clase/crear"}><span className='homeTextNav'>Crear clase</span></Link>
              </>
            }
          </Navbar.Brand>
          <AcordionButton />
        </Container>
      </Navbar>
    </>

  )

}

export default Navigation