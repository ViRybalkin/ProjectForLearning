import {ArticleDetailsDataType} from "entities";
import {EntityState} from "@reduxjs/toolkit";

export interface ArticleDetailsRecommendationTypes extends EntityState<ArticleDetailsDataType> {
    isLoading?: boolean;
    error?: string;
}