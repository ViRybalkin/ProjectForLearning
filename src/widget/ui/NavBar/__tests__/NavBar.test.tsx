import { act, render, screen } from '@testing-library/react';
import { JestProvider } from 'app';
import userEvent from '@testing-library/user-event';
import { NavBar } from '../NavBar';

describe('Тестирование компонента NavBar', () => {
  const user = userEvent.setup();

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

  test('Нажатие на войти должно открыть модальное окно', async () => {
    setup();

    const loginBtn = screen.getByTestId('loginBtnId');
    const modal = screen.queryByTestId('modalTestId');

    expect(modal).not.toBeInTheDocument();

    await act(async () => {
      await user.click(loginBtn);
    });
    const modalFound = screen.getByTestId('modalTestId');

    expect(modalFound).toBeInTheDocument();
  });
});