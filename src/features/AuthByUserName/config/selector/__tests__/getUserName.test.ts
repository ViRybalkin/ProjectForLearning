import {AppStoreTypes} from "@/app/providers/StoreProvider";
import {getUserName} from "../getUserName";

describe('Тестирование селектора getUserName', () => {
    test('getUserName должен вернуть корректные данные', () => {
        const state = {
            login: {
                username: 'name',
                password: '123',
            },
        };
        const result = getUserName({
            login: {
                username: 'name',
                password: '123',
            },
        } as AppStoreTypes);

        expect(result).toEqual(state.login.username);
    });
})