import { render, screen } from '@testing-library/react';
import { JestProvider } from 'app';
import ProfilePage from 'pages/ProfilePage/ProfilePage';
import * as Selectors from 'entities/Profile/config/selectors';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  // @ts-ignore
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
}));

jest.mock('entities/Profile/config/selectors', () => ({
  getProfileData: jest.fn(),
  // @ts-ignore
  ...jest.requireActual('entities/Profile/config/selectors'),
  __esModule: true,
}));

describe('Тестирование страницы MainPage', () => {
  const setup = () => {
    render(
      <JestProvider>
        <ProfilePage />
      </JestProvider>
    );
  };

  test('Страница должна отрендериться', () => {
    jest.spyOn(Selectors, 'getProfileData').mockImplementation(() => undefined);
    setup();

    const page = screen.getByTestId('profilePageTestId');

    expect(page).toBeInTheDocument();
  });
});
