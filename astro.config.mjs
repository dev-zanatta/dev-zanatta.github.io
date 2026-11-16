import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://zntt.dev.br',
  output: 'static',
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
