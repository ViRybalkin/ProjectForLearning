import {AppStoreTypes} from "@/app/providers/StoreProvider";
import {getUserData} from "../getUserData";

describe('Тестирование селектора getUserData', () => {
    test('getUserData должен вернуть корректные данные', () => {
        const state = {
            login: {
                username: 'name',
                password: '123',
            },
        };
        const result = getUserData({
            login: {
                username: 'name',
                password: '123',
            },
        } as AppStoreTypes);

        expect(result).toEqual(state.login);
    });
})