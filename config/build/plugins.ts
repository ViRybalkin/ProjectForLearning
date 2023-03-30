import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
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
  new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].css',
  }),
  new webpack.DefinePlugin({
    __IS_DEV__: JSON.stringify(isDev),
    __BASE_URL__: JSON.stringify(baseUrl),
    __PROJECT__: JSON.stringify(project)
  }),
  new BundleAnalyzerPlugin({
    openAnalyzer: isReport,
    analyzerMode: isReport ? 'server' : 'disabled',
  }),
  ];

  if(isDev) {
    plugins.push(new ReactRefreshWebpackPlugin())
  }

  return plugins;
}
