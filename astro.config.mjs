// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// User GitHub Pages: https://maribacelo.github.io/
// CI overrides --site / --base via actions/configure-pages when needed.
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

