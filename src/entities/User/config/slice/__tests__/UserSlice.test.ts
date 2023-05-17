import { userAction, userReducer } from '../UserSlice';

describe('Тестирование слайса authByUserName', () => {
  test('должен вернуть начальное состояние', () => {
    expect(userReducer(undefined, { type: undefined })).toEqual({
      username: '',
      id: '',
      avatar: '',
      isAuth: false,
      _inited: false,
    });
  });

  test('после вызова setUserData стейт должен содержать корректные данные', () => {
    const data = {
      username: 'name',
      id: 'someId',
      avatar: 'avatar',
      isAuth: true,
      _inited: false,
    };
    expect(userReducer(undefined, userAction.setUserData(data))).toEqual(data);
  });

  test('после вызова logout стейт должен содержать корректные данные', () => {
    expect(userReducer(undefined, userAction.logout())).toEqual({
      username: '',
      id: '',
      avatar: '',
      isAuth: false,
      _inited: false,
    });
  });

  test('после вызова setInitData стейт должен содержать корректные данные', () => {
    localStorage.setItem(
      'auth',
      JSON.stringify({
        username: 'name',
        id: 'someId',
      })
    );

    expect(userReducer(undefined, userAction.initUserData())).toEqual({
      username: 'name',
      id: 'someId',
      isAuth: true,
      _inited: true,
    });
  });

  test('если localStorage не имеет данных setInitData стейт должен содержать корректные данные', () => {
    localStorage.removeItem('auth');

    expect(userReducer(undefined, userAction.initUserData())).toEqual({
      username: '',
      id: '',
      avatar: '',
      isAuth: false,
      _inited: true,
    });
  });
});
