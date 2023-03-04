import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { JestProvider, StoreProvider } from 'app';
import { Counter } from '../Counter';

describe('тестирование компонента Counter', () => {
  const initialState = {
    counter: {
      value: 10,
    },
  };
  const user = userEvent.setup();
  const setup = () => {
    render(
      <StoreProvider initialState={initialState}>
        <JestProvider>
          <Counter />
        </JestProvider>
      </StoreProvider>
    );
  };
  test('Counter должен отобразить дефолтные значения', () => {
    setup();
    const count = screen.getByTestId('countId');

    expect(count).toHaveTextContent(String(initialState.counter.value));
  });

  test('Нажатие на increment должно увеличить число', async () => {
    setup();
    const count = screen.getByTestId('countId');
    const increment = screen.getByText('Increment');

    await user.click(increment);

    expect(count).toHaveTextContent('11');
  });

  test('Нажатие на decrement должно увеличить число', async () => {
    setup();
    const count = screen.getByTestId('countId');
    const decrement = screen.getByText('Decrement');

    await user.click(decrement);

    expect(count).toHaveTextContent('9');
  });

  test('Нажатие на increment by amount должно увеличить число на введеное', async () => {
    setup();
    const count = screen.getByTestId('countId');
    const increment = screen.getByText('increment By Amount');
    const input = screen.getByRole('spinbutton');

    await user.type(input, '12');
    await user.click(increment);

    expect(count).toHaveTextContent('22');
  });
});
