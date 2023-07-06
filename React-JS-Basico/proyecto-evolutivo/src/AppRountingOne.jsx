import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import NotFoundPage from './pages/404/NotFoundPage'
import AboutPage from './pages/about-faqs/AboutPage'

function MultiPath(element, ...paths) {
    // ...paths => Se utiliza para crear
    // Creamos un multi path => cada path de los que ingresamos van a dirigirse a la misma pagina.
    return paths.map(path => <Route key={path} path={path} element={element} />)
}


export default function AppRountingOne() {
    return (
        <BrowserRouter>
            <div>
                <aside>
                    <Link to={'/'}> |HOME| </Link>
                    <Link to={'/about'}> |ABOUT| </Link>
                    <Link to={'/faqs'} > |FAQs| </Link>
                </aside>
                <main>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        {MultiPath(<AboutPage />, '/about', 'faqs')}
                        {/* 404 - NOT FOUND!! */}
                        <Route path='*' element={<NotFoundPage />} />
                    </Routes>
                </main>
            </div>

        </BrowserRouter>
    )
}
