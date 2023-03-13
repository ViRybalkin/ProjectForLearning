import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { StoreProvider } from 'app';
import LoginForm from '../LoginForm';

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
});
