import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { ThemeProvider } from '@/shared/providers/ThemeProviders';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { App } from '@/app/App';
import '@/shared/i18n/i18nConfig';

const app = document.getElementById('root')!;
const root = createRoot(app);

root.render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>
);
