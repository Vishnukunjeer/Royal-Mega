import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path'; // You may need to install @types/node: npm install -D @types/node
export default defineConfig({
  server:{
    host: true
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // This maps '@' to the 'src' directory
      '@': path.resolve(__dirname, './src'),
    },
  },
});