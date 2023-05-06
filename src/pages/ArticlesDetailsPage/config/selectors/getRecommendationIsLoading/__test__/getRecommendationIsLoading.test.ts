import {AppStoreTypes} from "app";
import {getRecommendationIsLoading} from "../getRecommendationIsLoading";

describe('Тестирование селектора getRecommendationIsLoading', () => {
    test('getRecommendationIsLoading должен вернуть корректные данные', () => {
        const state = {
            articleDetailsRecommendation: {
                isLoading: true
            },
        };
        const result = getRecommendationIsLoading({
            articleDetailsRecommendation: {
                isLoading: true
            },
        } as AppStoreTypes);

        expect(result).toEqual(state.articleDetailsRecommendation.isLoading);
    });
})