import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://dev-zanatta.github.io',
  output: 'static',
  outDir: './docs',
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
