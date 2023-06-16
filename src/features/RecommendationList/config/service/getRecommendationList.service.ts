import {ArticleDetailsDataType} from "@/entities/ArticleDetails";
import {rtkApi} from "@/shared/api/rtkApi";

const getRecommendationList = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getRecommendationList: build.query<Array<ArticleDetailsDataType>, void>({
            query: () => ({
                params: {
                    _limit: 4,
                },
                url: '/articles'
            }),
        }),
    }),
})

export const {useGetRecommendationListQuery} = getRecommendationList;