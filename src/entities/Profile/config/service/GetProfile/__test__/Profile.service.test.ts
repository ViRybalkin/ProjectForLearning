import * as ErrorHelper from "@/shared/helpers/error";
import {$api} from "@/shared/api/api";
import {getProfile} from "../../GetProfile/Profile.service";

const errorResponse = {data: {message: 'error'}}

jest.mock('@/shared/api/api');

jest.mock('@/shared/helpers/error', () => ({
    handleError: jest.fn().mockReturnValue(errorResponse),
}));
const mockedAxios = jest.mocked($api, true)

const response = {
    age: 22,
    avatar: 'avatar',
    city: 'city',
    country: 'country',
    currency: 'currency',
    first: 'first',
    lastname: 'lastname',
    username: 'username',
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