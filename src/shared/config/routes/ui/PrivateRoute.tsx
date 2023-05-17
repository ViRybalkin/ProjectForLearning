import React, {memo, useMemo} from 'react';
import {Navigate} from 'react-router-dom';
import {getUserRoles} from "entities/User";
import {useSelector} from "react-redux";
import {routerPath} from "../../../config/routes/Routes";
import {PrivateRouteProps} from "./PrivateRoute.types";

export const PrivateRoute = memo(({children, isAuth, roles}: PrivateRouteProps) => {
    const userRoles = useSelector(getUserRoles);

    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true;
        }
        ;

        return roles.some((role) => {
            return userRoles?.includes(role);
        })
    }, [roles, userRoles])

    if (!isAuth) {
        return <Navigate to={routerPath.main} replace/>;
    }

    if (!hasRequiredRoles) {
        return <Navigate to={routerPath.forbiddenPage} replace/>;
    }

    return children;
});