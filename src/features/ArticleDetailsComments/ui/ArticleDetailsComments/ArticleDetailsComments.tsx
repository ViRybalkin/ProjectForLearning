import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from 'shared';
import { AddCommentForm, CommentList, getUser } from 'entities';
import { AddCommentFormTypes } from 'entities/AddCommentForm/ui/AddCommentForm.types';
import { useSelector } from 'react-redux';
import cls from './ArticleDetailsComments.module.scss';
import { ArticleDetailsCommentsProps } from './ArticleDetailsComments.types';
import { useAddArticleDetailsCommentMutation, useGetArticleDetailsCommentsQuery } from '../../config';

export const ArticleDetailsComments = memo(({ articleId }: ArticleDetailsCommentsProps) => {
  const { t } = useTranslation('articlesDetails');
  const { data: comments, isLoading, error, refetch } = useGetArticleDetailsCommentsQuery(articleId);
  const errorMessage = JSON.stringify(error);
  const [addComment] = useAddArticleDetailsCommentMutation();
  const userData = useSelector(getUser);

  const addNewCommentHandler = useCallback(
    (form: AddCommentFormTypes) => {
      addComment({ comment: form.newComment, postId: articleId, userId: userData?.id });
      refetch();
    },
    [addComment]
  );
  return (
    <>
      <Typography classname={cls.commentTitle} variant='h2'>
        {t('commentTitle')}
      </Typography>
      <AddCommentForm submitHandler={(form) => addNewCommentHandler(form)} />
      <CommentList comments={comments || []} error={errorMessage} isLoading={isLoading} />
    </>
  );
});
