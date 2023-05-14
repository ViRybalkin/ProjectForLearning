import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, VStack } from 'shared';
import { ArticleList } from 'entities';
import cls from './RecommendationList.module.scss';
import { useGetRecommendationListQuery } from '../../config/service';

export const RecommendationList = memo(() => {
  const { t } = useTranslation('articlesDetails');
  const { data: articles, isLoading, error } = useGetRecommendationListQuery();

  const errorMessage = JSON.stringify(error);

  return (
    <VStack gap='8' align='start'>
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
