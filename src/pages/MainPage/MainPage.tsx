import { useTranslation } from 'react-i18next';
import { Typography } from 'shared';
import { Page } from 'widget';

const MainPage = () => {
  const { t } = useTranslation('mainPage');

  return (
    <Page testId='mainPageTestId'>
      <Typography>{t('title')}</Typography>
    </Page>
  );
};

export default MainPage;
