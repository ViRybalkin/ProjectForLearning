import { render, screen } from '@testing-library/react';
import { JestProvider } from '@/app/providers/JestProvider';
import * as Selectors from '@/entities/Profile';
import ProfilePage from '../ProfilePage/ProfilePage';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  // @ts-ignore
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
}));

jest.mock('@/entities/Profile', () => ({
  getProfileData: jest.fn(),
  // @ts-ignore
  ...jest.requireActual('@/entities/Profile'),
  __esModule: true,
}));

describe('Тестирование страницы ProfilePage', () => {
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
