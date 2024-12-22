import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: 'gzip', // Or 'brotliCompress' for Brotli
    }),
  ],
  server: {
    port: 3000
  },
  build: {
    sourcemap: false,
  },
})
