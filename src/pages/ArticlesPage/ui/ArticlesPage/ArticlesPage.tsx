import React, { useCallback } from 'react';
import { ArticleList } from 'entities';
import { useSelector } from 'react-redux';
import { DynamicComponent, useAppDispatch } from 'app';
import { TabItem, useDebounce, useInitialEffect } from 'shared';
import { Page } from 'widget';
import {
  ArticleListReducer,
  articleListSelector,
  articlePageInitialEffect,
  getArticleListError,
  getArticleListIsLoading,
  getArticleListView,
  getPaginatedArticleListService,
} from '../../config';
import { ArticlesFilters } from '../ArticlesFilters/ArticlesFilters';

const reducer = {
  articleList: ArticleListReducer,
};
const ArticlesPage = () => {
  const articles = useSelector(articleListSelector.selectAll);
  const isLoading = useSelector(getArticleListIsLoading);
  const error = useSelector(getArticleListError);
  const articleListView = useSelector(getArticleListView);
  const dispatch = useAppDispatch();

  useInitialEffect(() => {
    dispatch(articlePageInitialEffect());
  });

  const onNextPageHandler = useCallback(() => {
    dispatch(getPaginatedArticleListService());
  }, [dispatch]);

  const onFiledChangeHandler = useCallback((value: string) => {
    console.log(value);
  }, []);

  const onDirectionChangeHandler = useCallback((value: string) => {
    console.log(value);
  }, []);

  const onSearchChangeHandler = useCallback((value: string) => {
    console.log(value);
  }, []);

  const onTabChangeHandler = useCallback((tab: TabItem) => {
    console.log(tab);
  }, []);

  const debouncedSearchHandler = useDebounce(onSearchChangeHandler, 500);

  return (
    <DynamicComponent reducers={reducer} shouldRemoveAfterUnmount={false}>
      <Page testId='articlePageId' onScrollEnd={() => onNextPageHandler()}>
        <ArticlesFilters
          onTabChange={onTabChangeHandler}
          onFieldChange={onFiledChangeHandler}
          onDirectionChange={onDirectionChangeHandler}
          onSearchChange={debouncedSearchHandler}
        />
        <ArticleList view={articleListView} isLoading={isLoading} articles={articles} error={error} />
      </Page>
    </DynamicComponent>
  );
};

export default ArticlesPage;
