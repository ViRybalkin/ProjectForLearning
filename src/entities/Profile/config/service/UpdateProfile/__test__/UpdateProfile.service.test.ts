import {$api} from "shared/config/api/api";
import {updateProfile} from "../../UpdateProfile/UpdateProfile.service";
import {ProfileDataTypes} from "../../../types/Profile.types";
import * as ValidationProfileMock from '../../ValidationErrors/ValidationErrors.service'

jest.mock('shared/config/api/api');

const mockedAxios = jest.mocked($api, true)

const response: ProfileDataTypes = {
    id: '1',
    first: 'first',
    lastname: 'lastname',
    currency: 'currency',
    country: 'country',
    city: 'city',
    username: 'username',
    avatar: 'avatar',
    age: 22,
}
describe('Тестирование сервиса UpdateProfile', () => {
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
        mockedAxios.put.mockReturnValue(Promise.resolve({data: response}))
        const action = updateProfile(response)

        const res = await action(dispatch, getState, extraData);

        expect(res.meta.requestStatus).toEqual('fulfilled')
    });

    test('если запрос вернул 200 данные должны быть корректны', async () => {
        mockedAxios.put.mockReturnValue(Promise.resolve({data: response}))
        const action = updateProfile(response)

        const res = await action(dispatch, getState, extraData);


        expect(res.payload).toEqual(response)
    })
    //
    test('если запрос вернул 500 статус должен быть rejected', async () => {
        mockedAxios.put.mockReturnValue(Promise.reject(Error('some reason')))
        const action = updateProfile(response)

        const res = await action(dispatch, getState, extraData);

        expect(res.meta.requestStatus).toEqual('rejected')
    });

    test('если передан некорректный профиль сервис валидации должен быть вызван ', async () => {
        jest.spyOn(ValidationProfileMock, 'validateProfile')
        const invalidResponse = {
            id: '',
            first: '',
            lastname: '',
            currency: 'currency',
            country: 'country',
            city: 'city',
            username: 'username',
            avatar: 'avatar',
            age: 22,
        }
        const action = updateProfile(invalidResponse)

        await action(dispatch, getState, extraData);

        expect(ValidationProfileMock.validateProfile).toBeCalledWith(invalidResponse)
    });
})