import { render } from '@testing-library/react';
import { JestProvider } from 'app/providers/JestProvider';
import { App } from 'app/App';
import * as Selectors from 'entities/User/config/selectors/getInited/getInited';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  // @ts-ignore
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
}));

jest.mock('entities/User/selectors/getInited', () => ({
  getInited: jest.fn().mockReturnValue(true),
  // @ts-ignore
  ...jest.requireActual('entities/User/selectors/getInited'),
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

  test('рендер компонента должен вызвать функцию initUserData', () => {
    jest.spyOn(Selectors, 'getInited').mockImplementation(() => true);

    setup();

    expect(mockDispatch).toBeCalledWith({ payload: undefined, type: 'user/initUserData' });
  });
});
