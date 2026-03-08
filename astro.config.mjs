// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://qivox1.github.io',
  base: '/42grad',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
