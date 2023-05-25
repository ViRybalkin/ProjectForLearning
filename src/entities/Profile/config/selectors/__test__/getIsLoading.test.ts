import {AppStoreTypes} from "@/app/providers/StoreProvider";
import {getIsLoading} from "../getIsLoading";

describe('Тестирование селектора getIsLoading', () => {
    test('getIsLoading должен вернуть корректные данные', () => {
        const state = {
            profile: {
                isLoading: true
            },
        };
        const result = getIsLoading({
            profile: {
                isLoading: true
            },
        } as AppStoreTypes);

        expect(result).toEqual(state.profile.isLoading);
    });
})