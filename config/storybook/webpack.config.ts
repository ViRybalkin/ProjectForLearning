import webpack, {DefinePlugin, RuleSetRule} from 'webpack';
import path from 'path';
import {styleLoader} from '../build/loaders/styleLoader';

export default ({config}: { config: webpack.Configuration }) => {

  config.resolve?.modules?.push(path.resolve(__dirname, '..', '..', 'src'));
  config.resolve?.extensions?.push('.ts', '.tsx');

  // eslint-disable-next-line no-param-reassign
  // @ts-ignore
  config?.module?.rules = config.module?.rules?.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return {...rule, exclude: /\.svg$/i};
    }

    return rule;
  });

  config?.plugins?.push(
    new DefinePlugin({
      __IS_DEV__: true,
      __BASE_URL__: true,
    }),
  );
  config.resolve!.alias = {
    'entities': path.resolve(__dirname, '../../src/entities')
  }

  config?.module?.rules?.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });
  config?.module?.rules?.push(styleLoader(true));

  return config;
};
