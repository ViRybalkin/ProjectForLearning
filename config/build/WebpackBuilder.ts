import webpack from 'webpack';
import {Plugins} from './plugins';
import {Rules} from './rules';
import {Extensions} from './Extensions';
import {WebpackBuildOption} from './types';
import {buildDevServer} from './buildDevServer';

export const WebpackBuilder = (options: WebpackBuildOption): webpack.Configuration => ({
    devServer: options.isDev ? buildDevServer(options.port) : undefined,
    devtool: options.isDev ? 'eval-source-map' : undefined,
    entry: options.path.entry,
    mode: options.mode,
    module: {
        rules: Rules(options.isDev),
    },
    output: {
        clean: true,
        filename: '[name].[contenthash].js',
        path: options.path.output,
        publicPath: '/',
    },
    plugins: Plugins(options),
    resolve: Extensions(options.path.src),
});
