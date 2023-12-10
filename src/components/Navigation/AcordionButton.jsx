import './Navigation.css'
import { AuthContext } from '../../contexts/auth.context'
import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default () => {
    const { loggedUser, logout } = useContext(AuthContext)
    const [isAccordionOpen, setAccordionOpen] = useState(false)
    const navigate = useNavigate()

    const handleLinkClick = () => {
        setAccordionOpen(false)
    }

    const logoutNavigate = () => {
        logout()
        navigate('/')
    }

    const handleAcordeonToggle = () => {
        setAccordionOpen(!isAccordionOpen)
    }

    return (
        <div className="accordionWrapper">
            <div className="accordion" id="accordionExample" style={{ zIndex: 2 }}>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className={`accordion-button ${isAccordionOpen ? '' : 'collapsed'}`} onClick={handleAcordeonToggle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            <svg className='image' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M3 2C2.44772 2 2 2.44772 2 3V10C2 10.5523 2.44772 11 3 11H10C10.5523 11 11 10.5523 11 10V3C11 2.44772 10.5523 2 10 2H3ZM4 9V4H9V9H4Z" fill="#12F7D6" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M14 2C13.4477 2 13 2.44772 13 3V10C13 10.5523 13.4477 11 14 11H21C21.5523 11 22 10.5523 22 10V3C22 2.44772 21.5523 2 21 2H14ZM15 9V4H20V9H15Z" fill="#12F7D6" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M13 14C13 13.4477 13.4477 13 14 13H21C21.5523 13 22 13.4477 22 14V21C22 21.5523 21.5523 22 21 22H14C13.4477 22 13 21.5523 13 21V14ZM15 15V20H20V15H15Z" fill="#12F7D6" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M3 13C2.44772 13 2 13.4477 2 14V21C2 21.5523 2.44772 22 3 22H10C10.5523 22 11 21.5523 11 21V14C11 13.4477 10.5523 13 10 13H3ZM4 20V15H9V20H4Z" fill="#12F7D6" />
                            </svg>
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className={`accordion-collapse collapse ${isAccordionOpen ? 'show' : ''}`} data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            {!loggedUser
                                ?
                                <>
                                    <Link to={'/registro'} onClick={handleLinkClick}>
                                        <svg className='image' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M8.5 2C5.73858 2 3.5 4.23858 3.5 7C3.5 9.76142 5.73858 12 8.5 12C11.2614 12 13.5 9.76142 13.5 7C13.5 4.23858 11.2614 2 8.5 2ZM5.5 7C5.5 5.34315 6.84315 4 8.5 4C10.1569 4 11.5 5.34315 11.5 7C11.5 8.65685 10.1569 10 8.5 10C6.84315 10 5.5 8.65685 5.5 7Z" fill="#FFFFFF" />
                                            <path d="M5 14C3.67392 14 2.40215 14.5268 1.46447 15.4645C0.526784 16.4021 0 17.6739 0 19V21C0 21.5523 0.447715 22 1 22C1.55228 22 2 21.5523 2 21V19C2 18.2044 2.31607 17.4413 2.87868 16.8787C3.44129 16.3161 4.20435 16 5 16H12C12.7956 16 13.5587 16.3161 14.1213 16.8787C14.6839 17.4413 15 18.2043 15 19V21C15 21.5523 15.4477 22 16 22C16.5523 22 17 21.5523 17 21V19C17 17.6739 16.4732 16.4021 15.5355 15.4645C14.5979 14.5268 13.3261 14 12 14H5Z" fill="#FFFFFF" />
                                            <path d="M20 7C20.5523 7 21 7.44772 21 8V10H23C23.5523 10 24 10.4477 24 11C24 11.5523 23.5523 12 23 12H21V14C21 14.5523 20.5523 15 20 15C19.4477 15 19 14.5523 19 14V12H17C16.4477 12 16 11.5523 16 11C16 10.4477 16.4477 10 17 10H19V8C19 7.44772 19.4477 7 20 7Z" fill="#FFFFFF" />
                                        </svg>
                                    </Link>
                                    <hr />
                                    <Link to={'/inicio-sesion'} onClick={handleLinkClick}>
                                        <svg className='image' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M3.5 7C3.5 4.23858 5.73858 2 8.5 2C11.2614 2 13.5 4.23858 13.5 7C13.5 9.76142 11.2614 12 8.5 12C5.73858 12 3.5 9.76142 3.5 7ZM8.5 4C6.84315 4 5.5 5.34315 5.5 7C5.5 8.65685 6.84315 10 8.5 10C10.1569 10 11.5 8.65685 11.5 7C11.5 5.34315 10.1569 4 8.5 4Z" fill="#FFFFFF" />
                                            <path d="M1.46447 15.4645C2.40215 14.5268 3.67392 14 5 14H12C13.3261 14 14.5979 14.5268 15.5355 15.4645C16.4732 16.4021 17 17.6739 17 19V21C17 21.5523 16.5523 22 16 22C15.4477 22 15 21.5523 15 21V19C15 18.2043 14.6839 17.4413 14.1213 16.8787C13.5587 16.3161 12.7956 16 12 16H5C4.20435 16 3.44129 16.3161 2.87868 16.8787C2.31607 17.4413 2 18.2044 2 19V21C2 21.5523 1.55228 22 1 22C0.447715 22 0 21.5523 0 21V19C0 17.6739 0.526784 16.4021 1.46447 15.4645Z" fill="#FFFFFF" />
                                            <path d="M23.7071 9.70711C24.0976 9.31658 24.0976 8.68342 23.7071 8.29289C23.3166 7.90237 22.6834 7.90237 22.2929 8.29289L19 11.5858L17.7071 10.2929C17.3166 9.90237 16.6834 9.90237 16.2929 10.2929C15.9024 10.6834 15.9024 11.3166 16.2929 11.7071L18.2929 13.7071C18.6834 14.0976 19.3166 14.0976 19.7071 13.7071L23.7071 9.70711Z" fill="#FFFFFF" />
                                        </svg>
                                    </Link>
                                </>
                                :
                                <>
                                    <Link to={'/perfil'} onClick={handleLinkClick}>
                                        <svg className='image' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2ZM9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7Z" fill="#FFFFFF" />
                                            <path d="M8 14C6.67392 14 5.40215 14.5268 4.46447 15.4645C3.52678 16.4021 3 17.6739 3 19V21C3 21.5523 3.44772 22 4 22C4.55228 22 5 21.5523 5 21V19C5 18.2043 5.31607 17.4413 5.87868 16.8787C6.44129 16.3161 7.20435 16 8 16H16C16.7956 16 17.5587 16.3161 18.1213 16.8787C18.6839 17.4413 19 18.2044 19 19V21C19 21.5523 19.4477 22 20 22C20.5523 22 21 21.5523 21 21V19C21 17.6739 20.4732 16.4021 19.5355 15.4645C18.5979 14.5268 17.3261 14 16 14H8Z" fill="#FFFFFF" />
                                        </svg>
                                    </Link>
                                    <hr />
                                    <span className='nav-link' onClick={() => {
                                        handleLinkClick()
                                        logoutNavigate()
                                    }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 2C5.73858 2 3.5 4.23858 3.5 7C3.5 9.76142 5.73858 12 8.5 12C11.2614 12 13.5 9.76142 13.5 7C13.5 4.23858 11.2614 2 8.5 2ZM5.5 7C5.5 5.34315 6.84315 4 8.5 4C10.1569 4 11.5 5.34315 11.5 7C11.5 8.65685 10.1569 10 8.5 10C6.84315 10 5.5 8.65685 5.5 7Z" fill="#FFFFFF" />
                                            <path d="M5 14C3.67392 14 2.40215 14.5268 1.46447 15.4645C0.526784 16.4021 0 17.6739 0 19V21C0 21.5523 0.447715 22 1 22C1.55228 22 2 21.5523 2 21V19C2 18.2044 2.31607 17.4413 2.87868 16.8787C3.44129 16.3161 4.20435 16 5 16H12C12.7956 16 13.5587 16.3161 14.1213 16.8787C14.6839 17.4413 15 18.2043 15 19V21C15 21.5523 15.4477 22 16 22C16.5523 22 17 21.5523 17 21V19C17 17.6739 16.4732 16.4021 15.5355 15.4645C14.5979 14.5268 13.3261 14 12 14H5Z" fill="#FFFFFF" />
                                            <path d="M17.2929 7.29289C17.6834 6.90237 18.3166 6.90237 18.7071 7.29289L20.5 9.08579L22.2929 7.29289C22.6834 6.90237 23.3166 6.90237 23.7071 7.29289C24.0976 7.68342 24.0976 8.31658 23.7071 8.70711L21.9142 10.5L23.7071 12.2929C24.0976 12.6834 24.0976 13.3166 23.7071 13.7071C23.3166 14.0976 22.6834 14.0976 22.2929 13.7071L20.5 11.9142L18.7071 13.7071C18.3166 14.0976 17.6834 14.0976 17.2929 13.7071C16.9024 13.3166 16.9024 12.6834 17.2929 12.2929L19.0858 10.5L17.2929 8.70711C16.9024 8.31658 16.9024 7.68342 17.2929 7.29289Z" fill="#FFFFFF" />
                                        </svg>
                                    </span>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}