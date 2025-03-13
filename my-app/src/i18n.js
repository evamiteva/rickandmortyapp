// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en/translation.json'; // English translations
import esTranslation from './locales/es/translation.json'; // Spanish translations

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation, // Assign English translations
      },
      es: {
        translation: esTranslation, // Assign Spanish translations
      },
    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
