import {AppStoreTypes} from "app";
import {getArticleListSortDirection} from "../getArticleListSortDirection";

describe('Тестирование селектора getArticleListSortDirection', () => {
    test('getArticleListSortDirection должен вернуть корректные данные', () => {
        const state = {
            articleList: {
                sortDirection: 'asc'
            },
        };
        const result = getArticleListSortDirection({
            articleList: {
                sortDirection: 'asc'
            },
        } as AppStoreTypes);

        expect(result).toEqual(state.articleList.sortDirection);
    });
})