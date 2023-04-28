import {getProfile} from "entities";
import * as ErrorHelper from "shared/config/helpers/error";
import {$api} from "shared/config/api/api";

const errorResponse = {data: {message: 'error'}}

jest.mock('shared/config/api/api');

jest.mock('shared/config/helpers/error', () => ({
    handleError: jest.fn().mockReturnValue(errorResponse),
}));
const mockedAxios = jest.mocked($api, true)

const response = {
    first: 'first',
    lastname: 'lastname',
    currency: 'currency',
    country: 'country',
    city: 'city',
    username: 'username',
    avatar: 'avatar',
    age: 22,
}

describe('Тестирование сервиса Profile', () => {
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
        mockedAxios.get.mockReturnValue(Promise.resolve({data: response}))
        const action = getProfile('1')

        const res = await action(dispatch, getState, extraData);

        expect(res.meta.requestStatus).toEqual('fulfilled')
    });

    test('если запрос вернул 200 данные должны быть корректны', async () => {
        mockedAxios.get.mockReturnValue(Promise.resolve({data: response}))
        const action = getProfile('1')

        const res = await action(dispatch, getState, extraData);


        expect(res.payload).toEqual(response)
    })

    test('если запрос вернул 500 статус должен быть rejected', async () => {
        mockedAxios.get.mockReturnValue(Promise.reject(Error('some reason')))
        const action = getProfile('1')

        const res = await action(dispatch, getState, extraData);

        expect(res.meta.requestStatus).toEqual('rejected')
    });

    test('если запрос вернул 500 handleError Error должен быть вызван', async () => {
        // eslint-disable-next-line prefer-promise-reject-errors
        mockedAxios.get.mockReturnValue(Promise.reject(errorResponse))
        const action = getProfile('1')

        await action(dispatch, getState, extraData);

        expect(ErrorHelper.handleError).toBeCalled()
    });

})