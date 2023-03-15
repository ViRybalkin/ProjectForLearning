import { render } from '@testing-library/react';
import { App, JestProvider } from 'app';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  // @ts-ignore
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
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
    setup();

    expect(mockDispatch).toBeCalledWith({ payload: undefined, type: 'user/initUserData' });
  });
});
