import {AppStoreTypes} from "@/app/providers/StoreProvider";
import {getIsLoading} from "../getIsLoading";

describe('Тестирование селектора getIsLoading', () => {
    test('getIsLoading должен вернуть корректные данные', () => {
        const state = {
            login: {
                isLoading: true
            },
        };
        const result = getIsLoading({
            login: {
                isLoading: true
            },
        } as AppStoreTypes);

        expect(result).toEqual(state.login.isLoading);
    });
})