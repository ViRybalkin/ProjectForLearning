import { FC, Suspense } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from 'app';
import i18n from './i18nForTest';

const JestProvider: FC<any> = ({ children }) => {
  return (
    <MemoryRouter>
      <ThemeProvider>
        <I18nextProvider i18n={i18n}>
          <Suspense fallback=''>{children}</Suspense>
        </I18nextProvider>
      </ThemeProvider>
    </MemoryRouter>
  );
};

export { JestProvider };
