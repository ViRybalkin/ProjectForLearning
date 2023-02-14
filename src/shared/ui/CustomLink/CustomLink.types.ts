import {LinkProps} from "react-router-dom";

export interface CustomLinkProps extends LinkProps{
    name: string
    className?: string
}