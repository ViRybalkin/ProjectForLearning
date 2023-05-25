import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { ThemeProvider } from '@/app/providers/ThemeProviders';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { App } from '@/app/App';
import '@/shared/config/i18n/i18nConfig';

render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
