import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, App, ErrorBoundary } from 'app';
import 'shared/config/i18n/i18nConfig';

render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById('root')
);
