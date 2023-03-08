import { AppStoreTypes } from 'app';
import { getCounterValue } from '../getCounterValue';

describe('тестирование функции getCounterValue', () => {
  test('getCounterValue должна вернуть корректные данные', () => {
    const state = {
      counter: {
        value: 10,
      },
    };
    const count = getCounterValue(state as AppStoreTypes);

    expect(count).toEqual(state.counter.value);
  });
});
