import { Routes, Route } from 'react-router-dom'
import HomePage from './../pages/HomePage/HomePage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import NewUserPage from '../pages/NewUserPage/NewUserPage'
import UserProfilePage from '../pages/UserProfilePage/UserProfilePage'
import AboutUsPage from '../pages/AboutUsPage/AboutUsPage'
import EditProfilePage from '../pages/EditProfilePage/EditProfilePage'
import ContactPage from '../pages/ContactPage/ContactPage'
import HowItWorksPage from '../pages/HowItWorksPage/HowItWorksPage'
import NewClassPage from '../pages/NewClassPage/NewClassPage'
import ClassesPage from '../pages/ClassesPage/ClassesPage'
import DetailsClassPage from '../pages/DetailsClassPage/DetailsClassPage'
import TeacherProfilePage from '../pages/TeacherProfilePage/TeacherProfilePage'
import News from '../pages/NewsPage/NewsPage'
import PrivateRoute from './PrivateRoute'
import EditClassPage from '../pages/EditClassPage/EditClassPage'
import CalendarPage from '../pages/CalendarPage/CalendarPage.jsx'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path={'/'} element={<HomePage />} />
            <Route path={'/registro'} element={<NewUserPage />} />
            <Route path={'/inicio-sesion'} element={<LoginPage />} />
            <Route path={'/clases'} element={<ClassesPage />} />
            <Route path={'/clase/:class_id'} element={<DetailsClassPage />} />
            <Route path={'/nosotros'} element={<AboutUsPage />} />
            <Route path={'/como-funciona'} element={<HowItWorksPage />} />
            <Route path={'/contacto'} element={<ContactPage />} />
            <Route path={'/perfil/:owner_id'} element={<TeacherProfilePage />} />
            <Route path={'/noticias'} element={<News />} />

            <Route element={<PrivateRoute />}>
                <Route path={'/perfil'} element={<UserProfilePage />} />
                <Route path={'/perfil/editar'} element={<EditProfilePage />} />
            </Route>

            <Route element={<PrivateRoute acceptedRoles={['TEACHER', 'ADMIN']} />}>
                <Route path={'/clase/crear'} element={<NewClassPage />} />
                <Route path={'/clase/:class_id/editar'} element={<EditClassPage />} />
                <Route path={'/calendario'} element={<CalendarPage />} />
            </Route>

            <Route path={'*'} element={<ErrorPage />} />

        </Routes>
    )
}

export default AppRoutes