import { act, render, screen } from '@testing-library/react';
import { JestProvider } from 'app';
import { App } from '../App';

describe('Тестирование компонента NavBar', () => {
  const setup = () => {
    render(
      <JestProvider>
        <App />
      </JestProvider>
    );
  };

  test('Страница должна отрендериться', () => {
    act(() => {
      setup();
    });

    const app = screen.getByTestId('appId');

    expect(app).toBeInTheDocument();
  });
});
