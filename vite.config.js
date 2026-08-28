import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync, existsSync, mkdirSync } from 'fs';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'spa-404-fallback',
      closeBundle() {
        const distDir = resolve(__dirname, 'dist');
        const indexPath = resolve(distDir, 'index.html');
        const fallbackPath = resolve(distDir, '404.html');
        if (existsSync(indexPath)) {
          copyFileSync(indexPath, fallbackPath);
        }
      },
    },
  ],
  base: '/',
});
