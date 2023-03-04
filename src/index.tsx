import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App, ErrorBoundary, StoreProvider, ThemeProvider } from 'app';
import 'shared/config/i18n/i18nConfig';

render(
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root')
);
