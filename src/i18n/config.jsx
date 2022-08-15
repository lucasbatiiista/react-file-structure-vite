import i18n from 'i18next';
import languageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import translations from './locales';

const i18nConfig = {
    resources: translations,
    fallbackLng: 'pt-BR',
    defaultNS: 'translations',
};

i18n.use(languageDetector).use(initReactI18next).init(i18nConfig);

export default i18n;
