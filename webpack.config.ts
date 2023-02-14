import path from 'path';
import {BuildEnvType, WebpackBuilder, WebpackBuildOption} from "./config";



export default (env: BuildEnvType) => {
    const mode = env.mode || 'development';
    const port = env.port || 3000;
    const isDev = mode === 'development'

    const webpackBuildOption: WebpackBuildOption = {
        mode: mode,
        port: port,
        isDev: isDev,
        path: {
            entry: path.resolve(__dirname, 'src', 'index.tsx'),
            output: path.resolve(__dirname,'dist'),
            html: path.resolve(__dirname, 'public', 'index.html'),
            src: path.resolve(__dirname, 'src')
        }
    }

    return WebpackBuilder(webpackBuildOption);
};