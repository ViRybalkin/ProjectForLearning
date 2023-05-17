import {AppStoreTypes} from 'app/providers/StoreProvider';
import {getUser} from '../getUser';

describe('Тестирование селектора getUser', () => {
    test('getUser должен вернуть корректные данные', () => {
        const state = {
            user: {
                username: 'name',
                id: 'id',
                isAuth: true,
            },
        };
        const result = getUser({
            user: {
                username: 'name',
                id: 'id',
                isAuth: true,
            },
        } as AppStoreTypes);

        expect(result).toEqual(state.user);
    });
});
