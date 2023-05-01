import {EntityState} from "@reduxjs/toolkit";
import {ArticleDetailsDataType, ArticleListView} from "entities";

export interface ArticleListTypes extends EntityState<ArticleDetailsDataType> {
    error?: string;
    isLoading: boolean;
    view: ArticleListView;
    page: number;
    limit: number;
    hasMore: boolean;
}