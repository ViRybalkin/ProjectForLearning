import {AppStoreTypes} from "app";
import {getError} from "../getError";

describe('Тестирование селектора getError', () => {
  test('getError должен вернуть корректные данные', () => {
    const state = {
      profile: {
        error: 'text error'
      },
    };
    const result = getError({
      profile: {
        error: 'text error'
      },
    } as AppStoreTypes);

    expect(result).toEqual(state.profile.error);
  });
})