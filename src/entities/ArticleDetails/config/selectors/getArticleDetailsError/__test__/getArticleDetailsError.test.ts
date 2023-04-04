import {AppStoreTypes} from "app";
import {getArticleDetailsError} from "../getArticleDetailsError";

describe('Тестирование селектора getArticleDetailsError', () => {
  test('getArticleDetailsError должен вернуть корректные данные', () => {
    const state = {
      articleDetails: {
        error: 'text error'
      },
    };
    const result = getArticleDetailsError({
      articleDetails: {
        error: 'text error'
      },
    } as AppStoreTypes);

    expect(result).toEqual(state.articleDetails.error);
  });
})