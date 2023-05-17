import { render, screen } from '@testing-library/react';
import { Loader } from '../Loader';

describe('Тестирование компонента Loader', () => {
  const setup = (className?: string) => {
    render(<Loader className={className} />);
  };

  test('компонент должен отрендериться', () => {
    setup();

    const loader = screen.getByTestId('loaderTestId');

    expect(loader).toBeInTheDocument();
  });

  test('компонент должен содержать корректный класс', () => {
    setup();

    const loader = screen.getByTestId('loaderTestId');

    expect(loader).toHaveClass('ldsRing');
  });

  test('если передан класс компонент должен содержать корректный класс', () => {
    setup('someClass');

    const loader = screen.getByTestId('loaderTestId');

    expect(loader).toHaveClass('someClass');
    expect(loader).toHaveClass('ldsRing');
  });
});
