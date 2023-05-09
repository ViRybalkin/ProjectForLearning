import React, {memo, ReactElement} from 'react';
import {Navigate} from 'react-router-dom';
import {routerPath} from "../../../config/routes/Routes";

export const PrivateRoute = memo(({children, isAuth}: { children: ReactElement; isAuth: boolean }) => {
    if (!isAuth) {
        return <Navigate to={routerPath.main} replace/>;
    }

    return children;
});