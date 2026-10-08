// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// Project GitHub Pages: https://maribacelo.github.io/maribacelo/
// CI overrides --site / --base via actions/configure-pages when needed.
export default defineConfig({
  site: 'https://maribacelo.github.io',
  base: '/maribacelo',
  output: 'static',
  trailingSlash: 'always',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});

