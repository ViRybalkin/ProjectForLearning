import {AppStoreTypes} from "app";
import {getArticleListSearch} from "../getArticleListSearch";

describe('Тестирование селектора getArticleListSearch', () => {
    test('getArticleListSearch должен вернуть корректные данные', () => {
        const state = {
            articleList: {
                search: 'search'
            },
        };
        const result = getArticleListSearch({
            articleList: {
                search: 'search'
            },
        } as AppStoreTypes);

        expect(result).toEqual(state.articleList.search);
    });
})