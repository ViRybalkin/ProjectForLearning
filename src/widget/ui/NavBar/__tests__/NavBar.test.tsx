import * as Selectors from 'entities/User';
import { act, render, screen } from '@testing-library/react';
import { JestProvider } from 'app/providers/JestProvider';
import userEvent from '@testing-library/user-event';
import { NavBar } from '../NavBar';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  // @ts-ignore
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
}));

const userData = {
  username: 'username',
  id: '1',
  avatar: 'avatar',
  isAuth: true,
};

jest.mock('entities', () => ({
  getIsAuth: jest.fn().mockImplementation(() => false),
  getUser: jest.fn().mockImplementation(() => userData),
  // @ts-ignore
  ...jest.requireActual('entities'),
  __esModule: true,
}));

describe('Тестирование компонента NavBar', () => {
  const user = userEvent.setup();

  const setup = () => {
    render(
      <JestProvider>
        <NavBar />
      </JestProvider>
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

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

  test('Нажатие на закрыть модального окна', async () => {
    setup();

    const loginBtn = screen.getByTestId('loginBtnId');

    await act(async () => {
      await user.click(loginBtn);
    });

    const closeBtn = screen.getByTestId('closeBtnId');

    await user.click(closeBtn);
  });

  test('Если пользователь авторизован модальное окно должно отсутствовать', async () => {
    jest.spyOn(Selectors, 'getIsAuth').mockImplementation(() => true);
    setup();

    const modal = screen.queryByTestId('modalTestId');

    expect(modal).not.toBeInTheDocument();
  });

  // TODO разобраться почему мок не работает
  // test('Если пользователь авторизован нажатие на выйти должно вызвать функцию', async () => {
  //   jest.spyOn(Selectors, 'getIsAuth').mockImplementation(() => true);
  //   setup();
  //
  //   const logoutBtn = screen.getByTestId('logoutBtnId');
  //
  //   await act(async () => {
  //     await user.click(logoutBtn);
  //   });
  //
  //   expect(mockDispatch).toBeCalledWith({ payload: undefined, type: 'user/logout' });
  // });
});
