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
