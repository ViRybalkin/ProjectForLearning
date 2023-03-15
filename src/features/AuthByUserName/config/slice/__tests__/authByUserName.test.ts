import {authActions, authByUserNameReducer} from "../AuthByUserNameSlice";

describe('Тестирование слайса authByUserName', () => {
  test('должен вернуть начальное состояние', () => {
    expect(authByUserNameReducer(undefined, {type: undefined})).toEqual(
      {
        username: '',
        password: '',
        error: '',
        isLoading: false,
      }
    )
  })

  test('стейт должен сожержать корректные данные', () => {
    const data = {
      username: 'name',
      password: 'password',
    }
    expect(authByUserNameReducer(undefined, authActions.setUserData(data))).toEqual(
      {
        ...data,
        error: '',
        isLoading: false,
      }
    )

  })
})