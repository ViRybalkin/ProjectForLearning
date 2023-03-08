import {AppStoreTypes} from "app";
import {getUserPassword} from "../getUserPassword";

describe('Тестирование селектора getUserName', () => {
  test('getUserName должен вернуть корректные данные', () => {
    const state = {
      login: {
        username: 'name',
        password: '123',
      },
    };
    const count = getUserPassword({
      login: {
        username: 'name',
        password: '123',
      },
    } as AppStoreTypes);

    expect(count).toEqual(state.login.password);
  });
})