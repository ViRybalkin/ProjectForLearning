import {ReactElement} from "react";
import {RolesTypes} from "entities";

export interface PrivateRouteProps {
    children: ReactElement;
    isAuth: boolean,
    roles?: Array<RolesTypes>
}