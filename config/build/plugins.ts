import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const Plugins = (htmlPath: string, isDev:boolean): webpack.WebpackPluginInstance[] => {
    return  [
        new HtmlWebpackPlugin({template: htmlPath}),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__ : JSON.stringify(isDev)
        })
    ]
}