import {AppStoreTypes} from "app/providers/StoreProvider";
import {getArticleListView} from "../getArticleListView";

describe('Тестирование селектора getArticleListView', () => {
    test('getArticleListView должен вернуть корректные данные', () => {
        const state = {
            articleList: {
                view: 'SMALL'
            },
        };
        const result = getArticleListView({
            articleList: {
                view: 'SMALL'
            },
        } as AppStoreTypes);

        expect(result).toEqual(state.articleList.view);
    });
})