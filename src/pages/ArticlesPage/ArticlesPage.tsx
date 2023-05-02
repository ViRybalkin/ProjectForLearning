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
  getArticleListInited,
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
  const inited = useSelector(getArticleListInited);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (__PROJECT__ !== 'storybook' && !inited) {
      dispatch(ArticleListAction.initArticleListView());
      dispatch(getArticleList(1));
    }
  }, []);

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
