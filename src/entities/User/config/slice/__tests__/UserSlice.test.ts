import {userAction, userReducer} from '../UserSlice';

describe('Тестирование слайса authByUserName', () => {
    test('должен вернуть начальное состояние', () => {
        expect(userReducer(undefined, {type: undefined})).toEqual({
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
});
