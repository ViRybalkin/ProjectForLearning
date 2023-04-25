import {AppStoreTypes} from "app";
import {getCommentIsLoading} from "../getCommentIsLoading";

describe('Тестирование селектора getCommentIsLoading', () => {
    test('getIsLoading должен вернуть корректные данные', () => {
        const state = {
            articleDetailsComments: {
                isLoading: true
            },
        };
        const result = getCommentIsLoading({
            articleDetailsComments: {
                isLoading: true
            },
        } as AppStoreTypes);

        expect(result).toEqual(state.articleDetailsComments.isLoading);
    });
})