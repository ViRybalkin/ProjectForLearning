import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __BASE_URL__: JSON.stringify('http://localhost:8000'),
    __IS_DEV__: JSON.stringify(true),
    __PROJECT__: JSON.stringify('storybook'),
  },
  plugins: [
    react(),
    svgr({
      exportAsDefault: true,
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: '/src',
      },
    ],
  },
});
