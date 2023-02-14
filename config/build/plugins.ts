import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

export const Plugins = (htmlPath: string): webpack.WebpackPluginInstance[] => {
    return  [
        new HtmlWebpackPlugin({template: htmlPath}),
        new webpack.ProgressPlugin(),
    ]
}