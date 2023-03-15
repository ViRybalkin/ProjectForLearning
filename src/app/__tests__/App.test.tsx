import { render } from '@testing-library/react';
import { App, JestProvider, StoreProvider } from 'app';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  // @ts-ignore
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
}));

describe('Тестирование компонента App', () => {
  const setup = () => {
    render(
      <StoreProvider>
        <JestProvider>
          <App />
        </JestProvider>
      </StoreProvider>
    );
  };

  test('рендер компонента должен вызвать функцию initUserData', () => {
    setup();

    expect(mockDispatch).toBeCalledWith({ payload: undefined, type: 'user/initUserData' });
  });
});
