import { getCounter } from '../getCounter';

describe('тестирование функции getCounter', () => {
  test('getCounter должен вернуть корректные данные', () => {
    const state = {
      counter: {
        value: 10,
      },
    };
    const count = getCounter({
      counter: {
        value: 10,
      },
    });

    expect(count).toEqual(state.counter);
  });
});
