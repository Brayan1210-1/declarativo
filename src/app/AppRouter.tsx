import { Route, Routes, BrowserRouter } from 'react-router'

import { LoginPage } from '../modules/login/page/LoginPage'
import { AnimeListPage } from '../modules/anime/pages/anime-list.page'
import { HomePage } from '../modules/home/page/HomePage'
import { NotFound } from '../modules/notfound/NotFound'
import { Auth } from './Auth'
import { ProtectedRoute } from './ProtectedRoute'
import RegisterPage from '../modules/register/page/RegisterPage'
import { AnimeDetailPage } from '../modules/anime/pages/anime-detail.page'
import { NavBar } from './NavBar'
import { PerfilFalso } from '../modules/perfil/PerfilPage'

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route element={<NavBar />}  >


                    <Route index element={<HomePage />} />

                    {/* Esta es la anidación, primero se define la ruta que tiene el componente outlet (Auth en este caso)*/}
                    <Route path='/auth' element={<Auth />} >

                        {/* se definen las rutas hijas de la etiqueta <Route sin cerrarla
                    
                     Se muestra la información del padre aún en la ruta anidada

                     */}

                        <Route index element={<LoginPage />} />
                        <Route path='/auth/registro' element={<RegisterPage />} />

                    </Route>

                    <Route path='/anime'  >
                        <Route index element={<AnimeListPage />} />

                        <Route path='/anime/:id' element={<AnimeDetailPage />} />
                    </Route>

                    {/* RUTA PROTEGIDA*/}
                    <Route element={<ProtectedRoute />} >

                        <Route path='/perfil' element={<PerfilFalso />} />
                    </Route>


                </Route>

                <Route path='*' element={<NotFound />} />


            </Routes>
        </BrowserRouter>

    )
}
