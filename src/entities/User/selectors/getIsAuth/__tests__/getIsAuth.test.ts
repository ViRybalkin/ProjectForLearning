import { AppStoreTypes } from 'app';
import { getIsAuth } from '../getIsAuth';

describe('Тестирование селектора getIsAuth', () => {
  test('getIsAuth должен вернуть корректные данные', () => {
    const state = {
      user: {
        isAuth: true,
      },
    };
    const result = getIsAuth({
      user: {
        isAuth: true,
      },
    } as AppStoreTypes);

    expect(result).toEqual(state.user.isAuth);
  });
});
