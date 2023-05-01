import { useTranslation } from 'react-i18next';
import { Page } from 'shared';
import cls from './notFound.module.scss';

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <Page testId="NotFoundTestId" classname={cls.notFound}>
      <h1>{t('notFound')}</h1>
    </Page>
  );
};

export default NotFound;
