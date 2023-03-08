import {AppStoreTypes} from "app";
import {getUserData} from "../getUserData";

describe('Тестирование селектора getUserData', () => {
  test('getUserData должен вернуть корректные данные', () => {
    const state = {
      login: {
        username: 'name',
        password: '123',
      },
    };
    const count = getUserData({
      login: {
        username: 'name',
        password: '123',
      },
    } as AppStoreTypes);

    expect(count).toEqual(state.login);
  });
})