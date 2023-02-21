import React, { Suspense } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18nStory';
import '../../src/app/styles/index.scss';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', icon: 'circlehollow', title: 'light' },
        { value: 'dark', icon: 'circle', title: 'dark' },
      ],
      showName: true,
    },
  },
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', title: 'English' },
        { value: 'ru', title: 'Русский' },
      ],
      showName: true,
    },
  },
};

const withI18next = (Story, context) => {
  const { theme } = context.globals;
  const storyTheme = theme === 'dark' ? 'light' : 'dark';
  const { locale } = context.globals;

  React.useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <MemoryRouter>
      <Suspense fallback={<div>loading translations...</div>}>
        <I18nextProvider i18n={i18n}>
          <div className={`app ${storyTheme}`}>
            <Story />
          </div>
        </I18nextProvider>
      </Suspense>
    </MemoryRouter>
  );
};

export const decorators = [withI18next];
