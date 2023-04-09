import React, { memo } from 'react';
import { Skeleton, Typography } from 'shared';
import { useTranslation } from 'react-i18next';
import cls from 'entities/Comments/ui/CommentCard/CommentCard.module.scss';
import { CommentListProps } from './CommentList.types';
import { CommentCard } from '../CommentCard/CommentCard';

export const CommentList = memo(({ comments, isLoading, error }: CommentListProps) => {
  const { t } = useTranslation('articlesDetails');

  if (error) {
    return (
      <div className={cls.errorWrapper}>
        <Typography align='center' variant='h1'>
          {error}
        </Typography>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className={cls.commentWrapper}>
        <div className={cls.commentWrapper__userInfo}>
          <Skeleton width={50} height={50} borderRadius='50%' />
          <Skeleton width={100} height={20} />
        </div>
        <Skeleton width='100%' height={60} />
      </div>
    );
  }

  return (
    <div>
      {comments.length ? (
        comments.map((el) => <CommentCard key={el.id} comment={el} />)
      ) : (
        <Typography>{t('commentsNotFound')}</Typography>
      )}
    </div>
  );
});
