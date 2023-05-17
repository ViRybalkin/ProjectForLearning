import { render, screen } from '@testing-library/react';
import { JestProvider } from 'app/providers/JestProvider';
import NotFound from '../NotFound';

describe('Тестирование страницы NotFound', () => {
  const setup = () => {
    render(
      <JestProvider>
        <NotFound />
      </JestProvider>
    );
  };

  test('Страница должна отрендериться', () => {
    setup();

    const page = screen.getByTestId('NotFoundTestId');

    expect(page).toBeInTheDocument();
  });
});
