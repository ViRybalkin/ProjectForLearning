import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import CircularDependencyPlugin from 'circular-dependency-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import CopyPlugin from "copy-webpack-plugin";
import {WebpackBuildOption} from "./types";


export const Plugins = ({
                            path,
                            isDev,
                            isReport,
                            baseUrl,
                            project
                        }: WebpackBuildOption): webpack.WebpackPluginInstance[] => {

    const plugins = [
        new HtmlWebpackPlugin({template: path.html}),
        new webpack.ProgressPlugin(),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __BASE_URL__: JSON.stringify(baseUrl),
            __PROJECT__: JSON.stringify(project)
        }),
        new BundleAnalyzerPlugin({
            openAnalyzer: isReport,
            analyzerMode: isReport ? 'server' : 'disabled',
        }),
        new CircularDependencyPlugin({
            exclude: /node_modules/,
            failOnError: true,
            cwd: process.cwd(),
        })
    ];

    if (isDev) {
        plugins.push(new ReactRefreshWebpackPlugin())
        plugins.push(new ForkTsCheckerWebpackPlugin())
    }
    if (!isDev) {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }))
        plugins.push(new CopyPlugin({patterns: [{from: path.fromLocale, to: path.toLocale}]}),)
    }

    return plugins;
}
