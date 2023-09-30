// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import languageDetector from "i18next-browser-languagedetector";
import translationEN from "./locales/en.json"; // English translations
import translationAR from "./locales/ar.json"; // Arabic translations

// Initialize i18next
const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationAR,
  },
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",

    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspend: false,
    },
  });

export default i18n;
