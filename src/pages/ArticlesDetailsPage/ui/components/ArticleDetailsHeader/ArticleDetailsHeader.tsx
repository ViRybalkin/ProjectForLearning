import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';
import { AppLink } from '@/shared/ui/AppLink';
import { generateRoute } from '@/shared/constants';

export const ArticleDetailsHeader = memo(() => {
  const { t } = useTranslation('articlesDetails');
  return (
    <AppLink to={generateRoute.articlesPage()}>
      <Button theme='contained'>{t('backToArticleList')}</Button>
    </AppLink>
  );
});
