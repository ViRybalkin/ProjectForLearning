import {articleListMocks} from "@/__mocks__";
import {getArticleList} from "../../service/getArticles.service";
import {ArticleListAction, ArticleListReducer} from "../articlesSlice";

describe('Тестирование слайса articleSlice', () => {
    test('должен вернуть начальное состояние', () => {
        expect(ArticleListReducer(undefined, {type: undefined})).toEqual(
            {
                _inited: false,
                entities: {},
                error: '',
                hasMore: false,
                ids: [],
                isLoading: false,
                limit: 9,
                page: 1,
                search: '',
                sortDirection: 'asc',
                sortField: 'views',
                type: 'all',
                view: 'SMALL',

            }
        )
    })

    test('стейт должен содержать корректные данные после вызова setArticleListView', () => {
        expect(ArticleListReducer(undefined, ArticleListAction.setArticleListView('BIG'))).toEqual(
            {
                _inited: false,
                entities: {},
                error: '',
                hasMore: false,
                ids: [],
                isLoading: false,
                limit: 9,
                page: 1,
                search: '',
                sortDirection: 'asc',
                sortField: 'views',
                type: 'all',
                view: 'BIG',
            }
        )
    });
    test('вызов setArticleListView должен вызвать localStorage', () => {
        jest.spyOn(Storage.prototype, 'setItem');
        Storage.prototype.setItem = jest.fn();
        expect(ArticleListReducer(undefined, ArticleListAction.setArticleListView('BIG'))).toEqual(
            {
                _inited: false,
                entities: {},
                error: '',
                hasMore: false,
                ids: [],
                isLoading: false,
                limit: 9,
                page: 1,
                search: '',
                sortDirection: 'asc',
                sortField: 'views',
                type: 'all',
                view: 'BIG',
            }
        )

        expect(localStorage.setItem).toHaveBeenCalledWith("articleView", "BIG");
    });

    test('вызов initArticleListView должен изменить стейт', () => {
        jest.spyOn(Storage.prototype, 'getItem');
        Storage.prototype.setItem = jest.fn();
        expect(ArticleListReducer(undefined, ArticleListAction.initArticleListView())).toEqual(
            {
                _inited: false,
                entities: {},
                error: '',
                hasMore: false,
                ids: [],
                isLoading: false,
                limit: 4,
                page: 1,
                search: '',
                sortDirection: 'asc',
                sortField: 'views',
                type: 'all',
                view: 'BIG',
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
                error: undefined,
                isLoading: true,
            })
    });

    test('articleSlice fulfilled должен изменить данные', () => {
        const action = {
            meta: {
                arg: {
                    replace: true,
                }
            },
            payload: articleListMocks,
            type: getArticleList.fulfilled.type
        };

        const state = {
            entities: {
                "1": articleListMocks[0]
            },
            ids: ['1'],
            isLoading: true,
        }

        // @ts-ignore
        expect(ArticleListReducer(state, action)).toEqual(
            {
                _inited: true,
                entities: {
                    "1": articleListMocks[0]
                },
                hasMore: true,
                ids: ['1'],
                isLoading: false,
            }
        )
    });

    test('articleSlice rejected должен изменить данные', () => {
        const action = {
            error: {
                message: 'error'
            },
            type: getArticleList.rejected.type
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
                _inited: false,
                entities: {},
                error: '',
                hasMore: false,
                ids: [],
                isLoading: false,
                limit: 9,
                page: 10,
                search: '',
                sortDirection: 'asc',
                sortField: 'views',
                type: 'all',
                view: 'SMALL',
            }
        )
    })

    test('если view равен small limit равен 9', () => {
        expect(ArticleListReducer(undefined, ArticleListAction.setArticleListView('SMALL'))).toEqual(
            {
                _inited: false,
                entities: {},
                error: '',
                hasMore: false,
                ids: [],
                isLoading: false,
                limit: 9,
                page: 1,
                search: '',
                sortDirection: 'asc',
                sortField: 'views',
                type: 'all',
                view: 'SMALL',
            }
        )
    });

    test('если view равен big limit равен 4', () => {
        ArticleListReducer(undefined, ArticleListAction.setArticleListView('BIG'));
        expect(ArticleListReducer(undefined, ArticleListAction.initArticleListView())).toEqual(
            {
                _inited: false,
                entities: {},
                error: '',
                hasMore: false,
                ids: [],
                isLoading: false,
                limit: 4,
                page: 1,
                search: '',
                sortDirection: 'asc',
                sortField: 'views',
                type: 'all',
                view: 'BIG',
            }
        )
    })
})