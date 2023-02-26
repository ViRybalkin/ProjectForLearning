import { render, screen } from '@testing-library/react';
import { JestProvider } from 'app';
import { NavBar } from '../NavBar';

describe('Тестирование компонента NavBar', () => {
  const setup = () => {
    render(
      <JestProvider>
        <NavBar />
      </JestProvider>
    );
  };

  test('Компонент должен отрендериться', () => {
    setup();

    const navBar = screen.getByTestId('navBarId');

    expect(navBar).toBeInTheDocument();
  });

  test('Количество ссылок должно быть корректным', () => {
    setup();

    const navBar = screen.getAllByRole('link');

    expect(navBar).toHaveLength(2);
  });
});
