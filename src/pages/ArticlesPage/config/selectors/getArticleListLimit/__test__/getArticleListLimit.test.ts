import {AppStoreTypes} from "app";
import {getArticleListLimit} from "../getArticleListLimit";

describe('Тестирование селектора getArticleListLimit', () => {
    test('getArticleListLimit должен вернуть корректные данные', () => {
        const state = {
            articleList: {
                limit: 2
            },
        };
        const result = getArticleListLimit({
            articleList: {
                limit: 2
            },
        } as AppStoreTypes);

        expect(result).toEqual(state.articleList.limit);
    });
})