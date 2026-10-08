// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// User/org GitHub Pages: https://maribacelo.github.io (base "/")
// Project Pages override via CLI: --site / --base from configure-pages
export default defineConfig({
  site: 'https://maribacelo.github.io',
  base: '/',
  output: 'static',
  trailingSlash: 'always',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
