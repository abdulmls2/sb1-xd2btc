// vite.widget.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '', // Correct for an embedded widget
  define: {
    'process.env.VITE_SUPABASE_URL': JSON.stringify(process.env.VITE_SUPABASE_URL),
    'process.env.VITE_SUPABASE_ANON_KEY': JSON.stringify(process.env.VITE_SUPABASE_ANON_KEY),
    'process.env': {} // Define an empty process.env to avoid errors
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/widget/main.tsx'), // Ensure correct entry path
      name: 'chatbotWidget',
      fileName: (format) => `chatbot-widget.${format}.js`
    },
    outDir: 'dist/widget', // Output to dist/widget
    rollupOptions: {
      external: ['react', 'react-dom'], // Don't bundle React/ReactDOM
      output: {
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