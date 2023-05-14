import {ArticleDetailsDataType} from "entities";
import {rtkApi} from "shared/config/api/rtkApi";

const getRecommendationList = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getRecommendationList: build.query<Array<ArticleDetailsDataType>, void>({
            query: () => ({
                url: '/articles',
                params: {
                    _limit: 4,
                }
            }),
        }),
    }),
})

export const {useGetRecommendationListQuery} = getRecommendationList;