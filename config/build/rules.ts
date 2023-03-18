import webpack from 'webpack';
import {styleLoader} from './loaders/styleLoader';

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
    use: [
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      }
    ],
    exclude: /node_modules/,
  };

  const refreshRule = {
    test: /\.(js|jsx|tsx)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            plugins: [isDev && require.resolve('react-refresh/babel')].filter(Boolean),
          },
        },
      ],
  }

  const sassRules = styleLoader(isDev);
  return [
    svgRules,
    fileRules,
    refreshRule,
    typescriptRules,
    sassRules,
  ];
};
