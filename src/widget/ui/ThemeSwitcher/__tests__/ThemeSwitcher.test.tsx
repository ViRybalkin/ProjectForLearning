import { render, screen } from '@testing-library/react';
import { JestProvider } from 'app';
import userEvent from '@testing-library/user-event';
import { ThemeSwitcher } from '../ThemeSwitcher';

describe('Тестирование компонента NavBar', () => {
  const user = userEvent.setup();
  const setup = () => {
    render(
      <JestProvider>
        <ThemeSwitcher />
      </JestProvider>
    );
  };

  test('Нажатие на иконку темы должно изменить иконку', async () => {
    setup();
    const lightIconFound = screen.getByTestId('lightIconId');
    const darkIconNotFound = screen.queryByTestId('darkIconId');

    expect(lightIconFound).toBeInTheDocument();
    expect(darkIconNotFound).not.toBeInTheDocument();

    const btn = screen.getByTestId('themeSwitcherId');
    await user.click(btn);

    const lightIconNotFound = screen.queryByTestId('lightIconId');
    const darkIconFound = screen.getByTestId('darkIconId');

    expect(darkIconFound).toBeInTheDocument();
    expect(lightIconNotFound).not.toBeInTheDocument();
  });
});