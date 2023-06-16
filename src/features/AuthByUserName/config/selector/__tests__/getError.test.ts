import {AppStoreTypes} from "@/app/providers/StoreProvider";
import {getError} from "../getError";

describe('Тестирование селектора getError', () => {
    test('getError должен вернуть корректные данные', () => {
        const state = {
            login: {
                error: 'text error',
                password: '123',
                username: 'name'
            },
        };
        const result = getError({
            login: {
                error: 'text error',
                password: '123',
                username: 'name'
            },
        } as AppStoreTypes);

        expect(result).toEqual(state.login.error);
    });
})