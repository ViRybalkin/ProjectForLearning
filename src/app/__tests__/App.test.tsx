import { render } from '@testing-library/react';
import { JestProvider } from '@/app/providers/JestProvider';
import { App } from '../App';

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
