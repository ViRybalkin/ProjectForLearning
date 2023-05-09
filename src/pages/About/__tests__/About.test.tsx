import { render, screen } from '@testing-library/react';
import { JestProvider } from 'app';
import About from '../About';

describe('Тестирование страницы about', () => {
  const setup = () => {
    render(
      <JestProvider>
        <About />
      </JestProvider>
    );
  };

  test('Страница должна отрендериться', () => {
    setup();

    const page = screen.getByTestId('aboutTestId');

    expect(page).toBeInTheDocument();
  });
});
