import { defineConfig } from 'vite'
import glsl from 'vite-plugin-glsl';

// vite.config.js
export default defineConfig({
  plugins: [glsl()],
  server: {
    host: 'localhost',
    cors: '*',
    hmr: {
      host: 'localhost',
      protocol: 'ws',
    },
  },
  build: {
    minify: true,
    manifest: true,
    rollupOptions: {
      input: './src/main.js',
      output: {
        format: 'umd',
        entryFileNames: 'main.js',
        esModule: false,
        compact: true,
        globals: {
          jquery: '$',
        },
      },
      external: ['jquery'],
    },
  },
})
