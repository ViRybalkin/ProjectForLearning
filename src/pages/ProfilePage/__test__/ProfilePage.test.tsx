import { render, screen } from '@testing-library/react';
import { JestProvider } from 'app';
import ProfilePage from 'pages/ProfilePage/ProfilePage';

describe('Тестирование страницы MainPage', () => {
  const setup = () => {
    render(
      <JestProvider>
        <ProfilePage />
      </JestProvider>
    );
  };

  test('Страница должна отрендериться', () => {
    setup();

    const page = screen.getByTestId('profilePageTestId');

    expect(page).toBeInTheDocument();
  });
});
