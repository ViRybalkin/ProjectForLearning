import { BrowserRouter } from 'react-router-dom';
import { App, ErrorBoundary, StoreProvider, ThemeProvider } from 'app';
import 'shared/config/i18n/i18nConfig';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container!);
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
