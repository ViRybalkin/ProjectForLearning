import React, { useCallback, useEffect } from 'react';
import { ArticleDetails } from 'entities';
import { useParams } from 'react-router-dom';
import { Typography } from 'shared';
import { CommentList } from 'entities/Comments/ui';
import { useTranslation } from 'react-i18next';
import { DynamicComponent, useAppDispatch } from 'app';
import { useSelector } from 'react-redux';
import { AddCommentForm, AddCommentFormTypes } from 'features';
import cls from './ArticlesDetailsPage.module.scss';
import { getCommentError, getCommentIsLoading } from './config/selectors';
import {
  addCommentFormService,
  ArticleDetailsCommentsReducer,
  commentSelector,
  getCommentsByArticleId,
} from './config';

const reducer = {
  articleDetailsComments: ArticleDetailsCommentsReducer,
};

const ArticlesDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('articlesDetails');
  const comments = useSelector(commentSelector.selectAll);
  const error = useSelector(getCommentError);
  const isLoading = useSelector(getCommentIsLoading);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (id) {
      dispatch(getCommentsByArticleId(id));
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
      <ArticleDetails articleId={id} />
      <Typography classname={cls.commentTitle} variant='h2'>
        {t('commentTitle')}
      </Typography>
      <AddCommentForm submitHandler={(form) => addNewCommentHandler(form)} />
      <CommentList comments={comments} error={error} isLoading={isLoading} />
    </DynamicComponent>
  );
};

export default ArticlesDetailsPage;
