import { render, screen } from '@testing-library/react';
import { PageLoader } from '../PageLoader';

describe('Тестирование компонента PageLoader', () => {
  const setup = () => {
    render(
      <PageLoader />,
    );
  };

  test('PageLoader должен отрендерится', () => {
    setup();

    const pageLoader = screen.getByTestId('pageLoaderTestId');
    expect(pageLoader).toBeInTheDocument();
  });

  test('PageLoader должен содержать корректный класс', () => {
    setup();

    const pageLoader = screen.getByTestId('pageLoaderTestId');
    expect(pageLoader).toHaveClass('pageLoader');
  });
});
