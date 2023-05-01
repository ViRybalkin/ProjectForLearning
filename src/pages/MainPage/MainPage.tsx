import { useTranslation } from 'react-i18next';
import { Page, Typography } from 'shared';

const MainPage = () => {
  const { t } = useTranslation('mainPage');
  return (
    <Page testId="mainPageTestId">
      <Typography>{t('title')}</Typography>
    </Page>
  );
};

export default MainPage;
