import {AppStoreTypes} from "app/providers/StoreProvider";
import {getArticleListPage} from "../getArticleListPage";

describe('Тестирование селектора getArticleListPage', () => {
    test('getArticleListPage должен вернуть корректные данные', () => {
        const state = {
            articleList: {
                page: 1
            },
        };
        const result = getArticleListPage({
            articleList: {
                page: 1
            },
        } as AppStoreTypes);

        expect(result).toEqual(state.articleList.page);
    });
})