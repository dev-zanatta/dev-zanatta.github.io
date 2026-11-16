import { ui, defaultLocale, locales } from './ui.js';

export function normalizeLocale(locale) {
  return locales.includes(locale) ? locale : defaultLocale;
}

export function useTranslations(locale) {
  const l = normalizeLocale(locale);
  return function t(key) {
    return ui[l][key] ?? ui[defaultLocale][key] ?? key;
  };
}

export function localizePath(locale, path = '/') {
  const l = normalizeLocale(locale);
  return l === defaultLocale ? path : `/${l}${path}`;
}

export function pickLocalized(value, locale) {
  if (value === null || typeof value !== 'object') return value;
  const l = normalizeLocale(locale);
  return value[l] ?? value[defaultLocale];
}

// Segmento traduzido da rota de detalhes: /projetos/<slug>/, /en/projects/<slug>/, /es/proyectos/<slug>/
export const projectSegment = { pt: 'projetos', en: 'projects', es: 'proyectos' };

export function projectPath(locale, slug) {
  const l = normalizeLocale(locale);
  return localizePath(l, `/${projectSegment[l]}/${slug}/`);
}

// Mesmo projeto nos 3 idiomas — alimenta hreflang e o seletor de bandeiras.
export function projectAlternates(slug) {
  return Object.fromEntries(locales.map(l => [l, projectPath(l, slug)]));
}
