import './styles/index.scss'
import { Route, Routes} from "react-router-dom";
import { Suspense} from "react";
import {classNames, UseTheme} from "app/helpers";
import {linkConfig, routerConfig} from "shared/config";
import {NavBar} from "widget/ui";

export const App = () => {
    const {theme, onToggleTheme} = UseTheme();
        return (
        <div className={classNames('app', {}, [theme])}>
            <NavBar links={linkConfig}/>
            <button onClick={onToggleTheme}>Change theme</button>
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