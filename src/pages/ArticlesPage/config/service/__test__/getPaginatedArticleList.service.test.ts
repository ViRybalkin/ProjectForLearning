import {$api} from "@/shared/config/api/api";

const mockedAxios = jest.mocked($api, true)
jest.mock('../getArticles.service');
jest.mock('../../slice/articlesSlice');
jest.mock('../../selectors', () => ({
    // @ts-ignore
    ...jest.requireActual('../../selectors'),
    __esModule: true,
}));

describe('Тестирование сервиса getPaginatedArticleList', () => {
    const extraData = {
        api: mockedAxios,
        navigate: jest.fn()
    }

    const dispatch = jest.fn();
    const getState = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    })

    // test('если !isLoading && hasMore && page функция должна быть вызвана', async () => {
    //     jest.spyOn(Selector, 'getArticleListIsLoading').mockReturnValue(false);
    //     jest.spyOn(Selector, 'getArticleListHasMore').mockReturnValue(true);
    //     jest.spyOn(Selector, 'getArticleListPage').mockReturnValue(2);
    //
    //     const action = getPaginatedArticleListService()
    //
    //     await action(dispatch, getState, extraData);
    //
    //     expect(getArticleList).toHaveBeenCalledWith({});
    //     expect(ArticleListAction.setPage).toHaveBeenCalledWith(3);
    // });
    //
    // test('если isLoading равен true функции не должны быть вызваны', async () => {
    //     jest.spyOn(Selector, 'getArticleListIsLoading').mockReturnValue(true);
    //     jest.spyOn(Selector, 'getArticleListHasMore').mockReturnValue(true);
    //     jest.spyOn(Selector, 'getArticleListPage').mockReturnValue(2);
    //
    //     const action = getPaginatedArticleListService()
    //
    //     await action(dispatch, getState, extraData);
    //
    //     expect(getArticleList).not.toBeCalled();
    //     expect(ArticleListAction.setPage).not.toBeCalled();
    // });
});