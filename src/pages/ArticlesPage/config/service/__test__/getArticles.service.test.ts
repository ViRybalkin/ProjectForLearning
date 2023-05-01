import {$api} from "shared/config/api/api";
import * as ErrorHelper from "shared/config/helpers/error";
import {articleListMocks} from "app/__mocks__";
import {getArticleList} from "../getArticles.service";
import * as Selector from '../../selectors/getArticleListLimit'

const errorResponse = {data: {message: 'error'}}
const mockedAxios = jest.mocked($api, true)
jest.mock('shared/config/api/api');

jest.mock('shared/config/helpers/error', () => ({
    handleError: jest.fn().mockReturnValue(errorResponse),
}));

jest.mock('../../selectors/getArticleListLimit', () => ({
    // @ts-ignore
    ...jest.requireActual('../../selectors/getArticleListLimit'),
    __esModule: true,
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
        jest.spyOn(Selector, 'getArticleListLimit').mockReturnValue(9);
        mockedAxios.get.mockReturnValue(Promise.resolve({data: articleListMocks}))
        const action = getArticleList(1)

        const res = await action(dispatch, getState, extraData);
        console.log(res);

        expect(res.meta.requestStatus).toEqual('fulfilled')
    });

    test('если запрос вернул 200 данные должны быть корректны', async () => {
        mockedAxios.get.mockReturnValue(Promise.resolve({data: articleListMocks}))
        const action = getArticleList(1)

        const res = await action(dispatch, getState, extraData);


        expect(res.payload).toEqual(articleListMocks)
    })

    test('если запрос вернул 500 статус должен быть rejected', async () => {
        mockedAxios.get.mockReturnValue(Promise.reject(Error('some reason')))
        const action = getArticleList(1)

        const res = await action(dispatch, getState, extraData);

        expect(res.meta.requestStatus).toEqual('rejected')
    });

    test('если запрос вернул 500 handleError Error должен быть вызван', async () => {
        // eslint-disable-next-line prefer-promise-reject-errors
        mockedAxios.get.mockReturnValue(Promise.reject(errorResponse))
        const action = getArticleList(1)

        await action(dispatch, getState, extraData);

        expect(ErrorHelper.handleError).toBeCalled()
    });
})