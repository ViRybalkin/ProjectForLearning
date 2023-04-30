import {AppStoreTypes} from "app";
import {getArticleListError} from "../getArticleListError";

describe('Тестирование селектора getArticleListError', () => {
    test('getArticleListError должен вернуть корректные данные', () => {
        const state = {
            articleList: {
                error: 'error'
            },
        };
        const result = getArticleListError({
            articleList: {
                error: 'error'
            },
        } as AppStoreTypes);

        expect(result).toEqual(state.articleList.error);
    });
})