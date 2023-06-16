import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export const buildDevServer = (port: number): DevServerConfiguration => ({
  historyApiFallback: true,
  hot: true,
  open: {
    app: {
      name: 'Safari',
    },
  },
  port,
});
