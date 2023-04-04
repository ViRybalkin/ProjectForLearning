import {AppStoreTypes} from "app";
import {getArticleDetailsIsLoading} from "../getArticleDetailsIsLoading";

describe('Тестирование селектора getArticleDetailsIsLoading', () => {
  test('getArticleDetailsIsLoading должен вернуть корректные данные', () => {
    const state = {
      articleDetails: {
        isLoading: true
      },
    };
    const result = getArticleDetailsIsLoading({
      articleDetails: {
        isLoading: true
      },
    } as AppStoreTypes);

    expect(result).toEqual(state.articleDetails.isLoading);
  });
})