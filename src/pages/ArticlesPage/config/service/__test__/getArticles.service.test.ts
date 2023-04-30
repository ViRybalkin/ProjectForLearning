import {$api} from "shared/config/api/api";
import * as ErrorHelper from "shared/config/helpers/error";
import {articleListMocks} from "app/__mocks__";
import {getArticleList} from "../getArticles.service";

const errorResponse = {data: {message: 'error'}}
const mockedAxios = jest.mocked($api, true)
jest.mock('shared/config/api/api');

jest.mock('shared/config/helpers/error', () => ({
    handleError: jest.fn().mockReturnValue(errorResponse),
}));
describe('Тестирование сервиса getArticles', () => {

    const extraData = {
        api: mockedAxios,
        navigate: jest.fn()
    }

    const dispatch = jest.fn();
    const getState = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    })


    test('статус запроса должен быть корректным', async () => {
        mockedAxios.get.mockReturnValue(Promise.resolve({data: articleListMocks}))
        const action = getArticleList()

        const res = await action(dispatch, getState, extraData);

        expect(res.meta.requestStatus).toEqual('fulfilled')
    });

    test('если запрос вернул 200 данные должны быть корректны', async () => {
        mockedAxios.get.mockReturnValue(Promise.resolve({data: articleListMocks}))
        const action = getArticleList()

        const res = await action(dispatch, getState, extraData);


        expect(res.payload).toEqual(articleListMocks)
    })

    test('если запрос вернул 500 статус должен быть rejected', async () => {
        mockedAxios.get.mockReturnValue(Promise.reject(Error('some reason')))
        const action = getArticleList()

        const res = await action(dispatch, getState, extraData);

        expect(res.meta.requestStatus).toEqual('rejected')
    });

    test('если запрос вернул 500 handleError Error должен быть вызван', async () => {
        // eslint-disable-next-line prefer-promise-reject-errors
        mockedAxios.get.mockReturnValue(Promise.reject(errorResponse))
        const action = getArticleList()

        await action(dispatch, getState, extraData);

        expect(ErrorHelper.handleError).toBeCalled()
    });
})