import React, { useCallback, useEffect } from 'react';
import { ArticleList, ArticleListView } from 'entities';
import { useSelector } from 'react-redux';
import { DynamicComponent, useAppDispatch } from 'app';
import { ViewSelector } from 'features';
import {
  ArticleListAction,
  ArticleListReducer,
  articleListSelector,
  getArticleList,
  getArticleListError,
  getArticleListIsLoading,
  getArticleListView,
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
    dispatch(getArticleList());
    dispatch(ArticleListAction.initArticleListView);
  }, [dispatch]);

  const onViewClickHandler = useCallback(
    (view: ArticleListView) => {
      dispatch(ArticleListAction.setArticleListView(view));
    },
    [dispatch]
  );

  return (
    <DynamicComponent reducers={reducer} shouldRemoveAfterUnmount>
      <ViewSelector view={articleListView} onViewClick={onViewClickHandler} />
      <ArticleList view={articleListView} isLoading={isLoading} articles={articles} error={error} />
    </DynamicComponent>
  );
};

export default ArticlesPage;
