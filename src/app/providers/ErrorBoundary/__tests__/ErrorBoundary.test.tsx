import { render } from '@testing-library/react';
import { ErrorBoundary } from '../ErrorBoundary';

jest.spyOn(global.console, 'error').mockImplementation();
describe('Тестирование компонента NavBar', () => {
  const ProblemChild = () => {
    throw new Error('Error thrown from problem child');
    // eslint-disable-next-line no-unreachable
    return <div>Error</div>;
  };

  const setup = () => {
    render(
      <ErrorBoundary>
        <ProblemChild />
      </ErrorBoundary>
    );
  };

  test('Если вызвана ошибка componentDidCatch должен быть вызван', () => {
    jest.spyOn(ErrorBoundary.prototype, 'componentDidCatch');
    expect(ErrorBoundary.prototype.componentDidCatch).not.toBeCalled();
    setup();

    expect(ErrorBoundary.prototype.componentDidCatch).toBeCalled();
  });
});
