import {AppStoreTypes} from "app";
import {getUserName} from "../getUserName";

describe('Тестирование селектора getUserName', () => {
  test('getUserName должен вернуть корректные данные', () => {
    const state = {
      login: {
        username: 'name',
        password: '123',
      },
    };
    const count = getUserName({
      login: {
        username: 'name',
        password: '123',
      },
    } as AppStoreTypes);

    expect(count).toEqual(state.login.username);
  });
})