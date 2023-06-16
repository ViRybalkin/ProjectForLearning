import {AppStoreTypes} from "@/app/providers/StoreProvider";
import {getUserData} from "../getUserData";

describe('Тестирование селектора getUserData', () => {
    test('getUserData должен вернуть корректные данные', () => {
        const state = {
            login: {
                password: '123',
                username: 'name',
            },
        };
        const result = getUserData({
            login: {
                password: '123',
                username: 'name',
            },
        } as AppStoreTypes);

        expect(result).toEqual(state.login);
    });
})