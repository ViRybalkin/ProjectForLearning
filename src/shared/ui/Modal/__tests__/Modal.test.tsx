import { render, screen, waitFor } from '@testing-library/react';
import { JestProvider } from 'app/providers/JestProvider';
import userEvent from '@testing-library/user-event';
import { Modal } from '../Modal';

describe('Тестирования модального окна', () => {
  const setIsOpenMock = jest.fn();
  const user = userEvent.setup();
  const setup = (isOpen = true, onEscapeClose = true, onClickOutside = true, lazy = false) => {
    render(
      <JestProvider>
        <Modal
          lazy={lazy}
          isOpen={isOpen}
          onClose={setIsOpenMock}
          onEscapeClose={onEscapeClose}
          onOverlayClose={onClickOutside}>
          <p>someText</p>
        </Modal>
      </JestProvider>
    );
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Если модальное окно открыто оно должно быть видно', () => {
    setup();

    const modal = screen.getByTestId('modalTestId');

    expect(modal).toBeVisible();
  });

  test('Если модальное окно закрыто оно не должно быть видно', () => {
    setup(false);

    const modal = screen.getByTestId('modalTestId');

    waitFor(() => {
      expect(modal).not.toBeVisible();
    });
  });

  test('Дочерний элемент должен быть виден', () => {
    setup(true);

    const children = screen.getByText('someText');

    expect(children).toBeVisible();
  });

  test('Если onEscapeClose равен тру нажатие на escape должно вызвать функцию закрытия модалки', async () => {
    setup();

    await user.keyboard('[Escape]');
    expect(setIsOpenMock).toBeCalledTimes(1);
  });

  test('Если onEscapeClose равен false нажатие на escape не должно вызвать функцию закрытия модалки', async () => {
    setup(true, false);

    await user.keyboard('[Escape]');
    expect(setIsOpenMock).not.toBeCalled();
  });

  test('Если onOverlayClose равен тру нажатие на overlay должно вызвать функцию закрытия модалки', async () => {
    setup();
    const overlay = screen.getByTestId('overlayTestId');

    await user.click(overlay);

    expect(setIsOpenMock).toBeCalledTimes(1);
  });

  test('Если onOverlayClose равен false нажатие на overlay не должно вызвать функцию закрытия модалки', async () => {
    setup(true, false, false);
    const overlay = screen.getByTestId('overlayTestId');

    await user.click(overlay);

    expect(setIsOpenMock).not.toBeCalled();
  });

  test('Если передан пропс lazy модалки не должно быть в дом дереве', () => {
    setup(false, true, true, true);

    const modal = screen.queryByTestId('modalTestId');

    expect(modal).not.toBeInTheDocument();
  });

  test('Если не передан пропс lazy модалка должно быть в дом дереве', () => {
    setup(true, true, true, true);

    const modal = screen.getByTestId('modalTestId');

    expect(modal).toBeInTheDocument();
  });
});
