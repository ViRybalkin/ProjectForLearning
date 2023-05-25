import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { JestProvider } from '@/app/providers/JestProvider';
import * as Selectors from '../../../config/selector/getError';
import LoginForm from '../LoginForm';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  // @ts-ignore
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
}));

jest.mock('features/AuthByUserName/config/selector', () => ({
  // @ts-ignore
  ...jest.requireActual('features/AuthByUserName/config/selector'),
  __esModule: true,
}));

describe('Тестирование формы логина', () => {
  const onClose = jest.fn();
  const user = userEvent.setup();

  const setup = () => {
    render(
      <JestProvider>
        <LoginForm onClose={onClose} />
      </JestProvider>
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Нажатие на закрыть должно вызвать функцию onClose', async () => {
    setup();

    const closeBtn = screen.getByTestId('closeBtnId');

    await act(async () => {
      await user.click(closeBtn);
    });

    expect(onClose).toBeCalledTimes(1);
  });

  test('Нажатие на сохранить должно вызвать функцию setUserData', async () => {
    setup();
    const passInput = screen.getByTestId('passwordInputId');
    const nameInput = screen.getByTestId('usernameInputId');
    const saveBtn = screen.getByTestId('saveBtnId');

    await user.type(passInput, 'name');
    await user.type(nameInput, '123123');
    await user.click(saveBtn);

    expect(mockDispatch).toBeCalledWith({
      payload: { password: 'name', username: '123123' },
      type: 'authByUserName/setUserData',
    });
  });

  test('Если loading равен true кнопка должна быть заблокирована', async () => {
    // jest.spyOn(Selectors, 'getIsLoading').mockImplementation(() => true);
    setup();
    const saveBtn = screen.getByTestId('saveBtnId');

    expect(saveBtn).toBeDisabled();
  });

  test('error должен отобразиться', async () => {
    const error = 'error text';
    jest.spyOn(Selectors, 'getError').mockImplementation(() => error);
    setup();
    const errorText = screen.getByText(error);

    expect(errorText).toBeInTheDocument();
  });
});
