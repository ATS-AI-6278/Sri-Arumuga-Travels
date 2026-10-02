import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import { prerenderHomePlugin } from './scripts/prerenderHomePlugin.ts';

const rootDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => {
  // Ensure VITE_SITE_URL from .env* is available to the prerender plugin via process.env
  const env = loadEnv(mode, rootDir, 'VITE_');
  if (env.VITE_SITE_URL) {
    process.env.VITE_SITE_URL = env.VITE_SITE_URL;
  }

  return {
    plugins: [react(), tailwindcss(), prerenderHomePlugin()],
    resolve: {
      alias: {
        '@': rootDir,
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
    preview: {
      host: '0.0.0.0',
      port: 4173,
    },
  };
});
