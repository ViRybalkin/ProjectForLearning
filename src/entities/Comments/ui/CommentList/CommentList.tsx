import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Skeleton } from '@/shared/ui/Skeleton';
import { VStack } from '@/shared/ui/VStack';
import { Typography } from '@/shared/ui/Typography';
import cls from './CommentList.module.scss';
import { CommentListProps } from './CommentList.types';
import { CommentCard } from '../CommentCard/CommentCard';

export const CommentList = memo(({ comments, error, isLoading }: CommentListProps) => {
  const { t } = useTranslation('articlesDetails');

  if (error) {
    return (
      <div>
        <Typography
          align='center'
          variant='h1'>
          {error}
        </Typography>
      </div>
    );
  }

  if (isLoading) {
    return (
      <VStack
        fullWidth
        classname={cls.loadingWrapper}
        align='start'
        gap='10'
        dataTestid='commentListLoading'>
        <VStack
          gap='10'
          align='start'>
          <Skeleton
            width={50}
            height={50}
            borderRadius='50%'
          />
          <Skeleton
            width={100}
            height={20}
          />
        </VStack>
        <Skeleton
          width='100%'
          height={60}
        />
      </VStack>
    );
  }

  return (
    <VStack fullWidth>
      {comments.length ? (
        comments.map((el) => (
          <CommentCard
            key={el.id}
            comment={el}
          />
        ))
      ) : (
        <Typography>{t('commentsNotFound')}</Typography>
      )}
    </VStack>
  );
});
