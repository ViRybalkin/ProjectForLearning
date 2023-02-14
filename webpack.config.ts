import path from 'path';
import webpack from 'webpack';
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
            entry: path.resolve(__dirname, 'src', 'index.ts'),
            output: path.resolve(__dirname,'dist'),
            html: path.resolve(__dirname, 'public', 'index.html')
        }
    }

    const config: webpack.Configuration = WebpackBuilder(webpackBuildOption);

    return config;
};