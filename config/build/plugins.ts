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
                            baseUrl,
                            isDev,
                            isReport,
                            path,
                            project
                        }: WebpackBuildOption): webpack.WebpackPluginInstance[] => {

    const plugins = [
        new HtmlWebpackPlugin({template: path.html}),
        new webpack.ProgressPlugin(),
        new webpack.DefinePlugin({
            __BASE_URL__: JSON.stringify(baseUrl),
            __IS_DEV__: JSON.stringify(isDev),
            __PROJECT__: JSON.stringify(project)
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: isReport ? 'server' : 'disabled',
            openAnalyzer: isReport,
        }),
        new CircularDependencyPlugin({
            cwd: process.cwd(),
            exclude: /node_modules/,
            failOnError: true,
        })
    ];

    if (isDev) {
        plugins.push(new ReactRefreshWebpackPlugin())
        plugins.push(new ForkTsCheckerWebpackPlugin())
    }
    if (!isDev) {
        plugins.push(new MiniCssExtractPlugin({
            chunkFilename: 'css/[name].[contenthash:8].css',
            filename: 'css/[name].[contenthash:8].css',
        }))
        plugins.push(new CopyPlugin({patterns: [{from: path.fromLocale, to: path.toLocale}]}),)
    }

    return plugins;
}
