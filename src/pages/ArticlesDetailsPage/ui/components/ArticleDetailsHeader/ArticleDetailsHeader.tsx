import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';
import { AppLink } from '@/shared/ui/AppLink';
import { routerPath } from '@/shared/constants';

export const ArticleDetailsHeader = memo(() => {
  const { t } = useTranslation('articlesDetails');
  return (
    <AppLink to={routerPath.articlesPage}>
      <Button theme='contained'>{t('backToArticleList')}</Button>
    </AppLink>
  );
});
