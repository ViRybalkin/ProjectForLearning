import { render, screen } from '@testing-library/react';
import { JestProvider } from 'app/providers/JestProvider';
import MainPage from '../MainPage';

describe('Тестирование страницы MainPage', () => {
  const setup = () => {
    render(
      <JestProvider>
        <MainPage />
      </JestProvider>
    );
  };

  test('Страница должна отрендериться', () => {
    setup();

    const page = screen.getByTestId('mainPageTestId');

    expect(page).toBeInTheDocument();
  });
});
