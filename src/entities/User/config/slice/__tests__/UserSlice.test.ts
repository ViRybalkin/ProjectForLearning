import { userAction, userReducer } from '../UserSlice';

describe('Тестирование слайса authByUserName', () => {
  test('должен вернуть начальное состояние', () => {
    expect(userReducer(undefined, { type: undefined })).toEqual({
      _inited: false,
      avatar: '',
      id: '',
      isAuth: false,
      username: '',
    });
  });

  test('после вызова setUserData стейт должен содержать корректные данные', () => {
    const data = {
      _inited: false,
      avatar: 'avatar',
      id: 'someId',
      isAuth: true,
      username: 'name',
    };
    expect(userReducer(undefined, userAction.setUserData(data))).toEqual(data);
  });

  test('после вызова logout стейт должен содержать корректные данные', () => {
    expect(userReducer(undefined, userAction.logout())).toEqual({
      _inited: false,
      avatar: '',
      id: '',
      isAuth: false,
      username: '',
    });
  });

  test('после вызова setInitData стейт должен содержать корректные данные', () => {
    localStorage.setItem(
      'auth',
      JSON.stringify({
        id: 'someId',
        username: 'name',
      })
    );

    expect(userReducer(undefined, userAction.initUserData())).toEqual({
      _inited: true,
      id: 'someId',
      isAuth: true,
      username: 'name',
    });
  });

  test('если localStorage не имеет данных setInitData стейт должен содержать корректные данные', () => {
    localStorage.removeItem('auth');

    expect(userReducer(undefined, userAction.initUserData())).toEqual({
      _inited: true,
      avatar: '',
      id: '',
      isAuth: false,
      username: '',
    });
  });
});
