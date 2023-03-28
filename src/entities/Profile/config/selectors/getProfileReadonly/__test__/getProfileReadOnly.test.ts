import {AppStoreTypes} from "app";
import {getProfileReadOnly} from "../getProfileReadOnly";

describe('Тестирование селектора getProfileReadOnly', () => {
  test('getProfileReadOnly должен вернуть корректные данные', () => {
    const state = {
      profile: {
        readonly: true,
      },
    };
    const result = getProfileReadOnly({
      profile: {
        readonly: true,
      },
    } as AppStoreTypes);

    expect(result).toEqual(state.profile.readonly);
  });
})