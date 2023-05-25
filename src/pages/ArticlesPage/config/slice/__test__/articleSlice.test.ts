import {articleListMocks} from "@/__mocks__";
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
                _inited: false,
                search: '',
                sortDirection: 'asc',
                sortField: 'views',
                type: 'all',

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
                view: 'BIG',
                _inited: false,
                search: '',
                sortDirection: 'asc',
                sortField: 'views',
                type: 'all',
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
                view: 'BIG',
                _inited: false,
                search: '',
                sortDirection: 'asc',
                sortField: 'views',
                type: 'all',
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
                view: 'BIG',
                _inited: false,
                search: '',
                sortDirection: 'asc',
                sortField: 'views',
                type: 'all',
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
            payload: articleListMocks,
            meta: {
                arg: {
                    replace: true,
                }
            }
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
                _inited: true,
            }
        )
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

    test('Вызов setPage должен изменить стейт', () => {
        expect(ArticleListReducer(undefined, ArticleListAction.setPage(10))).toEqual(
            {
                error: '',
                isLoading: false,
                entities: {},
                ids: [],
                hasMore: false,
                page: 10,
                limit: 9,
                view: 'SMALL',
                _inited: false,
                search: '',
                sortDirection: 'asc',
                sortField: 'views',
                type: 'all',
            }
        )
    })

    test('если view равен small limit равен 9', () => {
        expect(ArticleListReducer(undefined, ArticleListAction.setArticleListView('SMALL'))).toEqual(
            {
                error: '',
                isLoading: false,
                entities: {},
                ids: [],
                hasMore: false,
                page: 1,
                limit: 9,
                view: 'SMALL',
                _inited: false,
                search: '',
                sortDirection: 'asc',
                sortField: 'views',
                type: 'all',
            }
        )
    });

    test('если view равен big limit равен 4', () => {
        ArticleListReducer(undefined, ArticleListAction.setArticleListView('BIG'));
        expect(ArticleListReducer(undefined, ArticleListAction.initArticleListView())).toEqual(
            {
                error: '',
                isLoading: false,
                entities: {},
                ids: [],
                hasMore: false,
                page: 1,
                limit: 4,
                view: 'BIG',
                _inited: false,
                search: '',
                sortDirection: 'asc',
                sortField: 'views',
                type: 'all',
            }
        )
    })
})