import webpack from 'webpack';
import { styleLoader } from './loaders/styleLoader';

export const Rules = (isDev: boolean): webpack.RuleSetRule[] => {
  const svgRules = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  };

  const fileRules = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const typescriptRules = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const sassRules = styleLoader(isDev);
  return [
    svgRules,
    fileRules,
    typescriptRules,
    sassRules,
  ];
};
