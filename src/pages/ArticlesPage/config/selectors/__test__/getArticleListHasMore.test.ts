import {AppStoreTypes} from "@/app/providers/StoreProvider";
import {getArticleListHasMore} from "../getArticleListHasMore";

describe('Тестирование селектора getArticleListHasMore', () => {
    test('getArticleListHasMore должен вернуть корректные данные', () => {
        const state = {
            articleList: {
                hasMore: true
            },
        };
        const result = getArticleListHasMore({
            articleList: {
                hasMore: true
            },
        } as AppStoreTypes);

        expect(result).toEqual(state.articleList.hasMore);
    });
})