import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  define: {
    // Polyfill 'process' in the browser context
    process: {
      env: {
        NODE_ENV: JSON.stringify('production'), // Ensure this is set to 'production' in production builds
      },
    },
  },
  resolve: {
    alias: {
      // Ensure Vite uses the 'process' polyfill
      process: path.resolve(__dirname, 'node_modules/process/browser'),
    },
  },
});
