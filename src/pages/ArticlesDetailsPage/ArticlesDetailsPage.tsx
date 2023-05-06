import React, { useCallback, useEffect } from 'react';
import { ArticleDetails, ArticleDetailsReducer, ArticleList } from 'entities';
import { useParams } from 'react-router-dom';
import { AppLink, Button, Typography } from 'shared';
import { Page } from 'widget';
import { CommentList } from 'entities/Comments/ui';
import { useTranslation } from 'react-i18next';
import { DynamicComponent, useAppDispatch } from 'app';
import { useSelector } from 'react-redux';
import { AddCommentForm, AddCommentFormTypes } from 'features';
import { routerPath } from 'shared/config/routes/Routes';
import cls from './ArticlesDetailsPage.module.scss';
import {
  getCommentError,
  getCommentIsLoading,
  getRecommendationError,
  getRecommendationIsLoading,
} from './config/selectors';
import {
  addCommentFormService,
  ArticleDetailsCommentsReducer,
  ArticleDetailsRecommendationReducer,
  commentSelector,
  getArticleDetailsRecommendation,
  getCommentsByArticleId,
  recommendationSelector,
} from './config';

const reducer = {
  articleDetailsComments: ArticleDetailsCommentsReducer,
  articleDetails: ArticleDetailsReducer,
  articleDetailsRecommendation: ArticleDetailsRecommendationReducer,
};

const ArticlesDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('articlesDetails');
  const comments = useSelector(commentSelector.selectAll);
  const recommendation = useSelector(recommendationSelector.selectAll);
  const recommendationError = useSelector(getRecommendationError);
  const recommendationIsLoading = useSelector(getRecommendationIsLoading);
  const error = useSelector(getCommentError);
  const isLoading = useSelector(getCommentIsLoading);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (id) {
      dispatch(getCommentsByArticleId(id));
      dispatch(getArticleDetailsRecommendation());
    }
  }, [dispatch, id]);

  const addNewCommentHandler = useCallback(
    (form: AddCommentFormTypes) => {
      dispatch(addCommentFormService(form.newComment));
    },
    [dispatch]
  );

  return (
    <DynamicComponent reducers={reducer} shouldRemoveAfterUnmount>
      <Page>
        <AppLink to={routerPath.articlesPage}>
          <Button theme='contained'>{t('backToArticleList')}</Button>
        </AppLink>
        <ArticleDetails articleId={id} />
        <Typography classname={cls.commentTitle} variant='h2'>
          {t('recommendationTitle')}
        </Typography>
        <ArticleList
          articles={recommendation}
          view='SMALL'
          target='_blank'
          isLoading={recommendationIsLoading}
          error={recommendationError}
          classname={cls.recommendation}
        />
        <Typography classname={cls.commentTitle} variant='h2'>
          {t('commentTitle')}
        </Typography>
        <AddCommentForm submitHandler={(form) => addNewCommentHandler(form)} />
        <CommentList comments={comments} error={error} isLoading={isLoading} />
      </Page>
    </DynamicComponent>
  );
};

export default ArticlesDetailsPage;
