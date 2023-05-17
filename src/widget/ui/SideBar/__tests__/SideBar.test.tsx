import { render, screen, waitFor } from '@testing-library/react';
import { JestProvider } from 'app/providers/JestProvider';
import userEvent from '@testing-library/user-event';
import { SideBar } from '../SideBar';

describe('Тестирование компонента SideBar', () => {
  const user = userEvent.setup();
  const setup = () => {
    render(
      <JestProvider>
        <SideBar />
      </JestProvider>
    );
  };

  test('Компонент должна отрендериться', () => {
    setup();

    const sideBar = screen.getByTestId('sideBarTestId');

    expect(sideBar).toBeInTheDocument();
  });

  test('Нажатие на развернут должно показать корректную иконку', async () => {
    setup();
    const rightIcon = screen.queryByTestId('DoubleArrowRight');
    const leftIconNotFound = screen.queryByTestId('DoubleArrowLeft');
    const btn = screen.getByTestId('toggleSideBarBtn');

    expect(rightIcon).toBeInTheDocument();
    expect(leftIconNotFound).not.toBeInTheDocument();

    await waitFor(async () => {
      await user.click(btn);
    });

    const leftIcon = screen.getByTestId('DoubleArrowLeft');

    expect(leftIcon).toBeInTheDocument();
    expect(rightIcon).not.toBeInTheDocument();
  });

  test('Нажатие на развернут должно показать корректный класс', async () => {
    setup();
    const sideBar = screen.getByTestId('sideBarTestId');
    const btn = screen.getByTestId('toggleSideBarBtn');
    expect(sideBar).toHaveClass('collapsed');

    await waitFor(async () => {
      await user.click(btn);
    });
    expect(sideBar).not.toHaveClass('collapsed');
  });
});
