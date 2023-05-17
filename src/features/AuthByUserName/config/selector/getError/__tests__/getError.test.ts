import {AppStoreTypes} from "app/providers/StoreProvider";
import {getError} from "../getError";

describe('Тестирование селектора getError', () => {
    test('getError должен вернуть корректные данные', () => {
        const state = {
            login: {
                username: 'name',
                password: '123',
                error: 'text error'
            },
        };
        const result = getError({
            login: {
                username: 'name',
                password: '123',
                error: 'text error'
            },
        } as AppStoreTypes);

        expect(result).toEqual(state.login.error);
    });
})