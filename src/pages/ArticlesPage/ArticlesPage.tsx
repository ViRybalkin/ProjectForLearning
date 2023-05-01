import React, { useCallback, useEffect } from 'react';
import { ArticleList, ArticleListView } from 'entities';
import { useSelector } from 'react-redux';
import { DynamicComponent, useAppDispatch } from 'app';
import { ViewSelector } from 'features';
import { Page } from 'shared';
import {
  ArticleListAction,
  ArticleListReducer,
  articleListSelector,
  getArticleList,
  getArticleListError,
  getArticleListIsLoading,
  getArticleListView,
  getPaginatedArticleListService,
} from './config';

const reducer = {
  articleList: ArticleListReducer,
};
const ArticlesPage = () => {
  const articles = useSelector(articleListSelector.selectAll);
  const isLoading = useSelector(getArticleListIsLoading);
  const error = useSelector(getArticleListError);
  const articleListView = useSelector(getArticleListView);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(ArticleListAction.initArticleListView());
      dispatch(getArticleList(1));
    }
  }, [dispatch]);

  const onNextPageHandler = useCallback(() => {
    dispatch(getPaginatedArticleListService());
  }, [dispatch]);

  const onViewClickHandler = useCallback(
    (view: ArticleListView) => {
      dispatch(ArticleListAction.setArticleListView(view));
    },
    [dispatch]
  );

  return (
    <DynamicComponent reducers={reducer} shouldRemoveAfterUnmount>
      <Page testId='articlePageId' onScrollEnd={() => onNextPageHandler()}>
        <ViewSelector view={articleListView} onViewClick={onViewClickHandler} />
        <ArticleList view={articleListView} isLoading={isLoading} articles={articles} error={error} />
      </Page>
    </DynamicComponent>
  );
};

export default ArticlesPage;
