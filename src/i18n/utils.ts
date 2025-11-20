import { translations, type Language, type Translations } from './translations';

// Get translations for a specific language
export function getTranslations(lang: Language): Translations {
  return translations[lang];
}

// Get current language from localStorage or default to English
export function getCurrentLanguage(): Language {
  if (typeof window === 'undefined') return 'en';

  const stored = localStorage.getItem('language');
  if (stored === 'en' || stored === 'de') {
    return stored;
  }

  return 'en';
}

// Set current language in localStorage
export function setCurrentLanguage(lang: Language): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', lang);
  }
}
