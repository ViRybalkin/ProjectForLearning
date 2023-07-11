import { render, screen } from '@testing-library/react';
import { JestProvider } from '@/app/providers/JestProvider';
import { App } from '../App';
import * as LoadingSelector from '../../entities/User';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  // @ts-ignore
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
}));

jest.mock('../../entities/User', () => ({
  // @ts-ignore
  ...jest.requireActual('../../entities/User'),
  __esModule: true,
}));

describe('Тестирование компонента App', () => {
  const setup = () => {
    render(
      <JestProvider>
        <App />
      </JestProvider>
    );
  };

  test('если isInited true компонент должен отрендериться', () => {
    jest.spyOn(LoadingSelector, 'getInited').mockImplementation(() => true);
    setup();

    const app = screen.getByTestId('appId');

    expect(app).toBeInTheDocument();
  });
  test('если isInited false лоадер должен отрендериться', () => {
    jest.spyOn(LoadingSelector, 'getInited').mockImplementation(() => false);
    setup();

    const app = screen.getByTestId('loaderTestId');

    expect(app).toBeInTheDocument();
  });
});
