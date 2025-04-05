import { defineConfig } from 'vite';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './index.html',           // Login page
        homepage: './homepage.html',    // Homepage
        admin: './admin-dashboard.html' // Admin dashboard
      }
    }
  }
});
