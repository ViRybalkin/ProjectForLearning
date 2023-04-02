import { AppStoreTypes } from 'app';
import { getInited } from '../getInited';

describe('Тестирование селектора getInited', () => {
  test('getInited должен вернуть корректные данные', () => {
    const state = {
      user: {
        _inited: true,
      },
    };
    const result = getInited({
      user: {
        _inited: true,
      },
    } as AppStoreTypes);

    expect(result).toEqual(state.user._inited);
  });
});
