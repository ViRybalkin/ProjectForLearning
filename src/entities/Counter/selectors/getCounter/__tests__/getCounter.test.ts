import { AppStoreTypes } from 'app';
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
    } as AppStoreTypes);

    expect(count).toEqual(state.counter);
  });
});
