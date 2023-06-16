import {userAction} from "@/entities/User";
import {$api} from "@/shared/api/api";
import {authByUserNameThunk} from "../LoginByUserName.service";
import {UserData} from "../../types/AuthByUserName.types";

const errorResponse = {data: {message: 'error'}}
const mockedAxios = jest.mocked($api, true)
jest.mock('shared/config/api/api');

jest.mock('shared/config/helpers/error', () => ({
    handleError: jest.fn().mockReturnValue(errorResponse),
}));
describe('Тестирование сервиса loginByUserName', () => {
    const requestData: UserData = {
        password: 'password',
        username: 'name'
    };
    const responseData = {
        avatar: 'avatar',
        id: 'someId',
        username: 'name'
    }

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
        mockedAxios.post.mockReturnValue(Promise.resolve({data: responseData}))
        const action = authByUserNameThunk(requestData)

        const res = await action(dispatch, getState, extraData);

        expect(res.meta.requestStatus).toEqual('fulfilled')
    });

    test('если запрос вернул 200 данные должны быть корректны', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({data: responseData}))
        const action = authByUserNameThunk(requestData)

        await action(dispatch, getState, extraData);

        expect(dispatch).toHaveBeenCalledWith(userAction.setUserData({
            avatar: responseData.avatar,
            id: responseData.id,
            isAuth: true,
            username: responseData.username,
        }))
    })

    test('если запрос вернул 200 localStorage должен засетить корректные данные', async () => {
        jest.spyOn(Storage.prototype, 'setItem');
        Storage.prototype.setItem = jest.fn();
        mockedAxios.post.mockReturnValue(Promise.resolve({data: responseData}))
        const action = authByUserNameThunk(requestData)

        await action(dispatch, getState, extraData);

        expect(localStorage.setItem).toHaveBeenCalledWith('auth', JSON.stringify({
            avatar: responseData.avatar,
            id: responseData.id,
            username: responseData.username,
        }))
    });

    test('если запрос вернул 500 статус должен быть rejected', async () => {
        jest.spyOn(Storage.prototype, 'setItem');
        Storage.prototype.setItem = jest.fn();
        // eslint-disable-next-line prefer-promise-reject-errors
        mockedAxios.post.mockReturnValue(Promise.reject(errorResponse))
        const action = authByUserNameThunk(requestData)

        const res = await action(dispatch, getState, extraData);

        expect(res.meta.requestStatus).toEqual('rejected')
        expect(localStorage.setItem).not.toHaveBeenCalled();
        expect(dispatch).not.toHaveBeenCalledWith(userAction.setUserData)
    });
})