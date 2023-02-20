import { render, screen } from '@testing-library/react';
import { JestProvider } from 'app';
import { NavBarLink } from '__mocks__';
import { NavBar } from '../NavBar';

describe('Тестирование компонент NavBar', () => {
  const setup = (className?: string) => {
    render(
      <JestProvider>
        <NavBar className={className} links={NavBarLink} />
      </JestProvider>,
    );
  };

  test('NavBar должен отрендериться', () => {
    setup();

    const navBar = screen.getByTestId('navBarId');

    expect(navBar).toBeInTheDocument();
  });

  test('themeSwitcher должен отрендериться из компонента NavBar', () => {
    setup();

    const themeSwitcher = screen.getByTestId('themeSwitcherId');

    expect(themeSwitcher).toBeInTheDocument();
  });

  test('тег nav должен отрендериться из компонента NavBar', () => {
    setup();

    const nav = screen.getByTestId('navTagNavBarId');

    expect(nav).toBeInTheDocument();
  });

  test('nav должен содержать корректный класс', () => {
    setup();

    const nav = screen.getByTestId('navTagNavBarId');

    expect(nav).toHaveClass('btnWrapper');
  });

  test('header должен содержать корректный класс', () => {
    setup();

    const navBar = screen.getByTestId('navBarId');

    expect(navBar).toHaveClass('navBar');
  });

  test('если передан класс header должен содержать корректный класс', () => {
    setup('someClass');

    const navBar = screen.getByTestId('navBarId');

    expect(navBar).toHaveClass('someClass');
  });
});
