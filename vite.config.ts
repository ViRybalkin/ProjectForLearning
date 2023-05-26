import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      exportAsDefault: true,
    }),
  ],
  resolve: {
    alias: {
      app: path.resolve('src/app'),
      shared: path.resolve('src/shared'),
      pages: path.resolve('src/pages'),
      entities: path.resolve('src/entities'),
      widget: path.resolve('src/widget'),
      features: path.resolve('src/features'),
    },
  },
  define: {
    __BASE_URL__: JSON.stringify('http://localhost:8000'),
    __IS_DEV__: JSON.stringify(true),
    __PROJECT__: JSON.stringify('storybook'),
  },
});
