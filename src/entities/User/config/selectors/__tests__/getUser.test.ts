import {AppStoreTypes} from '@/app/providers/StoreProvider';
import {getUser} from '../getUser';

describe('Тестирование селектора getUser', () => {
    test('getUser должен вернуть корректные данные', () => {
        const state = {
            user: {
                id: 'id',
                isAuth: true,
                username: 'name',
            },
        };
        const result = getUser({
            user: {
                id: 'id',
                isAuth: true,
                username: 'name',
            },
        } as AppStoreTypes);

        expect(result).toEqual(state.user);
    });
});
