import React, { useEffect } from 'react';
import { ArticleList } from 'entities';
import { useSelector } from 'react-redux';
import { DynamicComponent, useAppDispatch } from 'app';
import { getArticleListView } from 'pages/ArticlesPage/config/selectors/getArticleListVIew/getArticleListView';
import { getArticleListError } from 'pages/ArticlesPage/config/selectors/getArticleListError/getArticleListError';
import { getArticleList } from './config/service/getArticles.service';
import { ArticleListAction, ArticleListReducer, articleListSelector } from './config/slice/articlesSlice';
import { getArticleListIsLoading } from './config/selectors/getArticleListIsLoading';

const reducer = {
  articleList: ArticleListReducer,
};
const ArticlesPage = () => {
  const articles = useSelector(articleListSelector.selectAll);
  const isLoading = useSelector(getArticleListIsLoading);
  const error = useSelector(getArticleListError);
  const articleListView = useSelector(getArticleListView);
  const dispatch = useAppDispatch();

  console.log(error);

  useEffect(() => {
    dispatch(getArticleList());
    dispatch(ArticleListAction.initArticleListView);
  }, [dispatch]);

  return (
    <DynamicComponent reducers={reducer} shouldRemoveAfterUnmount>
      <ArticleList view={articleListView} isLoading={isLoading} articles={articles} error={error} />
    </DynamicComponent>
  );
};

export default ArticlesPage;
