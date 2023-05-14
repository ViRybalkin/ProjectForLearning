import React, { memo } from 'react';
import { Skeleton, Typography, VStack } from 'shared';
import { useTranslation } from 'react-i18next';
import cls from './CommentList.module.scss';
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
      <VStack classname={cls.loadingWrapper} align='start' gap='10' data-testid='commentListLoading'>
        <VStack gap='10' align='start'>
          <Skeleton width={50} height={50} borderRadius='50%' />
          <Skeleton width={100} height={20} />
        </VStack>
        <Skeleton width='100%' height={60} />
      </VStack>
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
