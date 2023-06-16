import path from 'path';
import { BuildEnvType, WebpackBuilder, WebpackBuildOption } from './config';

export default (env: BuildEnvType) => {
  const mode = env.mode || 'development';
  const port = env.port || 3000;
  const baseUrl = env.baseUrl || 'http://localhost:8000';
  const isDev = mode === 'development';
  const webpackAnalyze = env.report || false;

  const webpackBuildOption: WebpackBuildOption = {
    baseUrl,
    isDev,
    isReport: webpackAnalyze,
    mode,
    path: {
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      fromLocale: path.resolve(__dirname, 'public', 'locales'),
      html: path.resolve(__dirname, 'public', 'index.html'),
      output: path.resolve(__dirname, 'dist'),
      src: path.resolve(__dirname, 'src'),
      toLocale: path.resolve(__dirname, 'dist', 'locales'),
    },
    port,
    project: 'frontend',
  };

  return WebpackBuilder(webpackBuildOption);
};
