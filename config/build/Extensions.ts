import {ResolveOptions} from "webpack";

export const Extensions = (path: string):ResolveOptions => {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        modules: [path,'node_modules'],
        mainFiles: ['index'],
        preferAbsolute: true,
        alias: {},
    }
}