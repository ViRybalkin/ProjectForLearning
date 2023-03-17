import {authActions, authByUserNameReducer} from "../AuthByUserNameSlice";

describe('Тестирование слайса authByUserName', () => {
  test('должен вернуть начальное состояние', () => {
    expect(authByUserNameReducer(undefined, {type: undefined})).toEqual(
      {
        username: '',
        password: '',
        error: undefined,
        isLoading: false,
      }
    )
  })

  test('стейт должен сожержать корректные данные', () => {
    const data = {
      username: 'name',
      password: 'password',
      isLoading: false,
      error: undefined,
    }
    expect(authByUserNameReducer(undefined, authActions.setUserData(data))).toEqual(
      {
        ...data,
        error: undefined,
        isLoading: false,
      }
    )

  })
})