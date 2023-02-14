import {ResolveOptions} from "webpack";

export const Extensions = ():ResolveOptions => {
    return {
            extensions: ['.tsx', '.ts', '.js'],
        }
}