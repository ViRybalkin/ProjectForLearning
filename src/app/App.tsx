import styles from '../index.module.scss'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import {lazy, Suspense} from "react";

export const App = () => {
    const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
    const AboutPage = lazy(() => import('../pages/About/About'));

    return (
        <BrowserRouter>
            <div className={styles.app}>
                <Link to={'/'} > Main Page</Link>
                <Link to={'/about'}>About Page</Link>
                    <Suspense fallback={<div>Loading ...</div>}>
                        <Routes>
                            <Route element={<MainPage/>} path={'/'} />
                            <Route element={<AboutPage/>} path={'/about'} />
                        </Routes>
                    </Suspense>
            </div>
        </BrowserRouter>
    )
};