import {AppStoreTypes} from "app/providers/StoreProvider";
import {getArticleListIsLoading} from "../getArticleListIsLoading";

describe('Тестирование селектора getArticleListIsLoading', () => {
    test('getArticleListIsLoading должен вернуть корректные данные', () => {
        const state = {
            articleList: {
                isLoading: true
            },
        };
        const result = getArticleListIsLoading({
            articleList: {
                isLoading: true
            },
        } as AppStoreTypes);

        expect(result).toEqual(state.articleList.isLoading);
    });
})