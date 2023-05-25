import {AppStoreTypes} from "@/app/providers/StoreProvider";
import {getArticleListInited} from "../getArticleListInited";

describe('Тестирование селектора getArticleListError', () => {
    test('getArticleListError должен вернуть корректные данные', () => {
        const state = {
            articleList: {
                _inited: true
            },
        };
        const result = getArticleListInited({
            articleList: {
                _inited: true
            },
        } as AppStoreTypes);

        expect(result).toEqual(state.articleList._inited);
    });
})