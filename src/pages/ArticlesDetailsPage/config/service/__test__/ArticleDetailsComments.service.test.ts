import {$api} from "shared/config/api/api";
import * as ErrorHelper from "shared/config/helpers/error";
import {getCommentsByArticleId} from "../ArticleDetailsComments.service";

const errorResponse = {data: {message: 'error'}}
const mockedAxios = jest.mocked($api, true)
jest.mock('shared/config/api/api');

jest.mock('shared/config/helpers/error', () => ({
    handleError: jest.fn().mockReturnValue(errorResponse),
}));
describe('Тестирование сервиса getCommentsByArticleId', () => {
    const responseData = [
        {
            id: '1',
            comment: 'коммент 1',
            user: {
                username: 'username 1',
                id: '1',
                avatar: 'avatar 1'
            }
        },    {
            id: '2',
            comment: 'коммент 2',
            user: {
                username: 'username 2',
                id: '2',
                avatar: 'avatar 2'
            }
        },    {
            id: '3',
            comment: 'коммент 3',
            user: {
                username: 'username 3',
                id: '3',
                avatar: 'avatar 3'
            }
        },
    ]

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
        mockedAxios.get.mockReturnValue(Promise.resolve({data: responseData}))
        const action = getCommentsByArticleId('1')

        const res = await action(dispatch, getState, extraData);

        expect(res.meta.requestStatus).toEqual('fulfilled')
    });

    test('если запрос вернул 200 данные должны быть корректны', async () => {
        mockedAxios.get.mockReturnValue(Promise.resolve({data: responseData}))
        const action = getCommentsByArticleId('1')

        const res = await action(dispatch, getState, extraData);


        expect(res.payload).toEqual(responseData)
    })

    test('если запрос вернул 500 статус должен быть rejected', async () => {
        mockedAxios.get.mockReturnValue(Promise.reject(Error('some reason')))
        const action = getCommentsByArticleId('1')

        const res = await action(dispatch, getState, extraData);

        expect(res.meta.requestStatus).toEqual('rejected')
    });

    test('если запрос вернул 500 handleError Error должен быть вызван', async () => {
        // eslint-disable-next-line prefer-promise-reject-errors
        mockedAxios.get.mockReturnValue(Promise.reject(errorResponse))
        const action = getCommentsByArticleId('1')

        await action(dispatch, getState, extraData);

        expect(ErrorHelper.handleError).toBeCalled()
    });
})