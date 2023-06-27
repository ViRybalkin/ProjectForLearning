import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ArticleRatingProps } from './ArticleRating.types';
import { Rating } from '@/entities/Rating';
import { getUser } from '@/entities/User';
import { useGetArticleRatingQuery, useSetFeedbackMutation } from '../../config/service/ArticleRating.service';
import { Skeleton } from '@/shared/ui/Skeleton';

export const ArticleRating = memo(({ articleId }: ArticleRatingProps) => {
  const { id: userId } = useSelector(getUser);
  const { t } = useTranslation('articlesDetails');
  const { data, isLoading } = useGetArticleRatingQuery({ articleId, userId });
  const [setArticleRating] = useSetFeedbackMutation();

  const onAccept = useCallback(
    (starCount: number, feedback?: string) => {
      setArticleRating({
        articleId,
        feedback,
        rate: starCount,
        userId,
      });
    },
    [articleId, setArticleRating, userId]
  );

  const articleRating = data?.[0];

  if (isLoading) {
    return (
      <Skeleton
        width='100%'
        height={70}
      />
    );
  }

  const ratingTitle = articleRating?.rate ? t('thankForFeedback') : t('LeaveAReview');

  return (
    <Rating
      rate={articleRating?.rate}
      ratingTitle={ratingTitle}
      onAccept={onAccept}
      feedbackTitle=''
      hasFeedback
    />
  );
});
