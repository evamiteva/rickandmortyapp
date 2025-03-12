// src/i18n.js

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

// Language resources
const resources = {
  en: {
    translation: {
      "Character Name": "Character Name",
      "Status": "Status",
      "Species": "Species",
      "Gender": "Gender",
      "Origin": "Origin",
    }
  },
  de: {
    translation: {
      "Character Name": "Charakter Name",
      "Status": "Status",
      "Species": "Spezies",
      "Gender": "Geschlecht",
      "Origin": "Herkunft",
    }
  }
};

i18next.use(initReactI18next).init({
  resources,
  lng: "en",  // Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18next;
