import {AppStoreTypes} from "app";
import {getRecommendationError} from "../getRecommendationError";

describe('Тестирование селектора getRecommendationError', () => {
    test('getRecommendationError должен вернуть корректные данные', () => {
        const state = {
            articleDetailsRecommendation: {
                error: 'error'
            },
        };
        const result = getRecommendationError({
            articleDetailsRecommendation: {
                error: 'error'
            },
        } as AppStoreTypes);

        expect(result).toEqual(state.articleDetailsRecommendation.error);
    });
})