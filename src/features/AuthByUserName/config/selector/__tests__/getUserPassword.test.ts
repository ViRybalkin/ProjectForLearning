import {AppStoreTypes} from "@/app/providers/StoreProvider";
import {getUserPassword} from "../getUserPassword";

describe('Тестирование селектора getUserName', () => {
    test('getUserName должен вернуть корректные данные', () => {
        const state = {
            login: {
                password: '123',
                username: 'name',
            },
        };
        const result = getUserPassword({
            login: {
                password: '123',
                username: 'name',
            },
        } as AppStoreTypes);

        expect(result).toEqual(state.login.password);
    });
})