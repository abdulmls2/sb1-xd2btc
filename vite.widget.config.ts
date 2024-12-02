import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '',
  define: {
    'process.env.VITE_SUPABASE_URL': JSON.stringify(process.env.VITE_SUPABASE_URL),
    'process.env.VITE_SUPABASE_ANON_KEY': JSON.stringify(process.env.VITE_SUPABASE_ANON_KEY)
  },
  server: {
    port: 5173,
    strictPort: true
  },
  build: {
    lib: {
      entry: 'src/widget/main.tsx',
      name: 'chatbotWidget',
      fileName: (format) => `chatbot-widget.${format}.js`
    },
    outDir: 'dist/widget',
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        format: 'umd',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    },
    sourcemap: true,
    emptyOutDir: true
  }
});