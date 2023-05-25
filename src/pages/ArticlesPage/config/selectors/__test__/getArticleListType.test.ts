import {AppStoreTypes} from "@/app/providers/StoreProvider";
import {getArticleListType} from "../getArticleListType";

describe('Тестирование селектора getArticleListType', () => {
    test('getArticleListType должен вернуть корректные данные', () => {
        const state = {
            articleList: {
                type: 'all'
            },
        };
        const result = getArticleListType({
            articleList: {
                type: 'all'
            },
        } as AppStoreTypes);

        expect(result).toEqual(state.articleList.type);
    });
})