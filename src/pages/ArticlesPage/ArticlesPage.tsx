import React, { useCallback } from 'react';
import { ArticleList, ArticleListView } from 'entities';
import { useSelector } from 'react-redux';
import { DynamicComponent, useAppDispatch } from 'app';
import { ViewSelector } from 'features';
import { useInitialEffect } from 'shared';
import { Page } from 'widget';
import { articlePageInitialEffect } from 'pages/ArticlesPage/config/service/articlePageInitialEffect.service';
import {
  ArticleListAction,
  ArticleListReducer,
  articleListSelector,
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

  useInitialEffect(() => {
    dispatch(articlePageInitialEffect());
  });

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
    <DynamicComponent reducers={reducer} shouldRemoveAfterUnmount={false}>
      <Page testId='articlePageId' onScrollEnd={() => onNextPageHandler()}>
        <ViewSelector view={articleListView} onViewClick={onViewClickHandler} />
        <ArticleList view={articleListView} isLoading={isLoading} articles={articles} error={error} />
      </Page>
    </DynamicComponent>
  );
};

export default ArticlesPage;
