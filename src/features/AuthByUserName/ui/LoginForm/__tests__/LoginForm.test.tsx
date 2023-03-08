import { act, render, screen } from '@testing-library/react';
import { LoginForm } from 'features/AuthByUserName';
import userEvent from '@testing-library/user-event';
import { StoreProvider } from 'app';

jest.mock('features/AuthByUserName/config/selector', () => ({
  getUserName: jest.fn(),
  getUserPassword: jest.fn(),
}));
describe('Тестирование формы логина', () => {
  const onClose = jest.fn();
  const user = userEvent.setup();
  const setup = () => {
    render(
      <StoreProvider>
        <LoginForm onClose={onClose} />
      </StoreProvider>
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

  test('Нажатие на сохранить должно вызвать функцию onClose', async () => {
    setup();

    const saveBtn = screen.getByTestId('saveBtnId');

    await act(async () => {
      await user.click(saveBtn);
    });

    expect(onClose).toBeCalledTimes(1);
  });
});
