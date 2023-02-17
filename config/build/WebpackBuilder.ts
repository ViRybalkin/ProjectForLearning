import webpack from 'webpack';
import { Plugins } from './plugins';
import { Rules } from './rules';
import { Extensions } from './Extensions';
import { WebpackBuildOption } from './types';
import { buildDevServer } from './buildDevServer';

export const WebpackBuilder = (options: WebpackBuildOption): webpack.Configuration => ({
  mode: options.mode,
  entry: options.path.entry,
  output: {
    path: options.path.output,
    filename: '[name].[contenthash].js',
    clean: true,
  },
  plugins: Plugins(options.path.html, options.isDev),
  module: {
    rules: Rules(options.isDev),
  },
  devtool: options.isDev ? 'inline-source-map' : undefined,
  resolve: Extensions(options.path.src),
  devServer: options.isDev ? buildDevServer(options.port) : undefined,
});
