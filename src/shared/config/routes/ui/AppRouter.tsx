import React, {memo, Suspense, useCallback} from 'react';
import {Route, Routes} from 'react-router-dom';
import {PageLoader} from 'widget/ui/PageLoader';
import {useSelector} from "react-redux";
import {getIsAuth} from "entities/User";
import {Loader} from "../../../ui/Loader";
import {PrivateRoute} from "../ui/PrivateRoute";
import {routerConfig, RouterProps} from '../Routes';

const AppRouter = memo(() => {
    const isAuth = useSelector(getIsAuth);

    const RouteWithWrapper = useCallback((route: RouterProps) => {
        const element = (
            <Suspense fallback={<Loader/>}>{route.element}</Suspense>
        )
        return (
            <Route
                key={route.path}
                element={route.isAuth ?
                    <PrivateRoute roles={route.roles} isAuth={isAuth}>{element}</PrivateRoute> : element}
                path={route.path}/>
        )
    }, [isAuth])


    return (
        <Suspense fallback={<PageLoader/>}>
            <Routes>
                {Object.values(routerConfig).map(RouteWithWrapper)}
            </Routes>
        </Suspense>
    )
})

export {AppRouter};
