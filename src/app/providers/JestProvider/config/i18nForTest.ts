import i18n, {ResourceLanguage} from 'i18next';
import {initReactI18next} from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const ns = ['translation', 'about', 'error', 'links', 'mainPage', 'profilePage', 'articlesDetails', 'forbidden'];
// Для тестирования интернализации добавить нужные языки
const supportedLngs = ['ru', 'en'];
const resources = ns.reduce<Record<string, ResourceLanguage>>((acc, n) => {
    supportedLngs.forEach((lng) => {
        if (!acc[lng]) acc[lng] = {};
        acc[lng] = {
            ...acc[lng],
            // eslint-disable-next-line global-require,import/no-dynamic-require
            [n]: require(`../../../../../public/locales/${lng}/${n}.json`),
        };
    });
    return acc;
}, {});

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        defaultNS: 'translation',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        ns,
        resources,
        supportedLngs,
    });

export default i18n;
