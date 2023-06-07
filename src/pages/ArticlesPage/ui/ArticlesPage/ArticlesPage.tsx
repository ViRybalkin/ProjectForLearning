import React, { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DynamicComponent } from '@/shared/providers/DynamicComponent';
import { Page } from '@/widget/Page';
import { ArticleList } from '@/entities/ArticleDetails';
import { useInitialEffect } from '@/shared/helpers/useInitialEffect';
import { getArticleListIsLoading } from '../../config/selectors/getArticleListIsLoading';
import { ArticleListReducer, articleListSelector } from '../../config/slice/articlesSlice';
import { getArticleListError } from '../../config/selectors/getArticleListError';
import { articlePageInitialEffect } from '../../config/service/articlePageInitialEffect.service';
import { getArticleListView } from '../../config/selectors/getArticleListView';
import { getPaginatedArticleListService } from '../../config/service/getPaginatedArticleList.service';
import { ArticlesFilters } from '../ArticlesFilters/ArticlesFilters';
import { useAppDispatch } from '@/shared/helpers/useAppDispatch';

const reducer = {
  articleList: ArticleListReducer,
};
const ArticlesPage = () => {
  const articles = useSelector(articleListSelector.selectAll);
  const isLoading = useSelector(getArticleListIsLoading);
  const error = useSelector(getArticleListError);
  const articleListView = useSelector(getArticleListView);
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  useInitialEffect(() => {
    dispatch(articlePageInitialEffect(searchParams));
  });

  const onNextPageHandler = useCallback(() => {
    dispatch(getPaginatedArticleListService());
  }, [dispatch]);

  return (
    <DynamicComponent reducers={reducer} shouldRemoveAfterUnmount={false}>
      <Page testId='articlePageId' onScrollEnd={() => onNextPageHandler()}>
        <ArticlesFilters />
        <ArticleList view={articleListView} isLoading={isLoading} articles={articles} error={error} />
      </Page>
    </DynamicComponent>
  );
};

export default ArticlesPage;
