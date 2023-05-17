import {AppStoreTypes} from "app/providers/StoreProvider";
import {getArticleListSortField} from "../getArticleListSortField";

describe('Тестирование селектора getArticleListSortField', () => {
    test('getArticleListSortField должен вернуть корректные данные', () => {
        const state = {
            articleList: {
                sortField: 'views'
            },
        };
        const result = getArticleListSortField({
            articleList: {
                sortField: 'views'
            },
        } as AppStoreTypes);

        expect(result).toEqual(state.articleList.sortField);
    });
})