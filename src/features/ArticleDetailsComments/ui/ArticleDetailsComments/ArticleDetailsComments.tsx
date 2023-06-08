import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Typography } from '@/shared/ui/Typography';
import { AddCommentForm, AddCommentFormTypes } from '@/entities/AddCommentForm';
import { CommentList } from '@/entities/Comments';
import { getUser } from '@/entities/User';
import cls from './ArticleDetailsComments.module.scss';
import { ArticleDetailsCommentsProps } from './ArticleDetailsComments.types';
import { useAddArticleDetailsCommentMutation } from '../../config/service/addArticleDetailsComment.service';
import { useGetArticleDetailsCommentsQuery } from '../../config/service/getArticleDetailsComments.service';

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
