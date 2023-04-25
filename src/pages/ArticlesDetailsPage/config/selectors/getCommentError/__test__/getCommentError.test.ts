import {AppStoreTypes} from "app";
import {getCommentError} from "../getCommentError";

describe('Тестирование селектора getCommentError', () => {
    test('getCommentError должен вернуть корректные данные', () => {
        const state = {
            articleDetailsComments: {
                error: 'error'
            },
        };
        const result = getCommentError({
            articleDetailsComments: {
                error: 'error'
            },
        } as AppStoreTypes);

        expect(result).toEqual(state.articleDetailsComments.error);
    });
})