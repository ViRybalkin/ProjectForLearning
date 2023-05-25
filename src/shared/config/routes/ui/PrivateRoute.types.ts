import {ReactElement} from "react";
import {RolesTypes} from "@/entities/User";

export interface PrivateRouteProps {
    children: ReactElement;
    isAuth: boolean,
    roles?: Array<RolesTypes>
}