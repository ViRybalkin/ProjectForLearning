import {$api} from "@/shared/api/api";
import * as ErrorHelper from "@/shared/helpers/error";
import {articleListMocks} from "@/__mocks__";
import {getArticleList} from "../getArticles.service";
// import * as Selector from '../../selectors'

const errorResponse = {data: {message: 'error'}}
const mockedAxios = jest.mocked($api, true)
jest.mock('shared/config/api/api');

jest.mock('shared/config/helpers/error', () => ({
    handleError: jest.fn().mockReturnValue(errorResponse),
}));

jest.mock('../../selectors', () => ({
    // @ts-ignore
    ...jest.requireActual('../../selectors'),
    __esModule: true,
}));
describe('Тестирование сервиса getArticles', () => {

    const extraData = {
        api: mockedAxios,
        navigate: jest.fn()
    }

    const dispatch = jest.fn();
    const getState = jest.fn();

    // beforeEach(() => {
    //     jest.clearAllMocks();
    //     jest.spyOn(Selector, 'getArticleListLimit').mockReturnValue(9);
    //     jest.spyOn(Selector, 'getArticleListType').mockReturnValue('all');
    //     jest.spyOn(Selector, 'getArticleListSearch').mockReturnValue('search');
    //     jest.spyOn(Selector, 'getArticleListSortDirection').mockReturnValue('asc');
    //     jest.spyOn(Selector, 'getArticleListSortField').mockReturnValue('views');
    //     jest.spyOn(Selector, 'getArticleListPage').mockReturnValue(2);
    // })


    test('статус запроса должен быть корректным', async () => {
        mockedAxios.get.mockReturnValue(Promise.resolve({data: articleListMocks}))
        const action = getArticleList({})

        const res = await action(dispatch, getState, extraData);

        expect(res.meta.requestStatus).toEqual('fulfilled')
    });

    test('если запрос вернул 200 данные должны быть корректны', async () => {
        mockedAxios.get.mockReturnValue(Promise.resolve({data: articleListMocks}))
        const action = getArticleList({})

        const res = await action(dispatch, getState, extraData);


        expect(res.payload).toEqual(articleListMocks)
    })

    test('если запрос вернул 500 статус должен быть rejected', async () => {
        mockedAxios.get.mockReturnValue(Promise.reject(Error('some reason')))
        const action = getArticleList({})

        const res = await action(dispatch, getState, extraData);

        expect(res.meta.requestStatus).toEqual('rejected')
    });

    test('если запрос вернул 500 handleError Error должен быть вызван', async () => {
        // eslint-disable-next-line prefer-promise-reject-errors
        mockedAxios.get.mockReturnValue(Promise.reject(errorResponse))
        const action = getArticleList({})

        await action(dispatch, getState, extraData);

        expect(ErrorHelper.handleError).toBeCalled()
    });
})