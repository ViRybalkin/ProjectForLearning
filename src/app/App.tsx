import '../styles/index.scss'
import { Link, Route, Routes} from "react-router-dom";
import {lazy, Suspense} from "react";
import {UseTheme} from "../helpers/useTheme";

const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const AboutPage = lazy(() => import('../pages/About/About'));


export const App = () => {
    const {theme, onToggleTheme} = UseTheme();
    return (
            <div className={`app ${theme}`}>
                <button onClick={onToggleTheme}>Change theme</button>
                <Link to={'/'} > Main Page</Link>
                <Link to={'/about'}>About Page</Link>
                    <Suspense fallback={<div>Loading ...</div>}>
                        <Routes>
                            <Route element={<MainPage/>} path={'/'} />
                            <Route element={<AboutPage/>} path={'/about'} />
                        </Routes>
                    </Suspense>
            </div>
    )
};