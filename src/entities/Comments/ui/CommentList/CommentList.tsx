import React, { memo } from 'react';
import { Typography } from 'shared';
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

  return (
    <div>
      {comments.length ? (
        comments.map((el) => <CommentCard key={el.id} comment={el} isLoading={isLoading} />)
      ) : (
        <Typography>{t('commentsNotFound')}</Typography>
      )}
    </div>
  );
});
