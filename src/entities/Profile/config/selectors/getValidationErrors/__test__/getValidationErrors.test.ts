import {AppStoreTypes} from "app";
import {getValidationErrors} from "../getValidationErrors";

describe('Тестирование селектора getValidationErrors', () => {
  test('getValidationErrors должен вернуть корректные данные', () => {
    const state = {
      profile: {
       validationError: ['INCORRECT_USER_DATA'],
      },
    };
    const result = getValidationErrors({
      profile: {
        validationError: ['INCORRECT_USER_DATA']
      },
    } as AppStoreTypes);

    expect(result).toEqual(state.profile.validationError);
  });
})