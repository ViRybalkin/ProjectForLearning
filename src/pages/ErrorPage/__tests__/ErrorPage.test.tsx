import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { JestProvider } from '@/app/providers/JestProvider';
import ErrorPage from '../ui/ErrorPage/ErrorPage';

describe('Тестирование страницы ErrorPage', () => {
  const errorName = 'Error';
  const errorInfo = 'Info';
  const errorMessage = 'Message';
  const user = userEvent.setup();

  const setup = () => {
    render(
      <JestProvider>
        <ErrorPage errorName={errorName} errorInfo={errorInfo} errorMessage={errorMessage} />
      </JestProvider>
    );
  };

  test('Тип ошибки должен содержать корректный текст', () => {
    setup();

    const text = screen.getByText(`Error name: ${errorName}`);

    expect(text).toBeInTheDocument();
  });

  test('Текст ошибки должен содержать корректный текст', () => {
    setup();

    const text = screen.getByText(`Error message: ${errorMessage}`);

    expect(text).toBeInTheDocument();
  });

  test('Текст ошибки должен содержать корректный текст', () => {
    setup();

    const text = screen.getByText(errorInfo);

    expect(text).toBeInTheDocument();
  });

  test('Нажатие на перезагрузку должно вызвать функцию перезагрузки', async () => {
    const mock = jest.fn();
    const location = new URL(window.location.href);
    // @ts-ignore
    location.reload = mock;

    // @ts-ignore
    delete window.location;
    // @ts-ignore
    window.location = location;

    setup();

    const btn = screen.getByRole('button');

    await waitFor(async () => {
      await user.click(btn);
    });

    expect(mock).toBeCalledTimes(1);
  });
});
