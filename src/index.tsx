import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, App } from 'app';
import 'shared/config/i18n/i18nConfig';

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
