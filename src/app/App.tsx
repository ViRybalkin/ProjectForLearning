import './styles/index.scss'
import { Link, Route, Routes} from "react-router-dom";
import { Suspense} from "react";
import {classNames, UseTheme} from "app/helpers";
import {routerConfig} from "shared/config/routes/Routes";

export const App = () => {
    const {theme, onToggleTheme} = UseTheme();
    return (
            <div className={classNames('app', {}, [theme])}>
                <button onClick={onToggleTheme}>Change theme</button>
                <Link to={'/'} > Main Page</Link>
                <Link to={'/about'}>About Page</Link>
                    <Suspense fallback={<div>Loading ...</div>}>
                        <Routes>
                            {Object.values(routerConfig).map((rout) => {
                                return <Route key={rout.path} element={rout.element} path={rout.path} />
                            })}
                        </Routes>
                    </Suspense>
            </div>
    )
};