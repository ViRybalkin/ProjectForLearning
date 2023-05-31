import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { VStack } from '@/shared/ui/VStack';
import { Typography } from '@/shared/ui/Typography';
import { ArticleList } from '@/entities/ArticleDetails';
import cls from './RecommendationList.module.scss';
import { useGetRecommendationListQuery } from '../../config/service/getRecommendationList.service';

export const RecommendationList = memo(() => {
  const { t } = useTranslation('articlesDetails');
  const { data: articles, isLoading, error } = useGetRecommendationListQuery();

  const errorMessage = JSON.stringify(error);

  return (
    <VStack fullWidth gap='8' align='start'>
      <Typography variant='h2'>{t('recommendationTitle')}</Typography>
      <ArticleList
        articles={articles || []}
        view='SMALL'
        target='_blank'
        isLoading={isLoading}
        error={errorMessage}
        classname={cls.recommendation}
      />
    </VStack>
  );
});
