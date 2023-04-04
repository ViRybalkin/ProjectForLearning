import {AppStoreTypes} from "app";
import {getArticleDetailsData} from "../getArticleDetailsData";

describe('Тестирование селектора getArticleDetailsIsLoading', () => {
  test('getArticleDetailsIsLoading должен вернуть корректные данные', () => {
    const state = {
      articleDetails: {
        data: {
          id: '1',
          img: '',
          blocks: [],
          createdAt: '1',
          type: [],
          subtitle: '',
          title: 'title',
          views: 123,
        }
      }
    };
    const result = getArticleDetailsData({
      articleDetails: {
        data: {
          id: '1',
          img: '',
          blocks: [],
          createdAt: '1',
          type: [],
          subtitle: '',
          title: 'title',
          views: 123,
        }
      }
    } as unknown as AppStoreTypes);

    expect(result).toEqual(state.articleDetails.data);
  });
})