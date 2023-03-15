import {authByUserNameThunk, UserData} from "features";
import {userAction} from "entities";
import {$api} from "shared/config/api";

jest.mock('shared/config/api');
const mockedAxios = jest.mocked($api, true)

describe('Тестирование сервиса loginByUserName', () => {
  const requestData: UserData = {
    username: 'name',
    password: 'password'
  };
  const responseData = {
    username: 'name',
    id: 'someId'
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
      username: responseData.username,
      id: responseData.id,
      isAuth: true,
    }))
  })

  test('если запрос вернул 200 localStorage должен засетить корректные данные', async () => {
    jest.spyOn(Storage.prototype, 'setItem');
    Storage.prototype.setItem = jest.fn();
    mockedAxios.post.mockReturnValue(Promise.resolve({data: responseData}))
    const action = authByUserNameThunk(requestData)

    await action(dispatch, getState, extraData);

    expect(localStorage.setItem).toHaveBeenCalledWith('auth', JSON.stringify({
      username: responseData.username,
      id: responseData.id,
    }))
  });

  test('если запрос вернул 500 статус должен быть rejected', async () => {
    jest.spyOn(Storage.prototype, 'setItem');
    Storage.prototype.setItem = jest.fn();
    mockedAxios.post.mockReturnValue(Promise.reject(Error('some reason')))
    const action = authByUserNameThunk(requestData)

    const res = await action(dispatch, getState, extraData);

    expect(res.meta.requestStatus).toEqual('rejected')
    expect(localStorage.setItem).not.toHaveBeenCalled();
    expect(dispatch).not.toHaveBeenCalledWith(userAction.setUserData())
  });
})