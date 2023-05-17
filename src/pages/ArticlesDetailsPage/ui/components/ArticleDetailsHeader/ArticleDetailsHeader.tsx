import React, { memo } from 'react';
import { routerPath } from 'shared/config/routes/Routes';
import { Button } from 'shared/ui/Button';
import { AppLink } from 'shared/ui/AppLink';
import { useTranslation } from 'react-i18next';

export const ArticleDetailsHeader = memo(() => {
  const { t } = useTranslation('articlesDetails');
  return (
    <AppLink to={routerPath.articlesPage}>
      <Button theme='contained'>{t('backToArticleList')}</Button>
    </AppLink>
  );
});
