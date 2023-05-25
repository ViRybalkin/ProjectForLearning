import {EntityState} from "@reduxjs/toolkit";
import {ArticleDetailsDataType, ArticleListView} from "@/entities/ArticleDetails";

export interface ArticleListTypes extends EntityState<ArticleDetailsDataType> {
    error?: string;
    isLoading: boolean;
    view: ArticleListView;
    page: number;
    limit: number;
    hasMore: boolean;
    sortDirection: 'asc' | 'desc';
    sortField: 'views' | 'title' | 'createdAt';
    search: string;
    type: string;
    _inited: boolean;
}

export interface getArticleListProps {
    replace?: boolean;
}