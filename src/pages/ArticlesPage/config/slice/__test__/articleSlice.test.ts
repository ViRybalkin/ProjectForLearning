import {articleListMocks} from "app/__mocks__";
import {getArticleList} from "../../service/getArticles.service";
import {ArticleListAction, ArticleListReducer} from "../articlesSlice";

describe('Тестирование слайса articleSlice', () => {
    test('должен вернуть начальное состояние', () => {
        expect(ArticleListReducer(undefined, {type: undefined})).toEqual(
            {
                isLoading: false,
                error: '',
                view: 'SMALL',
                ids: [],
                limit: 9,
                page: 1,
                hasMore: false,
                entities: {},
            }
        )
    })

    test('стейт должен содержать корректные данные после вызова setArticleListView', () => {
        expect(ArticleListReducer(undefined, ArticleListAction.setArticleListView('BIG'))).toEqual(
            {
                error: '',
                isLoading: false,
                entities: {},
                ids: [],
                hasMore: false,
                page: 1,
                limit: 9,
                view: 'BIG'
            }
        )
    });
    test('вызов setArticleListView должен вызвать localStorage', () => {
        jest.spyOn(Storage.prototype, 'setItem');
        Storage.prototype.setItem = jest.fn();
        expect(ArticleListReducer(undefined, ArticleListAction.setArticleListView('BIG'))).toEqual(
            {
                error: '',
                isLoading: false,
                entities: {},
                ids: [],
                hasMore: false,
                page: 1,
                limit: 9,
                view: 'BIG'
            }
        )

        expect(localStorage.setItem).toHaveBeenCalledWith("articleView", "BIG");
    });

    test('вызов initArticleListView должен изменить стейт', () => {
        jest.spyOn(Storage.prototype, 'getItem');
        Storage.prototype.setItem = jest.fn();
        expect(ArticleListReducer(undefined, ArticleListAction.initArticleListView())).toEqual(
            {
                error: '',
                isLoading: false,
                entities: {},
                ids: [],
                hasMore: false,
                page: 1,
                limit: 4,
                view: 'BIG'
            }
        )
        expect(localStorage.getItem).toHaveBeenCalledWith("articleView");
    })

    test('articleSlice pending должен изменить isLoading на true', () => {
        const action = {
            type: getArticleList.pending.type,
        };

        const state = {
            isLoading: false,
        };

        // @ts-ignore
        expect(ArticleListReducer(state, action)).toEqual(
            {
                isLoading: true,
                error: undefined,
            })
    });

    test('articleSlice fulfilled должен изменить данные', () => {
        const action = {
            type: getArticleList.fulfilled.type,
            payload: articleListMocks
        };

        const state = {
            isLoading: true,
            entities: {
                "1": articleListMocks[0]
            },
            ids: ['1'],
        }

        // @ts-ignore
        expect(ArticleListReducer(state, action)).toEqual(
            {
                entities: {
                    "1": articleListMocks[0]
                },
                ids: ['1'],
                isLoading: false,
                hasMore: true,
            }
        )
        // expect(ArticleListReducer(state, action)).toEqual(1)
    });

    test('articleSlice rejected должен изменить данные', () => {
        const action = {
            type: getArticleList.rejected.type,
            error: {
                message: 'error'
            }
        };

        const state = {
            isLoading: false,
        };

        // @ts-ignore
        expect(ArticleListReducer(state, action)).toEqual(
            {
                error: 'error',
                isLoading: false,
            })
    });
})