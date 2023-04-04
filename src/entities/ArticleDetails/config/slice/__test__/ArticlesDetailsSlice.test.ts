import {getArticleDetails} from "entities";
import {ArticleDetailsReducer} from "../ArticleDetailsSlice";

describe('Тестирование слайса ArticleDetails', () => {
  test('должен вернуть начальное состояние', () => {
    expect(ArticleDetailsReducer(undefined, {type: undefined})).toEqual(
      {
        data: undefined,
        error: undefined,
        isLoading: false,
      }
    )
  });

  test('getArticle pending должен изменить isLoading на true', () => {
    const action = {
      type: getArticleDetails.pending.type,
    };

    const state = {
      isLoading: false,
    };

    expect(ArticleDetailsReducer(state, action)).toEqual(
      {
        data: undefined,
        isLoading: true,
        error: undefined,
      })
  });

  test('getArticleDetails fulfilled должен изменить данные', () => {
    const action = {
      type: getArticleDetails.fulfilled.type,
      payload: 'some data',
    };

    const state = {
      isLoading: true,
      data: undefined,
    };

    expect(ArticleDetailsReducer(state, action)).toEqual(
      {
        data: 'some data',
        isLoading: false,
      })
  });

  test('getArticleDetails rejected должен изменить данные', () => {
    const action = {
      type: getArticleDetails.rejected.type,
      payload: 'some error',
    };

    const state = {
      isLoading: false,
    };

    expect(ArticleDetailsReducer(state, action)).toEqual(
      {
        error: 'some error',
        isLoading: false,
      })
  });

})